**タイプ**: 🔍 Concept

## 📝 一行要約
AWSのコンテンツ配信ネットワーク（CDN）サービスで、世界各地のエッジロケーションから高速配信を実現

## 🎯 核心的定義
世界各地のエッジロケーションを通じて、Webコンテンツを高速に配信するためのクラウドサービス。S3やEC2などのオリジンサーバーから、ユーザーに最も近い場所でコンテンツを提供する

## 🌟 主な構成要素
- **[[CloudFront distribution]]**: 配信設定の単位
- **エッジロケーション**: 世界各地の配信拠点
- **オリジンサーバー**: S3, EC2などの元コンテンツ
- **キャッシュポリシー**: 配信とキャッシュの制御
- **セキュリティ機能**: SSL/TLS証明書、WAF連携

## 🔄 関連概念との違い
- **vs Cloudflare**: 同じCDNサービスだが、AWS外部のサービス
- **vs Azure CDN**: MicrosoftのCDNサービス
- **vs S3単体**: S3は保存のみ、CloudFrontは高速配信

## 💡 なぜ重要か
CloudFrontは[[CloudFront配信ガイド]]や[[CloudFront Basic認証設定ガイド]]で示されるように、現代のWebアプリケーションにおけるUX向上の要。グローバル配信により、[[S3 sync --delete オプションの効果]]で整理されたコンテンツを世界中のユーザーに高速配信する基盤技術として機能する。

## 🔗 つながり
→ [[CloudFront distribution]], [[CloudFront配信ガイド]], [[CloudFront Basic認証設定ガイド]]

## 📚 参照元
> [AWS CloudFront Documentation, 2024年]