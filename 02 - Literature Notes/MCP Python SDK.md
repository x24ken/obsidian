**タイプ**: 🔍 Concept

## 📝 一行要約
AnthropicによるModel Context Protocolの公式Python実装で、仕様準拠とStreamable HTTP対応を特徴とする

## 🎯 核心的定義
MCP Python SDK（パッケージ名`mcp`）は、MCPサーバーとクライアントを構築するための公式ツールキット。FastMCPモジュールで高レベルAPI、stdio/Streamable HTTPでトランスポート層、Pydantic/TypedDictで構造化出力を提供する。プロトコル仕様の参照実装として、最新仕様変更に即座に追従する。

## 🌟 主な構成要素
- **FastMCPモジュール**（`mcp.server.fastmcp.FastMCP`）: デコレータ形式のツール/リソース定義
- **トランスポート**: stdio（ローカル/Claude Desktop）、Streamable HTTP（プロダクション/ChatGPT Apps）
- **構造化出力**: Pydantic/TypedDict/dataclassesで自動スキーマ生成
- **認証機能**: OAuth実装例とトークン検証プリミティブ
- **開発ツール**: `mcp dev`コマンドとMCP Inspector統合

## 🔄 関連概念との違い
サードパーティの`fastmcp`パッケージ（Prefect製）は同名だが別物。公式SDKは仕様準拠と軽量性重視、FastMCPフレームワークはプロダクション機能（エンタープライズ認証、API統合、サーバー構成）を追加した上位レイヤー。TypeScript SDKはブラウザ/Node.js向け、Python SDKはサーバーサイド向け。

## 💡 なぜ重要か
MCP仕様の公式実装として、Claude DesktopからChatGPT Appsまで幅広いクライアントとの互換性を保証。Streamable HTTP（2025年標準化）への即座対応により、プロダクション環境での実用性が向上。型安全な構造化出力でAIツール開発の信頼性が飛躍的に高まる。

## つながり

← [[MCP]]：MCPプロトコルの基礎概念と全体像
↔ [[FastMCP]]：同名だが別物のプロダクション特化フレームワーク
→ [[MCPトランスポート層]]：stdio/Streamable HTTPの技術詳細
→ [[MCPツール機能]]：ツール定義の実装パターン
