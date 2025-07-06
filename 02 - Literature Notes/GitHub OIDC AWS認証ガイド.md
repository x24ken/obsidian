**タイプ**: 📋 Guide

## 📝 一行要約
GitHub ActionsでOIDCを使用してAWSに安全に認証し、アクセスキー不要のセキュアなデプロイメント実現手順

## 🎯 最終ゴール
アクセスキーを使わないセキュアなデプロイメント環境を構築する

## ⏱️ 所要時間
約20〜30分

## 🧰 必要なもの
- GitHubアカウント
- AWSアカウント
- IAMの基本知識
- GitHub Actionsの基本理解

## 📝 手順概要
1. AWSでのIDプロバイダー作成
2. IAMロールの作成と権限設定
3. GitHub Actionsでの認証設定
4. 動作確認とテスト

## 🔧 詳細手順

### Step 1: GitHub Actions用IDプロバイダーの作成
AWS ConsoleでIAM→IDプロバイダーからOIDCプロバイダーを作成

### Step 2: IAMロールの作成
- IAMロールに必要な権限を追加
- S3とCloudFrontの権限を設定
- GitHub Actionsからの信頼関係を構築

### Step 3: GitHub Actionsでの認証設定
```yaml
- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v2
  with:
    role-to-assume: ${{ secrets.AWS_ROLE_ARN }}
    aws-region: ap-northeast-1
    role-session-name: GitHubActions
```

### Step 4: セキュリティ設定
- 短期間トークンの使用
- 最小権限原則の適用
- アクセスキーの廃止

## ✅ 完了チェック
- [ ] IDプロバイダーが作成されている
- [ ] IAMロールが適切に設定されている
- [ ] GitHub Actionsで認証が成功している
- [ ] アクセスキーが不要になっている

## 🚨 よくある失敗と対策
- **認証エラー**: 信頼関係ポリシーを確認
- **権限不足**: IAMロールの権限を見直し
- **設定ミス**: GitHub Secretsの値を確認

## 🔄 関連リンク
- GitHub Actionsの基本概念
- AWS IAMセキュリティ
- OIDC認証の仕組み

## 🚀 次のステップ
- [[CloudFront配信ガイド]]
- 高度なセキュリティ設定

**参考リンク**:
- https://zenn.dev/kou_pg_0131/articles/gh-actions-oidc-aws
- https://www.youtube.com/watch?v=WSiV0Q0zvEI (8:50〜)