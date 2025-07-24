**タイプ**: 🔍 Concept

## 📝 一行要約
HTTPリクエストとServer-Sent Events (SSE)を組み合わせ、単一エンドポイントでJSON-RPC通信とリアルタイムストリーミングを実現するWebフレンドリーなMCPトランスポート

## 🎯 核心的定義
Streamable HTTPトランスポートは、クライアントがHTTP POSTでJSON-RPCメッセージを送信し、サーバーが単一のJSONレスポンスまたはSSEストリームで応答する非対称な通信方式。単一のMCPエンドポイント（例：/mcp）がPOSTとGETの両方を受け付け、長時間実行される操作やリアルタイム通知をSSEで効率的に配信。2024年11月の仕様改定で旧「HTTP + SSE」から統合された。

## 🌟 主な構成要素
- **単一エンドポイント**: POSTとGETの両方を受け付ける統一URL
- **リクエスト方式**:
  - POST: JSON-RPCメッセージ送信（1リクエスト1メッセージ）
  - GET: リッスンオンリーのSSEストリーム開始
- **レスポンス形式**:
  - application/json: 単一のJSON-RPC応答
  - text/event-stream: 複数メッセージをストリーミング可能なSSE
- **必須HTTPヘッダー**:
  - Accept: application/json, text/event-stream
  - MCP-Protocol-Version: ネゴシエートされたバージョン
  - Mcp-Session-Id: 初期化時に発行された場合

## 🔄 関連概念との違い
stdioトランスポートと比較して、Streamable HTTPはプロセス管理が不要でWebブラウザやサーバーレス環境に適している。通常のREST APIと異なり、SSEによる一方向ストリーミングでサーバープッシュが可能。WebSocketと比較すると、HTTPインフラとの互換性が高く、ファイアウォールやプロキシの通過が容易。EventSourceによる自動再接続機能も活用できる。

## 💡 なぜ重要か
Webアプリケーション、API統合、サーバーレス環境でのMCP実装を可能にする重要なトランスポート。HTTPの標準的なインフラを活用できるため、既存のロードバランサー、認証システム、CDNとの統合が容易。SSEによるリアルタイム通信により、長時間実行タスクの進捗報告や非同期通知を効率的に実装できる。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[MCPトランスポート層]] - 2つの公式トランスポートの全体像
→ [[Server-Sent Events]] - ストリーミング技術の基礎
→ [[JSON-RPC 2.0]] - メッセージフォーマットの仕様

### ➡️ 発展・結果
→ [[MCP WebアプリケーションでのHTTP実装]] - ブラウザベースの実装例

### 🔀 別の視点
→ [[MCP stdioトランスポート]] - ローカル環境向けの代替トランスポート

### 🎯 実践例
→ [[Claude Codeの設定]] - Streamable HTTP設定例（将来的な対応）

## 📚 参照元
> [MCP Specification - Transports (2025-06-18)](https://modelcontextprotocol.io/specification/2025-06-18/basic/transports)
> [MCP Specification - Legacy HTTP + SSE (2024-11-05)](https://modelcontextprotocol.info/specification/2024-11-05/basic/transports/)
> [Server-sent events - Wikipedia](https://en.wikipedia.org/wiki/Server-sent_events)