【タスク】: CloudFront FunctionsでBasic認証を設定する
【対象レベル】: 中級

## 🎯 このガイドのゴール
[[CloudFront Functions]]を使用して[[Basic認証]]を実装し、Webサイトへのアクセスを制限する

## ⏱️ 所要時間
約15〜20分

## 🧰 必要なもの
- [[AWS]]アカウント
- [[CloudFront distribution]]が設定済み
- [[base64]]コマンドの知識

## 📝 手順概要
1. [[Basic認証]]の[[認証情報]]を準備
2. [[base64]]エンコードによる[[認証情報]]の変換
3. [[CloudFront Functions]]コードの実装
4. [[CloudFront]]への関数適用

## 🔧 詳細手順

### Step 1: 認証情報の準備
- **ID**: testID
- **Password**: testPass

### Step 2: base64エンコード
```bash
echo -n "testID:testPass" | base64
```

### Step 3: CloudFront Functions実装
上記のbase64エンコード結果を[[CloudFront Functions]]に実装

### Step 4: 配信設定への適用
[[CloudFront distribution]]の[[ビヘイビア]]設定に関数を適用

## ✅ 完了チェック
- [ ] [[認証情報]]がbase64エンコードされている
- [ ] [[CloudFront Functions]]が正常に作成された
- [ ] 配信設定に関数が適用されている
- [ ] [[Basic認証]]が正常に動作している

## 🚨 よくある失敗と対策
- **認証が働かない**: [[base64]]エンコードが正しいか確認
- **アクセスエラー**: [[CloudFront]]キャッシュのクリア
- **設定反映されない**: [[CloudFront]]デプロイ完了を待つ

## 🔄 関連リンク
- [[CloudFront]]の基本概念
- [[CloudFront Functions]]の実装
- [[Basic認証]]の仕組み

## 🚀 次のステップ
- [[CloudFrontのOAC設定]]
- [[CloudFront配信手順]]
- [[高度なセキュリティ設定]]

**参考**: https://dev.classmethod.jp/articles/apply-basic-authentication-password-with-cloudfront-functions/