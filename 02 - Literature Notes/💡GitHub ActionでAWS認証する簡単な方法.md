💡 このTipsの効果
GitHub Actionsでアクセスキーを使った従来のAWS認証を簡単に実装できる

## 📍 こんな時に使える
- OIDC設定が複雑すぎる場合
- 既存のワークフローを素早く動かしたい場合
- アクセスキーベースの認証で問題ない場合

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
AWS ConsoleでIAMユーザーのアクセスキーを作成

### Step 2: GitHub Secretsに登録
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
		
### Step 3: GitHub Actionsで使用
上記のYAMLコードをGitHub Actionsワークフローに追加

## 💡 なぜ効果的？
- アクセスキーによる直接認証で設定が簡単
- GitHub Secretsでセキュアに管理
- 既存のワークフローとの互換性が高い

## 📊 効果の測り方
- [ ] GitHub ActionsでAWSリソースにアクセス可能
- [ ] 認証エラーが発生しない
- [ ] デプロイが正常に完了

## ⚠️ 注意点
- アクセスキーは長期間有効なため、定期的な更新が必要
- OIDCと比較してセキュリティレベルが低い
- アクセスキーの漏洩リスクを考慮する

## 🔗 組み合わせるとさらに良い
- GitHub OIDC認証への移行（セキュア版）
- AWS IAMロールの最小権限設定
- GitHub Secretsの適切な管理

## 📈 レベルアップ版
- OIDC認証への移行
- 一時的なクレデンシャルの使用
- AWS STSによる権限の動的付与

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
- GitHub Actionsの基本概念
- AWS IAMセキュリティ
- [[アクセスキーIDとシークレットアクセスキーの取得]]