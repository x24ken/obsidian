**タイプ**: 📋 Guide

## 📝 一行要約
MCPの2つのトランスポート（stdioとStreamable HTTP）を、ローカル処理とWeb API連携という用途で使い分ける実践的ガイド

## 🎯 核心的定義
MCPトランスポートの選択は、ツールの実行場所とアクセス方法で決まる。stdioはローカルPCで動くツール（ファイルシステム、スクリーンショット、CLIツール）に使い、Streamable HTTPはインターネット経由でアクセスするWeb API（Slack、GitHub、AI生成サービス）に使う。現在のClaude Codeはstdioのみサポートしているが、将来的にはStreamable HTTPも対応予定。

## 🌟 主な構成要素

### stdioトランスポート（ローカル用）
**設定例（Claude Codeの現在の方式）**：
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/Users/name/projects"],
      "transport": "stdio"
    }
  }
}
```

**動作の流れ**：
1. Claude Codeが子プロセスとしてツールを起動
2. 標準入出力で文字ベースの通信（改行区切り）
3. ローカルで完結、高速、セキュア

### Streamable HTTPトランスポート（Web API用）
**設定例（将来のClaude Code）**：
```json
{
  "mcpServers": {
    "weather-api": {
      "url": "https://api.weather-service.com/mcp",
      "transport": "streamable-http",
      "apiKey": "your-api-key"
    }
  }
}
```

**動作の流れ**：
1. HTTP POST でリクエスト送信
2. 短い処理：即座にJSON応答
3. 長い処理：SSEでストリーミング応答

## 🔄 関連概念との違い
両者の最大の違いは「どこで動くか」。stdioはあなたのPC内で完結し、外部ネットワークを使わない。Streamable HTTPはインターネット経由で外部サービスと通信する。stdioは`command`でプログラムを指定し、Streamable HTTPは`url`でエンドポイントを指定する。セキュリティ面では、stdioはローカル限定で安全、Streamable HTTPはAPIキーなどの認証が必要。

## 💡 なぜ重要か
適切なトランスポートを選ぶことで、ツールの性能とセキュリティが最適化される。ローカルファイル操作にStreamable HTTPを使うと無駄に遅くなり、Web APIにstdioは使えない。2025年1月現在、Claude Codeは「リモートMCPサーバー」機能でStreamable HTTPをサポート開始。ローカルMCPサーバーはstdio、リモートMCPサーバーはStreamable HTTPという使い分けが標準となっている。

## つながり
← [[MCPトランスポート層]]：2つの公式トランスポートの技術仕様
→ [[MCPクライアントのリモートサーバー対応状況（2025年7月）]]：実装状況の具体例
↔ [[HTTP + SSEパターン]]：Streamable HTTPの前身技術
→ [[Playwright MCPでTwitter自動ログイン]]：stdioトランスポートの実例

## 📚 参照元
> [Model Context Protocol Documentation - Transports](https://modelcontextprotocol.io/docs/concepts/transports)
> [Claude Code Documentation - MCP Configuration](https://docs.anthropic.com/en/docs/claude-code/mcp)
> 個人体験, 2025-01-24