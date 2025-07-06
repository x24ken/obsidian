**タイプ**: 📋 Guide

## 📝 一行要約
GitHub ActionsでS3へ自動デプロイする手順

## 🎯 最終ゴール
GitHub ActionsでS3へ自動デプロイする

## 🧰 必要なもの
- AWSアカウント
- GitHubアカウント
- デプロイ対象のWebサイト
- S3バケット作成権限

## 📝 手順概要
1. GitHubにAWS認証させる
2. S3バケットを作る
3. デプロイActionを設定する

## 🔧 詳細手順

### Step 1: GitHubにAWS認証させる
- [[GitHub AWS認証設定ガイド]]を参考にOIDC認証を設定
- または[[GitHub ActionでAWS認証する簡単な方法]]でアクセスキー認証を設定

### Step 2: S3バケットを作る
- AWSコンソールでS3バケットを作成
- 静的ウェブサイトホスティングを有効化
- 必要に応じて[[CloudFront配信ガイド]]でCDN設定

### Step 3: デプロイActionを設定
- [[S3へのデプロイAction]]のコードを使用
- GitHub Actionsワークフローファイルを作成
- [[S3 sync --delete オプションの効果]]を理解して適用

## ✅ 完了チェック
- [ ] AWSとGitHubの認証が設定済み
- [ ] S3バケットが作成・設定済み
- [ ] GitHub Actionsワークフローが動作する
- [ ] デプロイが自動的に実行される

## 🚨 よくある失敗と対策
- **認証エラー**: 権限設定を再確認
- **バケット権限**: S3バケットポリシーの設定確認
- **ファイル同期**: --deleteオプションの動作を理解
- **CloudFront**: キャッシュ無効化の設定

## 🔄 関連リンク
- [[GitHub AWS認証設定ガイド]]
- [[GitHub ActionでAWS認証する簡単な方法]]
- [[S3へのデプロイAction]]
- [[CloudFront配信ガイド]]

## 🚀 次のステップ
- CloudFrontとの連携設定
- 複数環境への対応
- デプロイ通知の設定

## 📚 参考資料
- https://www.youtube.com/watch?v=tajK4ezyuNc