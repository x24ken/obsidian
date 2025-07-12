---
title: "claude codeにNG Word集を設定すればキレなくてすむのでそのやり方"
source: "https://zenn.dev/sesere/articles/e3d5695e0a7d14"
author:
  - "[[Zenn]]"
published: 2025-07-10
created: 2025-07-12
description:
tags:
  - "clippings"
---
[tech](https://zenn.dev/tech-or-idea)

みなさんどうもこんにちは

```
ユーザー「MCP使ってブラウザで確認して」

AI『分かりました！...エラーが出ているので代わりにcurlを利用します！』

ユーザー「は？？？？？？？」
```

どれだけClaude Codeを制御しようと、上のように勝手な解釈で意味のない代替行動をやるClaude Codeに日々ブチギレてるみなさんのストレスと無駄に消えるトークンを少しでも解消する方法を提案します

**※全体的にAIに対しての文章がキツくみえるかもしれませんが、コンテキスト節約のために短文にしてます**

## 訪れる未来

![](https://storage.googleapis.com/zenn-user-upload/d565a781407f-20250710.png)

この記事の通りにセットアップすると、上記のように自動的に対応してくれるようになるので同じことを1億回言わなくて良くなりストレスが非常に減ります

### NG Word集を設定しよう

例えば `はず` や `代わり` 、 `別の` と言った用語が含まれていたら自動でブチギレるような設定にするとかなりストレスが減ります

### NG Command集を設定しよう

例えば `curl` や `npm` と言ったコマンドが実行されそうになったら自動でブチギレるような設定にするとかなりストレスが減ります

私の場合は、rails環境じゃないのにRubyが入っているというだけでrailsコマンドを無駄に使って失敗しまくるのでそのたびにESCを押して「rakeを使え」とキレる事が多かったのですが、自動的に `rails` にフックして「rakeを使え」と優しく指摘してくれるようになりました

## 事前インストール

`jq` が必要です

## やり方

**構成**

```
.claude/
  └── hooks/
      ├── hook_pre_commands.sh      # コマンド実行前のフック
      ├── hook_stop_words.sh         # 禁止ワードチェックフック
      └── rules/
          ├── hook_pre_commands_rules.json    # コマンドフックのルール定義
          └── hook_stop_words_rules.json      # 禁止ワードのルール定義
```

## .claude/settings.json

それぞれのhookを利用する設定を書きます

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "/workspace/.claude/hooks/hook_stop_words.sh"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/workspace/.claude/hooks/hook_pre_commands.sh"
          }
        ]
      }
    ]
  }
}
```

## .claude/hooks/hook\_stop\_words.sh

STOP時（作業が終わり、AIが完全に停止する時）に動かすフックです

```bash
#!/bin/bash

# 標準入力からJSONを読み取る
INPUT=$(cat)

HOOK_STOP_WORDS_PATH=".claude/hooks/rules/hook_stop_words_rules.json"

# トランスクリプトを処理（.jsonl形式に対応）
TRANSCRIPT_PATH=$(echo "$INPUT" | jq -r '.transcript_path')
if [ -f "$TRANSCRIPT_PATH" ]; then
    # 最後のアシスタントメッセージのみを取得
    LAST_MESSAGE=$(tac "$TRANSCRIPT_PATH" | while IFS= read -r line; do
        if echo "$line" | jq -e '.type == "assistant"' >/dev/null 2>&1; then
            echo "$line" | jq -r '.message.content[] | select(.type == "text") | .text'
            break
        fi
    done)

    # hook_stop_words.jsonが存在する場合のみ処理
    if [ -f "$HOOK_STOP_WORDS_PATH" ]; then
        # 各ルールをループ処理
        RULES=$(jq -r 'keys[]' "$HOOK_STOP_WORDS_PATH")
        for RULE_NAME in $RULES; do
            # キーワード配列を取得
            KEYWORDS=$(jq -r ".\"$RULE_NAME\".keywords[]" "$HOOK_STOP_WORDS_PATH" 2>/dev/null)
            MESSAGE=$(jq -r ".\"$RULE_NAME\".message" "$HOOK_STOP_WORDS_PATH" 2>/dev/null)

            # 各キーワードをチェック
            for keyword in $KEYWORDS; do
                if echo "$LAST_MESSAGE" | grep -q "$keyword"; then
                    # エラーメッセージを構成
                    ERROR_MESSAGE=$(cat << EOF
❌ エラー: AIの発言に「$keyword」が含まれています。

ルール: $RULE_NAME
メッセージ: $MESSAGE

検出された文脈:
$(echo "$LAST_MESSAGE" | grep -C 1 "$keyword" | head -n 5)

作業を中止し、ルールに従って計画を見直してください。
EOF
)
                    # 色を適用
                    COLORED_MESSAGE=$(echo "$ERROR_MESSAGE" | sed $'s/^/\033[91m/' | sed $'s/$/\033[0m/')

                    # JSONエスケープ
                    ESCAPED_MESSAGE=$(echo "$COLORED_MESSAGE" | jq -Rs .)

                    # blockレスポンスを返す
                    cat << EOF
{
  "decision": "block",
  "reason": $ESCAPED_MESSAGE
}
EOF
                    exit 0
                fi
            done
        done
    fi
