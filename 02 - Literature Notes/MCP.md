**タイプ**: 🔍 Concept

## 📝 一行要約
Anthropicが開発したJSON-RPC 2.0ベースのオープンプロトコルで、LLMが外部ツールと統一的にやりとりするための標準仕様

## 🎯 核心的定義
Model Context Protocol (MCP) は、Large Language Modelが外部のAPI、ファイルストア、開発環境などの「ツール」を統一的な方法でリスト化・呼び出し・コンテキスト保持するためのオープンな通信プロトコル。2024年11月にAnthropicによってリリースされ、JSON-RPC 2.0をベースとしている。

## 🌟 主な構成要素
- **MCPサーバー**: ツールを公開する側（API、データベース、ファイルシステムなど）
- **MCPクライアント**: ツールを呼び出す側（Claude Desktop、Replit、Sourcegraphなど）
- **通信プロトコル**: JSON-RPC 2.0による統一的なインターフェース
- **SDK**: Python、TypeScript、C#、Javaでの実装サポート
- **トランスポート**: HTTP、SSE、stdioでの通信手段

## 🔄 関連概念との違い
OpenAIのfunction-callingやLangChainのtoolsと概念的には類似するが、MCPはベンダー非依存のオープン標準である点が重要。単一のLLMプロバイダーに依存せず、異なるLLMやアプリケーション間で同じツールインターフェースを再利用できる。

## 💡 なぜ重要か
LLMとツールの連携における標準化により、開発者は一度MCPサーバーを構築すれば複数のLLMアプリケーションで再利用できる。これはAIエコシステムの相互運用性を大幅に向上させ、ベンダーロックインを回避しながらAI機能の民主化を促進する。

## つながり

← [[コンテキストエンジニアリング]]：MCPはコンテキスト組み立ての標準プロトコル実装
← [[JSON-RPC 2.0]]：通信レイヤーの技術基盤
↔ [[Language Server Protocol（LSP）]]：開発ツール標準化の成功先例
→ [[AIエージェント]]：MCPによる外部ツール統合の実現
→ [[Claude Code]]：MCPクライアントの代表的実装例
→ [[MCP Python SDK]]：MCPの公式Python実装
→ [[FastMCP]]：プロダクション特化のMCPフレームワーク
