【タスク】: CloudFrontのOAC（オリジンアクセスコントロール）設定
【対象レベル】: 中級

## 🎯 このガイドのゴール
[[CloudFront]]で[[OAC（オリジンアクセスコントロール）]]を設定し、[[S3]]バケットへの直接アクセスを制限する

## ⏱️ 所要時間
約10〜15分

## 🧰 必要なもの
- [[AWS]]アカウント
- [[CloudFront distribution]]が作成済み
- [[S3]]バケットが作成済み
- [[AWS Console]]へのアクセス権限

## 📝 手順概要
1. [[CloudFront]]コンソールでOAC作成
2. [[S3]]バケットポリシーの更新
3. [[CloudFront distribution]]へのOAC適用
4. 動作確認とテスト

## 🔧 詳細手順

### Step 1: OAC作成
[[CloudFront]]コンソールで[[オリジンアクセスコントロール]]を作成

### Step 2: S3バケットポリシー設定
[[S3]]バケットポリシーを更新し、[[CloudFront]]からのアクセスのみを許可

### Step 3: CloudFront設定更新
[[CloudFront distribution]]の[[オリジン設定]]でOACを適用

### Step 4: 動作確認
- [[S3]]への直接アクセスが拒否されることを確認
- [[CloudFront]]経由でのアクセスが正常に動作することを確認

## ✅ 完了チェック
- [ ] [[OAC]]が正常に作成されている
- [ ] [[S3]]バケットポリシーが適用されている
- [ ] [[CloudFront distribution]]にOACが設定されている
- [ ] 直接アクセスが拒否されている

## 🚨 よくある失敗と対策
- **Access Denied エラー**: [[バケットポリシー]]の権限設定を確認
- **設定反映されない**: [[CloudFront]]デプロイ完了を待つ
- **キャッシュ問題**: [[CloudFront]]キャッシュのクリア

## 🔄 関連リンク
- [[CloudFront]]の基本概念
- [[S3]]セキュリティ設定
- [[AWS IAM]]ポリシー

## 🚀 次のステップ
- [[CloudFront配信手順]]
- [[CloudFront FunctionsでBasic認証のパスワードをかける]]
- [[S3 セキュリティ最適化]]

## 🖼️ 設定手順画面
1. ![[CleanShot 2025-05-12 at 14.59.19.png]]
2. ![[CleanShot 2025-05-12 at 15.00.27.png]]
3. ![[CleanShot 2025-05-12 at 15.00.58.png]]
4. ![[CleanShot 2025-05-12 at 15.01.10.png]]
