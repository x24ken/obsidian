**タイプ**: 🔍 Concept

## 📝 一行要約
エディタと言語ツールの間でスマートコード機能（自動補完、診断、定義ジャンプなど）を提供するためのJSON-RPC 2.0ベースの標準プロトコル

## 🎯 核心的定義
Language Server Protocol（LSP）は、Microsoftが開発したエディタ・IDE（クライアント）とプログラミング言語ツール（サーバー）間の通信標準。従来のN×M問題（N個のエディタ×M個の言語）を解決し、各言語ツールが一度LSPを実装すれば、LSP対応のすべてのエディタで使用可能になる。JSON-RPC 2.0を基盤とし、Content-Lengthヘッダーによるフレーミングを採用。VS Code、Neovim、Eclipse、IntelliJなどが対応。

## 🌟 主な構成要素

### 通信アーキテクチャ
- **クライアント**: エディタ・IDE（VS Code、Neovim、Eclipse等）
- **サーバー**: 言語固有ツール（TypeScript Server、Pyright、Rust Analyzer等）
- **プロトコル**: JSON-RPC 2.0
- **トランスポート**: stdio（標準）、TCP、WebSocket、名前付きパイプ

### メッセージフレーミング
```
Content-Length: 126\r\n
Content-Type: application/vscode-jsonrpc; charset=utf-8\r\n
\r\n
{"jsonrpc":"2.0","id":2,"method":"textDocument/completion",...}
```

### 起動シーケンス
1. クライアントがサーバープロセスを起動
2. `initialize`リクエスト（クライアント機能、ワークスペース情報）
3. サーバーが対応機能を返答（completionProvider、definitionProvider等）
4. `initialized`通知でバックグラウンド処理開始
5. リアルタイム文書・ワークスペース通信開始

## 🔄 関連概念との違い
LSPは言語固有の開発ツール統合に特化しているのに対し、MCPはAI言語モデルとツールの連携に焦点を当てる。両者ともJSON-RPC 2.0を使用するが、LSPはContent-Lengthヘッダーでフレーミングし、MCPのstdioは改行区切り。LSPは双方向通信（エディタ↔言語サーバー）、MCPは主にクライアント主導（AI↔ツール）。IDEプラグインアーキテクチャと比較すると、LSPはプロセス分離により安定性と言語横断の再利用性を実現。

## 💡 なぜ重要か
現代の開発環境におけるスマートコード機能の基盤技術。VS Codeの成功要因の一つがLSPエコシステム。言語ツール開発者は一度の実装で複数エディタに対応でき、エディタ開発者は言語固有の実装なしに多言語サポートを実現。リモート開発（GitHub Codespaces）やクラウドIDE、AIコード補完の基礎インフラとしても重要。TypeScript、Python、Rust、C++など主要言語が標準サポート。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[stdioによるプロセス間通信]] - LSPの主要トランスポート方式
→ [[JSON-RPC 2.0]] - LSPの基盤プロトコル

### ➡️ 発展・結果
（現在関連するノートはありません）

### 🔀 別の視点
→ [[MCPトランスポート層]] - AI向けの類似プロトコル

### 🎯 実践例
（現在関連するノートはありません）

## 📚 参照元
> [Language Server Protocol Specification - Microsoft](https://github.com/microsoft/language-server-protocol)
> [Language Server Protocol - Visual Studio Code Docs](https://code.visualstudio.com/docs/extensionAPI/language-server-extension-guide)
> [LSP Libraries and Tools](https://langserver.org/)
> 個人体験, 2025-07-24