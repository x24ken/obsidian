【タスク】: CloudFrontのOAC（オリジンアクセスコントロール）設定
【対象レベル】: 中級

## 🎯 このガイドのゴール
[[🔍CloudFront]]で[[🔍OAC]]を設定し、S3バケットへの直接アクセスを制限する

## ⏱️ 所要時間
約10〜15分

## 🧰 必要なもの
- AWSアカウント
- [[🔍CloudFront distribution]]が作成済み
- S3バケットが作成済み
- AWS Consoleへのアクセス権限

## 📝 手順概要
1. [[🔍CloudFront]]コンソールでOAC作成
2. S3バケットポリシーの更新
3. [[🔍CloudFront distribution]]へのOAC適用
4. 動作確認とテスト

## 🔧 詳細手順

### Step 1: OAC作成
[[🔍CloudFront]]コンソールでオリジンアクセスコントロールを作成

### Step 2: S3バケットポリシー設定
S3バケットポリシーを更新し、[[🔍CloudFront]]からのアクセスのみを許可

### Step 3: CloudFront設定更新
[[🔍CloudFront distribution]]のオリジン設定でOACを適用

### Step 4: 動作確認
- S3への直接アクセスが拒否されることを確認
- [[🔍CloudFront]]経由でのアクセスが正常に動作することを確認

## ✅ 完了チェック
- [ ] [[🔍OAC]]が正常に作成されている
- [ ] S3バケットポリシーが適用されている
- [ ] [[🔍CloudFront distribution]]にOACが設定されている
- [ ] 直接アクセスが拒否されている

## 🚨 よくある失敗と対策
- **Access Denied エラー**: バケットポリシーの権限設定を確認
- **設定反映されない**: [[🔍CloudFront]]デプロイ完了を待つ
- **キャッシュ問題**: [[🔍CloudFront]]キャッシュのクリア

## 🔄 関連リンク
- [[🔍CloudFront]]の基本概念
- S3セキュリティ設定
- AWS IAMポリシー

## 🚀 次のステップ
- [[📋CloudFront配信ガイド]]
- [[📋CloudFront Basic認証設定ガイド]]
- S3セキュリティ最適化

## 🖼️ 設定手順画面
1. ![[CleanShot 2025-05-12 at 14.59.19.png]]
2. ![[CleanShot 2025-05-12 at 15.00.27.png]]
3. ![[CleanShot 2025-05-12 at 15.00.58.png]]
4. ![[CleanShot 2025-05-12 at 15.01.10.png]]
