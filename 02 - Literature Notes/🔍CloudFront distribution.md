【テーマ】: CloudFront distribution

## 📝 一言で言うと
[[🔍CloudFront]]サービス内で作成する個別の配信設定

## 🎯 核心的な定義
[[🔍CloudFront]]において、特定のコンテンツを配信するための設定単位。オリジンサーバー、キャッシュポリシー、ドメイン名、SSL証明書などを組み合わせて構成される

## 🔗 構成要素
- オリジンサーバー（S3、EC2、ALBなど）
- キャッシュビヘイビア（配信ルール）
- ドメイン名（CNAME）
- SSL/TLS証明書
- エラーページ設定

## 🌟 主な特徴
- **個別設定**：各distributionは独立した配信設定
- **複数オリジン**：1つのdistributionで複数のオリジンサーバーを指定可能
- **パスベースルーティング**：URLパスに応じて異なるオリジンにルーティング
- **独自ドメイン**：Route53と連携したカスタムドメイン設定

## 🆚 似ているけど違うもの
- **[[🔍CloudFront]]**：サービス全体の名前、distributionはその中の個別設定
- **S3バケット**：単一のストレージ単位、distributionは配信設定
- **Load Balancer**：リクエスト分散、distributionはキャッシュ配信

## 💡 身近な例
- **Webサイト配信**：S3をオリジンとした静的サイト配信
- **API配信**：API GatewayをオリジンとしたAPI配信
- **マルチオリジン**：画像はS3、動的コンテンツはEC2から配信
- **地域別配信**：日本向けとアメリカ向けで別々のdistribution

## 🎓 なぜ重要？
- CDN機能の実装単位として必須
- コスト管理：distribution単位での料金管理
- セキュリティ：distribution単位でのWAFやアクセス制御
- 監視：distribution単位でのCloudWatchメトリクス

## 🔄 つながり
- 上位概念：[[🔍CloudFront]]
- 設定方法：[[📋CloudFront配信ガイド]]、[[📋CloudFront OAC設定ガイド]]