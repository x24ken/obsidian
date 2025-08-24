**タイプ**: 🔍 Concept

## 📝 一行要約
SSE（Server-Sent Events）ストリーミング応答は、サーバーがクライアントに対してリアルタイムでデータを継続的に送信する仕組み

## 🎯 核心的定義
SSEストリーミング応答は、HTTP接続を開いたままにして、サーバーからクライアントへ一方向にイベントデータを流し続ける技術。通常のHTTPリクエスト・レスポンスとは異なり、レスポンスが「終了」せずに継続的にデータが送られてくる。

## 🌟 主な構成要素

### テキストベースのストリーム形式
- `Content-Type: text/event-stream`
- `data:` で始まる各行がイベントデータ
- 空行（`\n\n`）でイベントを区切る

### 実際のデータ例
```
data: {"message": "処理開始"}

data: {"progress": 25, "status": "進行中"}

data: {"progress": 50, "status": "半分完了"}

data: {"message": "処理完了", "result": "成功"}
```

### 接続の維持
- HTTPコネクションを切断せずに保持
- サーバーが任意のタイミングでデータ送信
- クライアント側でリアルタイム受信

## 🔄 関連概念との違い

### 通常のHTTPレスポンス
- 一度きりの応答で接続終了
- データサイズが事前に確定
- `Content-Length`ヘッダーで全体サイズを指定

### SSEストリーミング応答
- 接続を維持して継続的にデータ送信
- データサイズは未確定（ストリーミング）
- `Transfer-Encoding: chunked`で分割送信

### WebSocketとの比較
- SSE：サーバー → クライアント（一方向）
- WebSocket：双方向通信が可能
- SSE：既存のHTTPインフラと互換性高い

## 💡 なぜ重要か
SSEストリーミング応答により、チャットボットの応答生成、ファイルアップロードの進捗、ライブデータ更新などで、ユーザーが待機時間を感じることなくリアルタイム体験を提供できる。MCPでも長時間処理の結果を段階的に返すために活用され、従来の「処理完了まで待つ」パターンから「逐次結果を見る」パターンへとUXを改善している。

## つながり
← [[HTTP + SSEパターン]]：従来型トランスポートの仕組み
→ [[Streamable HTTPプロトコル]]：最新のMCPトランスポート仕様
↔ [[WebSocket]]：双方向通信との比較
→ [[MCP]]：長時間処理結果の段階的返却で使用

## 📚 参照元
> [Server-Sent Events - W3C Recommendation](https://www.w3.org/TR/eventsource/)
> [Stream Updates with Server-Sent Events - HTML5 Rocks](https://www.html5rocks.com/en/tutorials/eventsource/basics/)
> 個人体験, 2025-07-25