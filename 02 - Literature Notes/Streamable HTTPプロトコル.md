**タイプ**: 🔍 Concept

## 📝 一行要約
単一エンドポイントで通常のHTTPレスポンスとSSEストリーミングを動的に切り替え、双方向通信を実現する新しいトランスポートプロトコル

## 🎯 核心的定義
Streamable HTTPは、サーバーが実行時に通常のJSON応答とSSEストリーミング応答を動的に選択できるプロトコル。従来のHTTP + SSEパターンが2つの別々のエンドポイント（POSTとGET）を必要としたのに対し、Streamable HTTPは単一のエンドポイントですべての通信を処理。クライアントからのPOSTリクエストに対して、サーバーは短い処理ならapplication/jsonで即座に応答し、長時間処理や複数のメッセージ送信が必要ならtext/event-streamに切り替える。

## 🌟 主な構成要素
- **統一エンドポイント**: 1つのURI（例：/mcp）でPOSTとGETの両方を受け付ける
- **動的アップグレード**: サーバーが実行時にレスポンス形式を選択
  - application/json: 即座に完了する短い応答
  - text/event-stream: ストリーミングが必要な長時間処理
- **双方向通信**: 同一接続内でサーバーからのリクエストも可能
- **セッション管理**: Mcp-Session-Idヘッダーによる状態管理（オプション）
- **再開機能**: Last-Event-IDによる接続切断後の再送制御

## 🔄 関連概念との違い
従来のHTTP + SSEパターンは2つの別々の接続（POSTエンドポイントとSSEエンドポイント）を必要とし、サーバーからクライアントへの一方向通信のみ。Streamable HTTPは単一接続で双方向通信が可能で、サーバーが動的にストリーミングの必要性を判断。WebSocketと比較すると、HTTPインフラとの互換性を保ちながら、必要な時だけストリーミングを使用するため、サーバーレス環境やロードバランサーとの相性が良い。

## 💡 なぜ重要か
Streamable HTTPは、モダンなAPI設計における柔軟性と効率性を実現。短いリクエストは即座に応答し、長時間処理は段階的にストリーミングできるため、リソース効率が高い。エラー処理も同一チャネルで行われるため、デバッグとトレーシングが容易。既存のHTTPインフラ（プロキシ、CDN、認証システム）をそのまま活用でき、サーバーレス環境でも問題なく動作する。Model Context Protocol (MCP)の2025年3月仕様で採用され、今後のJSON-RPC通信の標準になりつつある。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[HTTP + SSEパターン]] - 従来の分離型アプローチ
→ [[MCPトランスポート層]] - Streamable HTTPが採用された文脈

### ➡️ 発展・結果
（現在関連するノートはありません）

### 🔀 別の視点
（現在関連するノートはありません）

### 🎯 実践例
（現在関連するノートはありません）

## 📚 参照元
> [Model Context Protocol - Transports](https://modelcontextprotocol.io/docs/concepts/transports)
> [Why MCP Deprecated SSE and Go with Streamable HTTP - FKA Blog](https://blog.fka.dev/blog/2025-06-06-why-mcp-deprecated-sse-and-go-with-streamable-http/)
> [Comparison of data before and after using Streamable HTTP - Medium](https://medium.com/@higress_ai/comparison-of-data-before-and-after-using-streamable-http-b094db8b414e)
> 個人体験, 2025-01-24