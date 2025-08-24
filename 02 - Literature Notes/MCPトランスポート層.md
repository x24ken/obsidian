**タイプ**: 🔍 Concept

## 📝 一行要約
MCPサーバーとクライアント間でJSON-RPC 2.0メッセージを送受信するための2つの公式通信方式（stdio、Streamable HTTP）を提供する層

## 🎯 核心的定義
Model Context Protocol (MCP) のトランスポート層は、MCPサーバー（ツールを公開する側）とMCPクライアント（ツールを呼び出す側）の間でJSON-RPC 2.0形式のメッセージを確実に送受信するための通信メカニズム。各トランスポートは異なるユースケースに最適化されており、上位層は使用中のトランスポートを意識する必要がない。

## 🌟 主な構成要素
- **stdio**: CLIツール向けの標準入出力通信（LSPと同じフレーミング規則、改行区切りJSON-RPC）
- **Streamable HTTP**: HTTPリクエストとServer-Sent Events (SSE)を組み合わせた通信方式
  - クライアントはHTTP POSTでJSON-RPCリクエストを送信
  - サーバーはSSE形式でレスポンスをストリーミング返送
  - 2024年11月の仕様改定で旧「HTTP」と「SSE」が統合された

## 🔄 関連概念との違い
Language Server Protocol (LSP) のトランスポートと類似しているが、MCPはLLMとツールの連携に特化。stdioフレーミングはLSPと同一（Content-Length形式）だが、上位のプロトコル仕様が異なる。Streamable HTTPは一般的なREST APIと似ているが、JSON-RPC 2.0エンベロープを使用し、レスポンスにSSEを採用する点が特徴的。WebSocketは公式仕様には含まれず、コミュニティ実装のみ存在する。

## 💡 なぜ重要か
トランスポート層の抽象化により、開発者は環境に応じた最適な通信方式を選択できる。ローカルツールやCLIアプリケーションにはstdio、WebアプリケーションやサーバーレスAPIにはStreamable HTTPを使用。公式仕様を2つに限定することで、クライアント・サーバー間の互換性マトリクスを小さく保ち、実装の複雑さを軽減している。

## つながり
← [[MCP]]：MCPの全体概念と基本アーキテクチャ
→ [[Streamable HTTPプロトコル]]：2025年仕様でのストリーミング通信
↔ [[WebSocket]]：双方向通信の代替手段
→ [[Playwright MCPでTwitter自動ログイン]]：stdioトランスポートの実装例

## 📚 参照元
> [MCP Specification - Transports](https://spec.modelcontextprotocol.io/specification/basic/transports/)
> [MCP Specification Draft - Transports (2024-11-05)](https://modelcontextprotocol.io/specification/2024-11-05/basic/transports)
> 個人体験, 2025-01-24