**タイプ**: 🔍 Concept

## 📝 一行要約
MCPサーバーとクライアント間でJSON-RPC 2.0メッセージを送受信するための4つの通信方式（stdio、HTTP、SSE、WebSocket）を提供する層

## 🎯 核心的定義
Model Context Protocol (MCP) のトランスポート層は、MCPサーバー（ツールを公開する側）とMCPクライアント（ツールを呼び出す側）の間でJSON-RPC 2.0形式のメッセージを確実に送受信するための通信メカニズム。各トランスポートは異なるユースケースに最適化されており、上位層は使用中のトランスポートを意識する必要がない。

## 🌟 主な構成要素
- **stdio**: CLIツール向けの標準入出力通信（LSPと同じフレーミング規則）
- **HTTP**: ステートレスな操作向けのRESTful通信
- **SSE**: サーバーからクライアントへの一方向ストリーミング
- **WebSocket**: リアルタイム双方向通信

## 🔄 関連概念との違い
Language Server Protocol (LSP) のトランスポートと類似しているが、MCPはLLMとツールの連携に特化。stdioフレーミングはLSPと同一（Content-Length形式）だが、上位のプロトコル仕様が異なる。HTTPトランスポートは一般的なREST APIと似ているが、JSON-RPC 2.0エンベロープを使用する点が特徴的。

## 💡 なぜ重要か
トランスポート層の抽象化により、開発者は環境に応じた最適な通信方式を選択できる。ローカルツールにはstdio、Webアプリケーションにはwebsocket、サーバーレス環境にはHTTPなど、柔軟な実装が可能。この設計により、MCPエコシステム全体の相互運用性と拡張性が向上する。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[MCP]] - MCPの全体概念と基本アーキテクチャ
→ [[JSON-RPC 2.0]] - メッセージフォーマットの仕様

### ➡️ 発展・結果
→ [[Playwright MCPでTwitter自動ログイン]] - stdioトランスポートの実装例

### 🎯 実践例
→ [[Claude Codeの設定]] - mcpServers設定でのトランスポート利用

## 📚 参照元
> [Model Context Protocol Documentation - Anthropic](https://docs.anthropic.com/en/docs/model-context-protocol)
> 個人体験, 2025-01-24