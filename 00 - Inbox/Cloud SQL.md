# Cloud SQL

## 概要
Cloud SQLは、Google Cloudが提供するフルマネージド型のリレーショナルデータベースサービス。MySQL、PostgreSQL、SQL Serverをサポートし、プロビジョニング、バックアップ、パッチ適用、高可用性、監視などの運用タスクを自動化することで、開発者がアプリケーション開発に集中できるようにする。

> [Cloud SQL Documentation - Introduction](https://docs.cloud.google.com/sql/docs/introduction)

## サポートするデータベースエンジン

### MySQL
- バージョン: 8.4、8.0（デフォルト）
- 延長サポート: 5.7、5.6（2025年5月1日から有料の延長サポート開始）

### PostgreSQL
- バージョン: 12-17（デフォルトは17）
- プレビュー: 18
- 古いメジャーバージョンは延長サポート対象

### SQL Server
- バージョン: 2017、2019、2022（複数エディション）

> [Cloud SQL Database Versions](https://cloud.google.com/sql/docs/mysql/db-versions)

## 世代（Generation）の歴史

### First Generation (Gen1) - 完全廃止
- **対象**: MySQL のみ
- **ステータス**: 完全に廃止済み
- **主要な日程**:
  - 2019年1月29日: 正式に非推奨発表
  - 2020年2月5日: 新規Gen1インスタンス作成停止
  - 2020年3月4日: 残存Gen1インスタンスの自動アップグレード開始
  - 2020年3月25日: サービス完全終了
- **移行先**: Second Generation (Gen2)
- **移行ツール**: Google提供のGen1→Gen2アップグレードツール（2018年10月30日GA）

> [Cloud SQL First Generation Deprecation Notice](https://cloud.google.com/sql/docs/mysql/deprecation-notice)

### Second Generation (Gen2) - 現行世代
- **対象**: 当初はMySQL用の呼称（PostgreSQL、SQL Serverには適用されず）
- **ステータス**: 利用可能（現行）
- **ブランディングの変更**:
  - 「Gen2」という呼称は廃止され、現在は単に「Cloud SQL for MySQL」と呼ばれる
  - エディションモデル（Enterprise / Enterprise Plus）に進化
- **廃止予定**: なし（2025年11月時点）
- **現在の構成**:
  - Enterprise エディション（デフォルト）: 従来のGen2インスタンスは自動的にEnterpriseにマッピング
  - Enterprise Plus エディション: より高いSLA（99.99%）、ほぼゼロダウンタイムメンテナンス
  - PostgreSQL 16以降はAPI/CLI経由でデフォルトがEnterprise Plus

**重要**: 2025年1月13日にレガシーHA構成が非推奨となり、2025年5月1日から現行のリージョナル永続ディスクHAへ自動移行が開始されました。

> [Cloud SQL Editions Introduction](https://docs.cloud.google.com/sql/docs/editions-intro)

## 主要機能

### 運用と信頼性
- **自動バックアップ**: オンデマンドバックアップ、ポイントインタイムリカバリ、インスタンスクローニング
- **高可用性**: リージョナル・マルチゾーン構成、自動フェイルオーバー（通常約60秒）
- **メンテナンス**: メンテナンスウィンドウ、セルフサービスメンテナンス
- **Enterprise Plus**: MySQL/PostgreSQLでほぼゼロダウンタイムのメンテナンス

> [Cloud SQL High Availability](https://cloud.google.com/sql/docs/mysql/high-availability)

### パフォーマンスとスケール
- **エディション**: Enterprise、Enterprise Plus
  - Enterprise Plus: 99.99% SLA、データキャッシュ、拡張ログ保持、より大きなマシンタイプ（最大128 vCPU/864 GiB）
- **リードプール**: 読み取り負荷分散用（1-20個のリードノード）
- **Managed Connection Pooling (MCP)**: 接続スパイク吸収、レイテンシ削減（Enterprise Plus）
- **Query Insights**: ワークロード分析、Enterprise Plusでは詳細診断

> [Cloud SQL Editions](https://docs.cloud.google.com/sql/docs/editions-intro)

### 接続とセキュリティ
- プライベートIP、Private Service Connect
- Cloud SQL Auth ProxyとLanguage Connectors
- IAMベースのDB認証（MySQL/PostgreSQL）
- CMEK（Customer-Managed Encryption Keys）によるデータ暗号化

> [Cloud SQL Private IP Configuration](https://docs.cloud.google.com/sql/docs/sqlserver/configure-private-ip)

### 統合とツール
- GCE、GKE、Cloud Run/App Engineとの連携
- Database Migration Service
- Google Cloud Observabilityでのログ/メトリクス
- **AI支援トラブルシューティング**: Geminiによる分析（Enterprise Plusでプレビュー）
- **ベクトル検索**: Cloud SQL for MySQLでGA（ScaNNベースのインデックス）

> [Cloud SQL Vector Search for MySQL](https://cloud.google.com/sql/docs/mysql/vector-search)

## ユースケースとメリット

### 主なユースケース
- Web/モバイル/SaaSアプリのOLTPバックエンド
- MySQL/PostgreSQL/SQL Serverのリフト&シフト移行
- 暗号化、IAM、HAが必要な規制対象のワークロード
- リードプールとQuery Insightsを使用した分析寄りアプリ

### メリット
- 迅速な価値実現
- 運用負担の軽減
- 組み込みのHA/バックアップ
- GCPネイティブ統合

## 料金モデル（米国）

- **エディション選択**: Enterprise または Enterprise Plus
- **課金要素**:
  - vCPUとメモリ（リージョン、マシンシリーズ/サイズ別）
  - ストレージ（ディスク）とネットワーク（egress）
  - インスタンス/HAオーバーヘッド
  - レプリカはプライマリと同レート
- **コミットメント割引**: 1-3年の契約で割引
- **SQL Server**: ライセンス費用込み（コア単位の時間料金、BYOLなし）
- **延長サポート料金**: EOLバージョンは2025年5月1日から追加料金

> [Cloud SQL Pricing](https://cloud.google.com/sql/pricing)

## 他のデータベースソリューションとの比較

### セルフマネージド（VM/オンプレミス）との比較
- **メリット**: マネージドHA/バックアップ/パッチ/監視、一貫したSLA、IAM/CMEK、簡単なスケーリング
- **トレードオフ**: スーパーユーザーアクセスの制限、拡張機能の制限、OS/エンジンのカスタマイズ制限

### AWS RDSとの比較
- **RDS**: より多くのエンジンサポート（Aurora、MariaDB、Oracle含む）
- **Cloud SQL**: MySQL、PostgreSQL、SQL Serverに特化、GCP統合強化、Enterprise Plus機能（ほぼゼロメンテナンス）

### Azure SQL Databaseとの比較
- **Azure**: SQL Server特化、PostgreSQL Flexible Serverも提供
- **選択基準**: 主に使用するクラウドとエンジンのニーズ

### AlloyDB for PostgreSQLとの比較
- **AlloyDB**: より高いパフォーマンス/スケール、HTAP、99.99% SLA
- **Cloud SQL**: シンプルな「ドロップイン」マネージドエンジン、移行の障壁が低い

> [AlloyDB for PostgreSQL](https://cloud.google.com/products/alloydb)

## ベストプラクティス

### ネットワーキングとセキュリティ
- プライベートIP/PSCを優先、0.0.0.0/0を避ける
- パスワードポリシーの強制
- IAM DB認証（MySQL/PostgreSQL）とCMEKの使用

### 可用性とメンテナンス
- 本番環境でリージョナルHAを有効化
- メンテナンスウィンドウの設定、定期的なフェイルオーバー/メンテナンステスト
- ピークシーズンのメンテナンス拒否期間設定

### 接続とパフォーマンス
- コネクションプーリング使用（Enterprise PlusのMCPまたは言語レベルのプール）
- 指数バックオフの実装
- Query Insightsによる監視
- 高負荷読み取りにはリードプール検討
- トランザクションを小さく保つ

### 運用
- エンジンバージョンポリシーを追跡し、延長サポート料金を回避
- アップグレード計画
- Cloud SQL SLA運用ガイドラインに従う

> [Cloud SQL Best Practices](https://docs.cloud.google.com/sql/docs/best-practices)

## 2025年の最新アップデート

### 2025年1月13日
- レガシーHA構成が非推奨、2025年5月1日から現行リージョナル永続ディスクHAへ自動移行開始

### 2025年2月1日 → 5月1日
- EOL MySQL 5.6/5.7、PostgreSQL 9.6-12の延長サポート導入、料金開始

> [Extended Support for End-of-Life Cloud SQL](https://cloud.google.com/blog/products/databases/extended-support-for-end-of-life-cloud-sql-mysql-and-postgresql)

### 2025年3月25-31日
- リードプール発表
- Managed Connection Pooling (MCP)のプレビュー開始（MySQL、PostgreSQL）

### 2025年4月3日
- Cloud SQL for MySQLのVertex AI統合プレビュー（SQLからの予測と埋め込み）

### 2025年4月9日
- Enterprise Plus向け新C4Aマシンシリーズ（プレビュー、Hyperdisk Balanced使用）
- Enterprise Plus向けQuery Insights GA
- AI支援トラブルシューティングの言及

### 2024-2025年
- Cloud SQL for MySQLのベクトル検索/埋め込みがGA（ScaNNベースのANNインデックス）

### 2025年10-11月
- AI支援トラブルシューティング（Gemini Cloud Assist）ドキュメント更新
- MCP要件と設定に関するドキュメント更新（Enterprise Plus）

> [Cloud SQL Release Notes](https://cloud.google.com/sql/docs/release-notes)

---

## 参照
- o3-search MCP調査結果, 2025-11-11
