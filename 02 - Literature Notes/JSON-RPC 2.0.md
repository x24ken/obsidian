**タイプ**: 🔍 Concept

## 📝 一行要約
JSONベースの軽量リモートプロシージャコールプロトコルで、言語に依存しないクライアント・サーバー間通信を実現

## 🎯 核心的定義
JSON-RPC 2.0は、JSON（JavaScript Object Notation）フォーマットを使用してリモートプロシージャコール（RPC）を実行するための軽量プロトコル。ネットワーク越しに関数やメソッドを呼び出すためのシンプルで標準化された仕様。

## 🌟 主な構成要素
- **リクエスト**: `jsonrpc`, `method`, `params`, `id`フィールドを含むJSONオブジェクト
- **レスポンス**: `jsonrpc`, `result`（または`error`）, `id`フィールドを含むJSONオブジェクト
- **エラーハンドリング**: 標準化されたエラーコードとメッセージ構造
- **バッチ処理**: 複数のリクエストを配列で一括送信可能

## 🔄 関連概念との違い
RESTful APIは状態転送に焦点を当てるのに対し、JSON-RPC 2.0は関数呼び出しの抽象化に特化。GraphQLのようなクエリ言語ではなく、シンプルなメソッド呼び出しインターフェース。

## 💡 なぜ重要か
現代の分散システムにおける標準的通信プロトコルとして、VSCodeのLanguage Server Protocol（LSP）やClaude CodeのModel Context Protocol（MCP）など、多くの重要なツールチェーンで採用されており、開発者体験の向上に直接寄与している。

## 🔗 つながり
→ [[リモートプロシージャコール（RPC）]], [[WebSocket]], [[esbuild]], [[Vite]]

## 📚 参照元
> [JSON-RPC 2.0 Specification](https://www.jsonrpc.org/specification) - jsonrpc.org
> [Understanding JSON-RPC](https://en.wikipedia.org/wiki/JSON-RPC) - Wikipedia