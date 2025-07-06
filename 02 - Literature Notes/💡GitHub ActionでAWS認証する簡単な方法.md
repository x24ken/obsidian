💡 このTipsの効果
[[GitHub Actions]]で[[アクセスキー]]を使った従来の[[AWS]]認証を簡単に実装できる

## 📍 こんな時に使える
- [[OIDC]]設定が複雑すぎる場合
- 既存のワークフローを素早く動かしたい場合
- [[アクセスキー]]ベースの認証で問題ない場合

## 🎯 やり方（30秒版）
```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v2
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: ap-northeast-1
```

## 📱 やり方（詳細版）

### Step 1: AWSアクセスキーの取得
[[AWS Console]]で[[IAM]]ユーザーのアクセスキーを作成

### Step 2: GitHub Secretsに登録
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Step 3: GitHub Actionsで使用
上記のYAMLコードを[[GitHub Actions]]ワークフローに追加

## 💡 なぜ効果的？
- [[アクセスキー]]による直接認証で設定が簡単
- [[GitHub Secrets]]でセキュアに管理
- 既存のワークフローとの互換性が高い

## 📊 効果の測り方
- [ ] [[GitHub Actions]]で[[AWS]]リソースにアクセス可能
- [ ] 認証エラーが発生しない
- [ ] [[デプロイ]]が正常に完了

## ⚠️ 注意点
- [[アクセスキー]]は長期間有効なため、定期的な更新が必要
- [[OIDC]]と比較してセキュリティレベルが低い
- [[アクセスキー]]の漏洩リスクを考慮する

## 🔗 組み合わせるとさらに良い
- [[GitHub を OIDC プロバイダーを使って AWS に認証]]（セキュア版）
- [[AWS IAM]]ロールの最小権限設定
- [[GitHub Secrets]]の適切な管理

## 📈 レベルアップ版
- [[OIDC]]認証への移行
- [[一時的なクレデンシャル]]の使用
- [[AWS STS]]による権限の動的付与

## 🎬 実例
```yaml
name: Deploy to AWS
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-northeast-1
      - name: Deploy to S3
        run: aws s3 sync . s3://my-bucket/
```

## 🔄 関連リンク
- [[GitHub Actions]]の基本概念
- [[AWS IAM]]セキュリティ
- [[アクセスキーIDとシークレットアクセスキーの取得]]