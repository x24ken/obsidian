**タイプ**: 💡 Tips

## 📝 一行要約
GitHub Actionsでアクセスキーを使った従来のAWS認証を簡単に実装する方法

## ⚡ 期待できる効果
- OIDC設定なしでGitHub ActionsからAWSリソースにアクセス可能
- 既存ワークフローへの迅速な統合
- 設定ステップが3つだけで完了

## 🎯 使用方法
- **Step 1**: AWS ConsoleでIAMユーザーのアクセスキーを作成
- **Step 2**: GitHub Secretsに`AWS_ACCESS_KEY_ID`と`AWS_SECRET_ACCESS_KEY`を登録
- **Step 3**: ワークフローに`aws-actions/configure-aws-credentials@v2`を追加

## 📍 適用場面
- OIDC設定が複雑すぎる場合
- 既存のワークフローを素早く動かしたい場合
- プロトタイプやテスト環境での使用

## 📊 効果測定
- [ ] GitHub ActionsでAWSリソースにアクセス可能
- [ ] 認証エラーが発生しない
- [ ] デプロイが正常に完了

## 💡 なぜ重要か
この方法は[[GitHub OIDC AWS認証ガイド]]の複雑さを回避し、迅速なCI/CDパイプライン構築を可能にする。ただし、セキュリティトレードオフを理解した上で使用すべき実用的な選択肢として知識ネットワークに位置づけられる。

## 🔗 つながり
→ [[GitHub AWS認証設定ガイド]], [[アクセスキーIDとシークレットアクセスキーの取得]], [[作成予定-GitHub Actions認証方式比較]]

## 📚 参照元
> [GitHub Actions Documentation - AWS認証, 2024年実践経験]