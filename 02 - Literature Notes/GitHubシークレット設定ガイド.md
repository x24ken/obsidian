**タイプ**: 📋 Guide

## 📝 一行要約
GitHubシークレットを設定する手順

## 🎯 最終ゴール
GitHubシークレットを設定する

## ⏱️ 所要時間
約2〜5分

## 🧰 必要なもの
- GitHubアカウント
- 対象リポジトリへの管理者権限
- 設定したい認証情報（APIキー、パスワードなど）

## 📝 手順概要
1. GitHubリポジトリページにアクセス
2. Settingsタブを選択
3. Secrets and variablesセクションに移動
4. 新しいシークレットを追加

## 🔧 詳細手順

### Step 1: リポジトリにアクセス
対象のGitHubリポジトリページを開く

### Step 2: Settingsタブを選択
リポジトリ上部のナビゲーションから「**Settings**」をクリック

### Step 3: Secrets and variablesを選択
左サイドバーから「**Secrets and variables**」→「**Actions**」をクリック

### Step 4: シークレット追加
「**New repository secret**」ボタンから新しいシークレットを追加

## 🔧 トラブルシューティング
- **Settingsタブが見えない**: リポジトリ管理者権限を確認
- **Secretsメニューがない**: Organizationレベルの権限制限を確認
- **設定が反映されない**: Branch保護設定の確認

## 🔄 関連リンク
- [[GitHub AWS認証設定ガイド]]
- [[GitHub ActionでAWS認証する簡単な方法]]
- [[GitHub OIDC AWS認証ガイド]]

## 🚀 次のステップ
- Organizationレベルでのシークレット管理
- Environment別のシークレット設定
- GitHub CLIでのシークレット管理


## 🖼️ 設定画面の参考
![[CleanShot 2025-05-09 at 14.47.38.png]]

## 🔧 注意点
- シークレットは一度設定すると値の確認ができない
- 必要最小限の権限を持つトークンを使用
- 定期的なローテーションを実施