**タイプ**: 📋 Guide

## 📝 一行要約
n8n self hostedとn8n cloudでのMCPトランスポート3種類（HTTP+SSE、Streamable HTTP、STDIO）の対応状況と実用的な使い分け指針

## 🎯 核心的定義
n8nでのMCP連携は、デプロイメント方式（self hosted vs cloud）によってサポートされるトランスポートが制限される。self hostedは全てのトランスポートに対応できるが、n8n cloudはセキュリティ制約により一部のトランスポートが使用不可となる。

## 🌟 主な構成要素

### n8n Self Hosted（ローカル環境）
**対応状況**：
- ✅ **HTTP+SSE（旧）**: フル対応
- ✅ **Streamable HTTP（新）**: フル対応  
- ✅ **STDIO**: フル対応（ローカルプロセス実行）

**利点**：
- 全てのMCPトランスポートが利用可能
- ローカルファイルシステム直接アクセス
- カスタムMCPサーバーの自由な実装
- セキュリティ制約なし

### n8n Cloud（ホスト環境）
**対応状況**：
- ✅ **HTTP+SSE（旧）**: 対応（インターネット経由のMCPサーバー）
- ❌ **Streamable HTTP（新）**: 制限あり（クラウド環境の制約）
- ❌ **STDIO**: 対応不可（ローカルプロセス実行不可）

**制限理由**：
- サンドボックス環境でのプロセス実行制限
- セキュリティポリシーによるローカルアクセス制限
- 共有インフラでのリソース制御

## 🔄 実用的な使い分け戦略

### ケース1: ローカルファイル操作が必要
**推奨**: n8n Self Hosted + STDIO
- ファイルシステム直接操作
- スクリーンショット取得
- ローカル開発ツール連携

### ケース2: Web API連携のみ
**どちらでも可**: n8n Cloud/Self Hosted + HTTP+SSE
- Slack、GitHub、外部API連携
- クラウドサービス統合
- レガシーMCPサーバー対応

### ケース3: 最新MCP機能が必要
**推奨**: n8n Self Hosted + Streamable HTTP
- ストリーミング応答対応
- 最新のMCP仕様準拠
- 高性能なWeb API連携

## 💡 なぜ重要か
n8nの導入時にself hosted vs cloudの選択がMCP機能の可用性を大きく左右する。特にローカルリソースアクセスが必要な自動化ワークフローでは、n8n cloudでは実現不可能な場合がある。プロジェクト要件を事前に整理し、適切なデプロイメント方式を選択することが成功の鍵となる。

## つながり
← [[n8n]]：プラットフォームの基本概念
→ [[iPaaS×MCP統合の発展予測]]：オープンソース vs クラウドの将来性
↔ [[Zapier]]：クラウドオンリーでの制約事例

## 📚 参照元
> 個人体験, 2025-08-05
> [n8n Documentation - Self-hosting](https://docs.n8n.io/hosting/)
> [Model Context Protocol - Transport Layer](https://modelcontextprotocol.io/docs/concepts/transports)