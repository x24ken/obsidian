# Zapier、Zapier MCP、iPaaSのまとめ

## 1. Zapier
- **概要**: ノーコードで7,000以上のWebアプリを連携し、ワークフロー（Zaps）を自動化するiPaaS（Integration Platform as a Service）
- **主な機能**:
  - トリガー → アクションの自動化フロー構築
  - 条件分岐、フィルター、データ変換機能
  - AI機能：Copilot（自然言語でZap作成）、チャットボット、Tables（データベース）
  - セキュリティ：2要素認証、OAuth接続、SAML/SSO（Enterprise）
- **料金プラン**:
  - Free: $0/月（100タスク/月）
  - Professional: $19.99/月〜（750タスク〜）
  - Team: $69/月〜（2,000タスク〜、無制限ユーザー）
  - Enterprise: カスタム価格
- **ユースケース**: リード管理、ECサイト運営、マーケティング自動化、社内IT/HR業務、財務レポート

## 2. Zapier MCP（Model Context Protocol）
- **概要**: AIシステムがZapierの5,000以上のアプリ統合エコシステムと連携するためのブリッジ技術
- **主な機能**:
  - 複雑なAPI統合なしでAIツールから30,000以上のアクションを実行可能
  - OpenAI、Anthropic Claude、Cursor IDEなど主要AIプラットフォームと互換
  - セキュリティ：リクエスト署名、細かい権限設定、データ暗号化（TLS 1.3、AES-256）
  - 監査証跡、サンドボックス環境、コンプライアンス対応（GDPR、CCPA）
- **利用制限**:
  - 80ツール呼び出し/時間
  - 160ツール呼び出し/日
  - 300ツール呼び出し/月
- **SDK**: Python、JavaScript、TypeScript、Go、Ruby、Java対応

## 3. iPaaS（Integration Platform as a Service）
- **概要**: クラウドベースの統合プラットフォーム。オンプレミス/クラウドのアプリ、データ、API、ビジネスプロセスを接続・統合するツールスイート
- **主な機能**:
  - プリビルトコネクタ（数百〜数千の既製接続）
  - ローコード/ノーコードのフロービルダー
  - データマッピング・変換（JSON⇔XML、CSV、EDI等）
  - イベント駆動/リアルタイム/バッチ処理
  - ワークフロー・プロセス自動化
  - API管理機能
  - 監視、ロギング、アラート、分析
  - セキュリティ・ガバナンス（ロールベースアクセス、暗号化、コンプライアンス認証）
- **主要プロバイダー**:
  - エンタープライズ向け：MuleSoft、Boomi、Informatica、Microsoft Azure、SAP Integration Suite、IBM、Oracle
  - 中規模/モダンSaaS：Workato、Tray.io、Celigo、Jitterbit、Make
  - SMB/個人向け：Zapier（軽量iPaaSとして位置づけ）
- **Zapierとの関係**:
  - ZapierもiPaaSの一種だが、使いやすさと幅広いSaaS連携に特化
  - エンタープライズiPaaSと比べ、オンプレミス連携やガバナンス機能は限定的
  - 多くの組織が部門レベルでZapier、全社レベルでエンタープライズiPaaSを併用