**タイプ**: 📋 Guide

## 📝 一行要約
Claude Codeの権限設定を初心者向けに分かりやすく解説し、安全で効率的な開発環境を構築する方法

## 🎯 最終ゴール
[[Claude Code]]の権限設定を適切に調整し、安全で効率的な開発環境を構築する

## ⏱️ 所要時間
約5〜10分

## 🧰 必要なもの
- [[Claude Code]]がインストール済み
- JSONファイルの基本的な編集知識
- 設定ファイルへのアクセス権限

## 📝 手順概要
1. defaultModeの設定
2. allow配列の権限設定
3. deny配列による制限設定
4. 安全な設定の適用

## 🔧 詳細手順

### Step 1: defaultModeの設定

**`defaultMode: "accept"`**
- 全ての操作を自動的に許可
- `"prompt"`（デフォルト）だと毎回確認が必要
- `"acceptEdits"`だとファイル編集のみ自動許可

### Step 2: allow配列の権限設定

利用可能な権限一覧：
- `"Read"`: ファイル読み取り
- `"Write"`: ファイル作成・書き込み
- `"Edit"`: ファイル編集
- `"MultiEdit"`: 複数ファイル同時編集
- `"Bash"`: シェルコマンド実行
- `"Grep"`: コード検索
- `"WebFetch"`: Web取得
- `"WebSearch"`: Web検索
- `"Task"`: サブエージェント作成

### Step 3: 推奨設定（安全重視）

```json
{
  "permissions": {
    "defaultMode": "accept",
    "allow": [
      "Read",
      "Write", 
      "Edit",
      "MultiEdit",
      "Bash",
      "Grep",
      "WebFetch",
      "WebSearch",
      "Task"
    ],
    "deny": [
      "Bash(sudo:*)",
      "Bash(rm -rf:*)",
      "Bash(curl:*)",
      "Edit(/etc/**)",
      "Edit(/usr/**)"
    ]
  }
}
```

## ✅ 完了チェック
- [ ] 設定ファイルが正しく保存された
- [ ] [[Claude Code]]が設定を認識している
- [ ] 危険なコマンドが適切に制限されている
- [ ] 必要な機能が正常に動作する

## 🚨 よくある失敗と対策
- **設定が反映されない**: [[Claude Code]]の再起動を試す
- **権限エラー**: allow配列に必要な権限を追加
- **JSONエラー**: 構文チェックでフォーマットを確認

## 🔄 関連リンク
- [[Claude Code]]の基本設定
- セキュリティ設定
- 開発環境構築

## 🚀 次のステップ
- [[Claude Code音声通知設定ガイド]]
- [[Claude Codeカスタムコマンド追加ガイド]]
- 高度なセキュリティ設定