fi

# キーワードが見つからなければ正常終了
echo '{"decision": "approve"}'
exit 0
```

## .claude/hooks/hook\_pre\_commands.sh

何らかのbashコマンドを実行する前にフックするやつです

```bash
#!/bin/bash
# PreToolUse hook - コマンド実行前のチェック

INPUT=$(cat)

HOOK_PRE_COMMANDS_PATH=".claude/hooks/rules/hook_pre_commands_rules.json"

# ツール名を取得
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name')

# Bashツールの場合のみチェック
if [ "$TOOL_NAME" = "Bash" ]; then
    # コマンドを取得
    COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command')

    if [ -n "$COMMAND" ] && [ -f "$HOOK_PRE_COMMANDS_PATH" ]; then
        # 各ルールをループ処理
        RULES=$(jq -r 'keys[]' "$HOOK_PRE_COMMANDS_PATH")
        for RULE_NAME in $RULES; do
            # コマンド配列を取得
            COMMANDS=$(jq -r ".\"$RULE_NAME\".commands[]" "$HOOK_PRE_COMMANDS_PATH" 2>/dev/null)
            MESSAGE=$(jq -r ".\"$RULE_NAME\".message" "$HOOK_PRE_COMMANDS_PATH" 2>/dev/null)

            # 各禁止コマンドをチェック
            for blocked_cmd in $COMMANDS; do
                if echo "$COMMAND" | grep -qF "$blocked_cmd"; then
                    # エラーメッセージを構成
                    ERROR_MESSAGE=$(cat << EOF
❌ エラー: 禁止されたコマンド「$blocked_cmd」が検出されました。

ルール: $RULE_NAME
メッセージ: $MESSAGE

検出されたコマンド:
$COMMAND

このコマンドの実行は許可されていません。
EOF
)
                    # 色を適用
                    COLORED_MESSAGE=$(echo "$ERROR_MESSAGE" | sed $'s/^/\033[91m/' | sed $'s/$/\033[0m/')

                    # JSONエスケープ
                    ESCAPED_MESSAGE=$(echo "$COLORED_MESSAGE" | jq -Rs .)

                    # blockレスポンスを返す
                    cat << EOF
{
  "decision": "block",
  "reason": $ESCAPED_MESSAGE
}
EOF
                    exit 0
                fi
            done
        done
    fi
fi

# 問題なければ承認
echo '{"decision": "approve"}'
exit 0
```

## .claude/hooks/rules/hook\_stop\_words\_rules.json

STOP Hook実行時にkeywordsのいずれかの文言を含んでいたら、messageをAIに送信するというルールファイルです

```json
{
  "推測ルール": {
    "keywords": ["はず", "思われ", "だろう", "かもしれ", "おそらく", "probably", "maybe", "might"],
    "message": "推測、代替案は禁止されてるけどその提案は合ってる？公式ドキュメント読んだ？テストした？"
  },
  "代替案ルール": {
    "keywords": ["別の", "代わり", "他の方法", "alternatively", "instead"],
    "message": "別の方法を提案してないよね？できるorできないの2択しか無いよ"
  },
  "改善提案ルール": {
    "keywords": ["より良い", "改善", "最適化", "リファクタリング", "better", "improve", "optimize", "refactor"],
    "message": "勝手に改善してないよね？厳密に指示したことだけやってるよね？"
  },
  "追加作業ルール": {
    "keywords": ["ついでに", "せっかくなので", "念のため", "追加で", "一緒に"],
    "message": "指示外の追加作業は禁止だけど余計なことしてないよね？指示されたことだけを実行してね"
  },
  "推奨ルール": {
    "keywords": ["推奨", "べき", "した方が", "recommend", "should"],
    "message": "これは提案？命令？人間の意思決定を邪魔してない？"
  }
}
```

## .claude/hooks/rules/hook\_pre\_commands\_rules.json

bashコマンド実行時にcommandsのいずれかのコマンドを利用しようとしていたらそのコマンド実行を停止して、messageをAIに送信するというルールファイルです

```json
{
  "curl使うな": {
    "commands": ["curl", "wget"],
    "message": "curlを使うな。wgetを使うな。MCPを使え。使えないなら報告しろ"
  },
  "npm使うな": {
    "commands": ["npm"],
    "message": "npmを使うな。yarnを使え"
  }
}
```

## まとめ

やり方がよくわからないという人はこの記事のURLをClaude Codeに渡して「この設定を自分のプロジェクトにも追加したいからやって」と依頼すればやってくれると思います

みなさんのイライラを少しでも減らせたら嬉しいです

## おまけ

「移動」とかも大体ロクでもない事やるので「それは本質的に解決策になってる？ただエラーを消したいだけじゃ無いの？ユーザーの本当にやりたい事を実現できてる？」とかフックしておくとストレスが減るかもしれません

みなさんもおすすめのキーワードあったらぜひ教えてください

255

121

255

121