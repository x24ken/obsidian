**タイプ**: 📋 Guide

## 📝 一行要約
GitHubでAWS認証を設定する手順

## 🎯 このガイドのゴール
GitHubからAWSサービスにアクセスするための認証を設定し、GitHub Actionsての自動デプロイを実現する

## 🧰 必要なもの
- GitHubアカウント
- AWSアカウント
- アクセスキーの取得権限

## 📝 手順概要
1. アクセスキーの取得
2. GitHub Secretsへの設定
3. GitHub Actionsでの認証設定

## 🔧 詳細手順

### Step 1: アクセスキーの取得
[[アクセスキーIDとシークレットアクセスキーの取得]]を参照してAWSアクセスキーを取得

### Step 2: GitHub Secretsの設定
[[GitHubシークレット設定の場所を一瞬で見つける方法]]で以下の値を設定：
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

### Step 3: GitHub Actionsでの認証
[[GitHub ActionでAWS認証する簡単な方法]]を参照して認証コードを実装

## ✅ 完了チェック
- [ ] AWSアクセスキーが取得されている
- [ ] GitHub Secretsに認証情報が設定されている
- [ ] GitHub Actionsで認証が正常に動作している

## 🚨 よくある失敗と対策
- **権限エラー**: IAMポリシーの確認
- **認証失敗**: Secretsの値を再確認
- **アクセス拒否**: AWSリージョンの確認

## 🔄 関連リンク
- [[アクセスキーIDとシークレットアクセスキーの取得]]
- [[GitHubシークレット設定の場所を一瞬で見つける方法]]
- [[GitHub ActionでAWS認証する簡単な方法]]

## 🚀 次のステップ
- [[GitHub OIDC AWS認証ガイド]]（セキュア版）
- [[CloudFront配信ガイド]]
- [[S3 へのデプロイ with Github Action]]