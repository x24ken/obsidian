ターミナル上で実行するコーディング用のAIエージェント
https://www.anthropic.com/claude-code

参考: 
[[なぜClaude CodeはIDEではなくターミナルでの開発なのか？]]
[[Claude Code理解のために何やればいいの？]]

## 料金体系

- Anthropic API
	- 従量課金制（使った分だけ支払い）
- Claude Maxプラン
	- 月額固定料金：¥100ドルから

## 2つのモード

-  対話モード
-  非対話モード
	- 使い方は、`claude -p "Hello world"`


## Claude.mdを作るの推奨

プロジェクトを作ったあとは、`/init`推奨
Claude.mdを作ってくれる
以後、このClaude.mdを読み込みながら作業をしてくれる


## @マークを利用して作成したものを参照できるようにできる

自然言語の指示でOK
`claude.mdに@マークを利用して、作成したシーケンス図を参照できるようにしておいて`

## Escape2回押せば会話履歴戻れる

チェックポイント的な扱い

## 考えてもらいたいときは"think"を使う

"think" < "think hard" < "think harder" < "ultrathink"