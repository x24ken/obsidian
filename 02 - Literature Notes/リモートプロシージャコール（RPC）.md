**タイプ**: 🔍 Concept

## 📝 一行要約
ネットワーク越しの関数呼び出しをローカル関数と同じように透明に実行できる分散システムの基盤技術

## 🎯 核心的定義
リモートプロシージャコール（RPC）は、ネットワーク上の別のコンピュータにある関数やメソッドを、まるでローカルの関数のように呼び出せる通信パラダイム。クライアント・サーバー間の複雑なネットワーク通信を抽象化し、分散システムでの処理を単純化する。

## 🌟 主な構成要素
- **スタブ層**: 関数呼び出しをネットワーク通信に変換
- **シリアライゼーション**: 引数・戻り値のデータ変換
- **トランスポート層**: TCP/UDP等のネットワークプロトコル
- **サーバースケルトン**: 受信したリクエストから実際の関数を呼び出し

## 🔄 関連概念との違い
RESTful APIはHTTPリソース操作に焦点を当てるのに対し、RPCは関数呼び出しの抽象化に特化。メッセージキューは非同期通信だが、RPCは同期的な関数呼び出しパターンを維持。

## 💡 なぜ重要か
現代のマイクロサービスアーキテクチャにおいて、サービス間通信の標準的手法として広く採用されており、分散システムの複雑性を大幅に軽減し、開発生産性を向上させる根幹技術となっている。

## 🔗 つながり
### ⬅️ 前提・背景
（現在関連するノートはありません）

### ➡️ 発展・結果
→ [[JSON-RPC 2.0]] - RPC概念の具体的なJSONベース実装
→ [[MCP]] - JSON-RPC 2.0をベースとしたAI-ツール連携プロトコル
→ [[Language Server Protocol（LSP）]] - JSON-RPC 2.0をベースとした開発環境プロトコル

### 🔀 別の視点
（現在関連するノートはありません）

### 🎯 実践例
（現在関連するノートはありません）

## 📚 参照元
> [Remote Procedure Call](https://en.wikipedia.org/wiki/Remote_procedure_call) - Wikipedia
> [What is RPC?](https://www.cloudflare.com/learning/app-services/what-is-rpc/) - Cloudflare