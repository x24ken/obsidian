**タイプ**: 🔍 Concept

## 📝 一行要約
MCPの標準入出力トランスポートは、改行区切りのJSON-RPC 2.0メッセージをプロセス間のstdin/stdoutで送受信する最もシンプルな通信方式

## 🎯 核心的定義
stdioトランスポートは、クライアントがサーバーを子プロセスとして起動し、標準入出力（stdin/stdout）を介してJSON-RPC 2.0形式のメッセージを交換する通信メカニズム。各メッセージは1行1オブジェクトの改行区切り形式で、Content-Lengthヘッダーなしのシンプルなフレーミングを採用。stderrは人間が読めるログ専用で、プロトコルの一部ではない。

## 🌟 主な構成要素
- **フレーミング**: 改行文字（\n、0x0A）のみでメッセージを区切る
- **エンコーディング**: UTF-8でエンコードされたJSON-RPC 2.0オブジェクト
- **データフロー**: 
  - stdin: クライアント → サーバー
  - stdout: サーバー → クライアント
  - stderr: ログ出力専用（プロトコル外）
- **ライフサイクル**: initialize → initialized → 通常通信 → シャットダウン

## 🔄 関連概念との違い
Language Server Protocol (LSP) のstdioトランスポートとは異なり、MCPはContent-Lengthヘッダーを使用しない純粋な改行区切り形式。これによりパーサーの実装がより単純になる一方、JSONペイロード内に改行を含む場合は必ず`\n`にエスケープする必要がある。HTTPベースのトランスポートと比較して、状態管理が容易で低レイテンシだが、プロセス管理の責任がクライアント側に発生する。

## 💡 なぜ重要か
stdioトランスポートは、ローカル環境でのツール統合に最適な選択肢。CLIツール、デスクトップアプリケーション、シェルスクリプトなど、プロセス起動が容易な環境で威力を発揮。実装の単純さと効率性により、MCPサーバーの開発・テスト・デバッグが容易になり、エコシステムの成長を促進する基盤となっている。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[MCPトランスポート層]] - 2つの公式トランスポートの全体像
→ [[JSON-RPC 2.0]] - メッセージフォーマットの仕様

### ➡️ 発展・結果
→ [[Playwright MCPでTwitter自動ログイン]] - stdioトランスポートの実装例

### 🔀 別の視点
→ [[MCP Streamable HTTPトランスポート]] - Web環境向けの代替トランスポート

### 🎯 実践例
→ [[Claude Codeの設定]] - mcpServersでのstdio設定例

## 📚 参照元
> [MCP Specification - Transports (2025-03-26)](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports)
> [MCP Specification - Basic Concepts](https://modelcontextprotocol.io/specification/2025-03-26/basic)
> [MCP Specification - Lifecycle](https://modelcontextprotocol.io/specification/2025-03-26/basic/lifecycle)