【タスク】: GitHub ActionsでOIDCを使用したAWS認証を設定する
【対象レベル】: 中級〜上級

## 🎯 このガイドのゴール
[[GitHub Actions]]で[[OIDC]]（OpenID Connect）を使用して[[AWS]]に安全に認証し、[[アクセスキー]]を使わないセキュアなデプロイメントを実現する

## ⏱️ 所要時間
約20〜30分

## 🧰 必要なもの
- [[GitHub]]アカウント
- [[AWS]]アカウント
- [[IAM]]の基本知識
- [[GitHub Actions]]の基本理解

## 📝 手順概要
1. [[AWS]]での[[IDプロバイダー]]作成
2. [[IAMロール]]の作成と権限設定
3. [[GitHub Actions]]での認証設定
4. 動作確認とテスト

## 🔧 詳細手順

### Step 1: GitHub Actions用IDプロバイダーの作成
[[AWS Console]]で[[IAM]]→[[IDプロバイダー]]から[[OIDC]]プロバイダーを作成

### Step 2: IAMロールの作成
- [[IAMロール]]に必要な権限を追加
- [[S3]]と[[CloudFront]]の権限を設定
- [[GitHub Actions]]からの信頼関係を構築

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
- [[短期間トークン]]の使用
- [[最小権限原則]]の適用
- [[アクセスキー]]の廃止

## ✅ 完了チェック
- [ ] [[IDプロバイダー]]が作成されている
- [ ] [[IAMロール]]が適切に設定されている
- [ ] [[GitHub Actions]]で認証が成功している
- [ ] [[アクセスキー]]が不要になっている

## 🚨 よくある失敗と対策
- **認証エラー**: [[信頼関係]]ポリシーを確認
- **権限不足**: [[IAMロール]]の権限を見直し
- **設定ミス**: [[GitHub Secrets]]の値を確認

## 🔄 関連リンク
- [[GitHub Actions]]の基本概念
- [[AWS IAM]]セキュリティ
- [[OIDC]]認証の仕組み

## 🚀 次のステップ
- [[CloudFront配信手順]]
- [[S3 へのデプロイ with Github Action]]
- [[高度なセキュリティ設定]]

**参考リンク**:
- https://zenn.dev/kou_pg_0131/articles/gh-actions-oidc-aws
- https://www.youtube.com/watch?v=WSiV0Q0zvEI (8:50〜)