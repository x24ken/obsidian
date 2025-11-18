**タイプ**: 🔍 Concept

## 📝 一行要約

Twilioが提供するメール配信APIで、Node/Python/Goなどの公式SDK、Event Webhook、Inbound Parse機能を持ち、SPF/DKIM自動設定で開発者がインフラではなくアプリ価値に集中できる。

## 🎯 核心的定義

SendGridは、`POST /v3/mail/send`のJSON APIまたはSMTPリレーでメール送信を行うクラウドサービス。公式SDK（Node, Python, Go, Java, .NET, PHP, Ruby等）が充実し、署名付きEvent WebhookとInbound Parse Webhookで配信イベントと受信メールを自動的にアプリに連携できる。

## 🌟 開発者が選ぶ理由

**SDK品質とドキュメント**
- 公式クライアントライブラリが主要言語で提供され、クイックスタートが充実
- Event Webhookは署名検証とOAuth 2.0対応で本番運用レベルのセキュリティ
- Inbound Parse WebhookでMX→SendGrid→HTTPSエンドポイントの受信処理が簡単

**インフラ自動化**
- Domain Authentication（SPF/DKIM）がCNAME設定で自動管理される
- 専用IP・サブユーザー・IPプールがProプラン以上で標準提供
- IPウォームアップAPIで新IPの評価構築を自動化

**実装例（Node.js）**
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'user@example.com',
  from: 'noreply@yourdomain.com',
  templateId: 'd-xxxxx',
  dynamicTemplateData: { name: 'Taro' }
};

await sgMail.send(msg);
```

## ⚠️ デメリットと制約

**料金体系**
- 無料プランは2025年5月27日に廃止（現在は期間限定トライアルのみ）
- 従量課金で月間割り当て超過時のオーバーチャージが発生
- 急激なトラフィック増加時は予算超過リスクあり

**技術的制限**
- メッセージサイズ上限30MB（添付は大きい場合リンク化推奨）
- 1リクエストあたり最大1,000受信者（to/cc/bcc合計）
- Mail Send以外のAPIエンドポイントはレート制限あり（429エラー、`X-RateLimit`ヘッダーで確認）

**データレジデンシー**
- Event Webhook用のデータステージングは米国保存
- EU内完全保管が必須の場合は注意が必要

**開発者が直面する典型的な問題**
- オーバーチャージによる予算超過（アラート設定必須）
- 30MB/1,000受信者制限による413/400エラー
- 管理APIのレート制限（429）でバックオフ実装が必要

## 🔄 競合との使い分け（開発者視点）

**SendGridを選ぶべき場合**
- Event Webhookの署名検証・OAuth対応が必要
- Inbound Parse Webhookで受信メール処理を実装したい
- 専用IP・サブユーザー管理を単一プロバイダーで完結させたい
- トランザクショナルとマーケティングを統合管理したい

**Amazon SESを選ぶべき場合**
- すでにAWS環境でコスト最優先（1,000通あたり$0.10）
- SNS/EventBridge/Kinesis Firehoseとのネイティブ連携が必要
- SESサンドボックス解除（200通/日→本番クォータ）の審査通過が可能

**Mailgunを選ぶべき場合**
- メールバリデーションと配信性ツールを重視
- ログ保持期間の柔軟性が必要（Basic: 1日、Scale: 30日）
- 25MBまでのメッセージサイズで十分

**Postmarkを選ぶべき場合**
- トランザクショナルメール特化で高速・高信頼性を求める
- Message Streamsでトランザクショナル/ブロードキャストを厳格分離したい
- マーケティング機能は不要でシンプルな料金体系を好む
- 10MBメッセージサイズ制限が許容範囲

## 💡 なぜ重要か

2024年Gmail/Yahoo規制（SPF+DKIM必須、DMARC、One-Click Unsubscribe、スパム率0.3%未満）でメール到達性の技術ハードルが急上昇。SendGridはSPF/DKIM/DMARCの自動DNS管理とEvent Webhookリアルタイムフィードバックで、開発者が手動DNS設定やログ監視から解放される。特にスタートアップや中小チームでは、この運用負荷削減がプロダクト開発速度に直結する。

## つながり

（現在関連するノートはありません）
