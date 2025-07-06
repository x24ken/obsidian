【タスク】: CloudFront FunctionsでBasic認証を設定する
【対象レベル】: 中級

## 🎯 このガイドのゴール
CloudFront Functionsを使用してBasic認証を実装し、Webサイトへのアクセスを制限する

## ⏱️ 所要時間
約15〜20分

## 🧰 必要なもの
- AWSアカウント
- [[🔍CloudFront distribution]]が設定済み
- base64コマンドの知識

## 📝 手順概要
1. Basic認証の認証情報を準備
2. base64エンコードによる認証情報の変換
3. CloudFront Functionsコードの実装
4. [[🔍CloudFront]]への関数適用

## 🔧 詳細手順

### Step 1: 認証情報の準備
- **ID**: testID
- **Password**: testPass

### Step 2: base64エンコード
```bash
echo -n "testID:testPass" | base64
```

### Step 3: CloudFront Functions実装
上記のbase64エンコード結果をCloudFront Functionsに実装

### Step 4: 配信設定への適用
[[🔍CloudFront distribution]]のビヘイビア設定に関数を適用

## ✅ 完了チェック
- [ ] 認証情報がbase64エンコードされている
- [ ] CloudFront Functionsが正常に作成された
- [ ] 配信設定に関数が適用されている
- [ ] Basic認証が正常に動作している

## 🚨 よくある失敗と対策
- **認証が働かない**: base64エンコードが正しいか確認
- **アクセスエラー**: [[🔍CloudFront]]キャッシュのクリア
- **設定反映されない**: [[🔍CloudFront]]デプロイ完了を待つ

## 🔄 関連リンク
- [[🔍CloudFront]]の基本概念
- CloudFront Functionsの実装
- Basic認証の仕組み

## 🚀 次のステップ
- [[📋CloudFront OAC設定ガイド]]
- [[📋CloudFront配信ガイド]]
- 高度なセキュリティ設定

**参考**: https://dev.classmethod.jp/articles/apply-basic-authentication-password-with-cloudfront-functions/