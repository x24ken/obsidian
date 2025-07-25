**タイプ**: 🔍 Concept

## 📝 一行要約
HTTPとServer-Sent Events (SSE)を組み合わせて、サーバーからクライアントへのリアルタイムデータプッシュを実現する通信パターン

## 🎯 核心的定義
HTTP + SSEパターンは、通常のHTTPリクエスト・レスポンスモデルを拡張し、サーバーからクライアントへの一方向リアルタイム通信を可能にするアーキテクチャ。クライアントがHTTPリクエストを送信し、サーバーが即座に完全なレスポンスを返す代わりに、text/event-stream形式でイベントをストリーミングできる。WebSocketと異なり、既存のHTTPインフラ上で動作するため、プロキシやファイアウォールとの互換性が高い。

## 🌟 主な構成要素
- **HTTPリクエスト**: クライアントからの通常のHTTP GET/POSTリクエスト
- **SSEストリーム**: 
  - Content-Type: text/event-stream
  - 持続的な接続を維持してイベントを送信
  - イベント形式: `event: イベント名\ndata: データ\n\n`
- **自動再接続**: EventSource APIによるクライアント側の自動再接続機能
- **イベントID**: Last-Event-IDを使った再接続時のイベント再送制御
- **ハートビート**: コメント行（:で始まる行）を使った接続維持

## 🔄 関連概念との違い
WebSocketと比較すると、SSEはサーバーからクライアントへの一方向通信のみだが、HTTPインフラとの互換性が高い。Long Pollingと比べて、接続を維持したまま複数のイベントを送信できるため効率的。通常のREST APIと異なり、リクエスト完了後もストリームを維持できる。プロキシ、CDN、ロードバランサーなどの既存HTTPインフラをそのまま利用可能。

## 💡 なぜ重要か
HTTP + SSEパターンは、リアルタイムWebアプリケーションの基礎技術。株価ティッカー、ライブチャット、通知システム、CI/CDパイプラインの進捗表示など、サーバーからのプッシュ通知が必要な場面で幅広く活用。ブラウザのEventSource APIによるネイティブサポート、HTTP/2のストリーム多重化、既存の認証・認可システムとの統合の容易さが大きな利点。

## 🔗 つながり
### ⬅️ 前提・背景
（現在関連するノートはありません）

### ➡️ 発展・結果
→ [[SSEストリーミング応答の仕組み]] - SSE技術の具体的実装詳細
→ [[Streamable HTTPプロトコル]] - HTTPストリーミングの一般的パターン

### 🔀 別の視点
→ [[WebSocket]] - 双方向リアルタイム通信の代替技術
→ [[MCPトランスポート層]] - SSEを含む通信方式の選択肢

### 🎯 実践例
（現在関連するノートはありません）

## 📚 参照元
> [Server-Sent Events - W3C Recommendation](https://www.w3.org/TR/eventsource/)
> [Using server-sent events - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
> [Stream Updates with Server-Sent Events - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/eventsource/basics/)
> 個人体験, 2025-01-24