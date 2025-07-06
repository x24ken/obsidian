【分野】: AWS S3
【解決したい課題】: デプロイ時に不要なファイルがS3に残ってしまう

## ⚡ このTipsの効果
[[S3]]バケットとローカルディレクトリを完全に同期し、不要ファイルを自動削除できる

## 📍 こんな時に使える
- [[GitHub Actions]]での自動デプロイ時
- 古いビルドファイルを確実に削除したい時
- [[静的サイト]]のクリーンなデプロイが必要な時

## 🎯 やり方（30秒版）
```bash
aws s3 sync dist s3://github-action-s3-test --delete
```

## 📱 やり方（詳細版）

### Step 1: 基本のsyncコマンド
```bash
aws s3 sync dist s3://your-bucket
```

### Step 2: --deleteオプションを追加
```bash
aws s3 sync dist s3://your-bucket --delete
```

### Step 3: GitHub Actionsでの使用例
```yaml
- name: Deploy to S3
  run: aws s3 sync dist s3://github-action-s3-test --delete
```

## 💡 なぜ効果的？
- **完全同期**: ローカルの[[buildディレクトリ]]と[[S3バケット]]の内容を完全に一致
- **自動削除**: S3側にあってローカルにないファイルを自動削除
- **クリーンなデプロイ**: 古いファイルが残らない

## 📊 効果の測り方
- [ ] 削除されたファイルがS3から消えている
- [ ] ローカルとS3の内容が完全に一致している
- [ ] デプロイ時間が最適化されている

## ⚠️ 注意点
- **削除は永続的**: 削除されたファイルは復元不可
- **権限確認**: S3の削除権限が必要
- **バックアップ**: 重要なファイルは事前にバックアップ

## 🔗 組み合わせるとさらに良い
- [[💡S3デプロイのGitHub Actions設定]]
- [[📋CloudFront配信ガイド]]
- [[キャッシュ無効化]]設定

## 📈 レベルアップ版
- [[AWS CLI]]の高度なオプション活用
- [[S3ライフサイクルポリシー]]との組み合わせ
- [[CloudFormation]]での自動化

## 🎬 実例
**before（--deleteなし）**:
- ローカル: index.html, app.js
- S3: index.html, app.js, old-file.js ← 残ってしまう

**after（--deleteあり）**:
- ローカル: index.html, app.js
- S3: index.html, app.js ← 完全に一致

## 🔄 関連リンク
- [[💡S3デプロイのGitHub Actions設定]]
- [[AWS S3]]同期の基本
- [[静的サイトホスティング]]