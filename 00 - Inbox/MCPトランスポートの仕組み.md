# MCPトランスポートの仕組み

MCPサーバーとMCPクライアント間で情報を受信する仕組み

## 概要
MCP (Model Context Protocol) は、JSON-RPC 2.0をベースとしたプロトコルで、4つのトランスポート方式をサポート

## トランスポート方式

### 1. stdio (標準入出力)
- 最もシンプル、CLIツールやエディタプラグイン向け
- Language Server Protocol (LSP)と同じフレーミング規則
- Content-Length: <N>\r\n\r\n<N-byte UTF-8 JSON>

### 2. HTTP
- ステートレスな操作に適用
- 各リクエスト/レスポンスが独立
- Bearer tokenやmTLSで認証

### 3. Server-Sent Events (SSE)
- サーバーからクライアントへの一方向ストリーミング
- ブラウザでの最小限の実装コスト
- 自動再接続サポート

### 4. WebSocket
- 最も柔軟な双方向通信
- フルデュプレックス通信
- 低オーバーヘッド

## Claude Codeでの実装例
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@microsoft/playwright-mcp"],
      "env": {"HEADLESS": "false"}
    }
  }
}
```

## 選択基準
- stdio: ローカルツール、IDE
- HTTP: ステートレス操作、REST互換性
- SSE: サーバー駆動ストリーム（ライブログ等）
- WebSocket: インタラクティブUI、エージェント間通信