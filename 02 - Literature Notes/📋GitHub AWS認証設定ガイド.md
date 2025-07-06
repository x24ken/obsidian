【タスク】: GitHubからAWSへの認証設定
【対象レベル】: 初級〜中級

## 🎯 このガイドのゴール
[[GitHub]]から[[AWS]]サービスにアクセスするための認証を設定し、[[GitHub Actions]]での自動デプロイを実現する

## ⏱️ 所要時間
約10〜15分

## 🧰 必要なもの
- [[GitHub]]アカウント
- [[AWS]]アカウント
- [[アクセスキー]]の取得権限

## 📝 手順概要
1. [[アクセスキー]]の取得
2. [[GitHub Secrets]]への設定
3. [[GitHub Actions]]での認証設定

## 🔧 詳細手順

### Step 1: アクセスキーの取得
[[アクセスキーIDとシークレットアクセスキーの取得]]を参照してAWSアクセスキーを取得

### Step 2: GitHub Secretsの設定
[[Githubのシークレット設定場所]]で以下の値を設定：
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Step 3: GitHub Actionsでの認証
[[💡GitHub ActionでAWS認証する簡単な方法]]を参照して認証コードを実装

## ✅ 完了チェック
- [ ] [[AWS]]アクセスキーが取得されている
- [ ] [[GitHub Secrets]]に認証情報が設定されている
- [ ] [[GitHub Actions]]で認証が正常に動作している

## 🚨 よくある失敗と対策
- **権限エラー**: [[IAM]]ポリシーの確認
- **認証失敗**: [[Secrets]]の値を再確認
- **アクセス拒否**: [[AWS]]リージョンの確認

## 🔄 関連リンク
- [[アクセスキーIDとシークレットアクセスキーの取得]]
- [[Githubのシークレット設定場所]]
- [[💡GitHub ActionでAWS認証する簡単な方法]]

## 🚀 次のステップ
- [[📋GitHub OIDC AWS認証ガイド]]（セキュア版）
- [[📋CloudFront配信ガイド]]
- [[S3 へのデプロイ with Github Action]]