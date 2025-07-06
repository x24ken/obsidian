💡 このTipsの効果
S3へのデプロイを1つのGitHub Actionsコマンドで実現

## 📍 こんな時に使える
- 静的サイトの自動デプロイ
- ビルド成果物の自動アップロード
- CI/CDパイプラインでのS3同期

## 🎯 やり方（30秒版）
```yaml
- name: Deploy to S3
  run: aws s3 sync dist s3://github-action-s3-test --delete
```

## 📱 やり方（詳細版）

### Step 1: 前提条件の確認
- AWS認証が設定済み
- S3バケットが作成済み
- デプロイ対象のファイルが存在

### Step 2: コマンドの理解
- `aws s3 sync`: ローカルとS3の同期
- `dist`: デプロイ対象のディレクトリ
- `s3://bucket-name`: 対象のS3バケット
- `--delete`: 不要ファイルの削除

## 💡 なぜ効果的？
- 差分同期で効率的なアップロード
- --deleteオプションで不要ファイルの自動削除
- 1行でシンプルに実行可能

## 🔧 注意点
- [[S3 sync --delete オプションの効果]]を理解してから使用
- バケット名とディレクトリパスの確認
- 権限設定の適切な設定

## 🔗 組み合わせるとさらに良い
- [[GitHub ActionでAWS認証する簡単な方法]]
- [[CloudFront配信ガイド]]でキャッシュ無効化
- 通知システムでデプロイ完了を通知

## 📈 レベルアップ版
- 複数環境への条件分岐デプロイ
- ロールバック機能の実装
- デプロイ前の自動テスト

## 🎬 実例
```yaml
name: Deploy to S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-northeast-1
      - name: Deploy to S3
        run: aws s3 sync dist s3://github-action-s3-test --delete
```

## 🔄 関連リンク
- [[S3 へのデプロイ with Github Action]]
- [[S3 sync --delete オプションの効果]]
- [[GitHub ActionでAWS認証する簡単な方法]]