【分野】: GitHub
【解決したい課題】: GitHubのシークレット設定場所がわからない

## ⚡ このTipsの効果
[[GitHub]]の[[シークレット設定]]場所を迷わずに見つけることができる

## 📍 こんな時に使える
- [[GitHub Actions]]で認証情報を設定したい時
- [[AWS]]認証などでシークレットが必要な時
- チームメンバーに設定場所を教える時

## 🎯 やり方（30秒版）
リポジトリページ → Settings → Secrets and variables → Actions

## 📱 やり方（詳細版）

### Step 1: リポジトリにアクセス
対象の[[GitHub]]リポジトリページを開く

### Step 2: Settingsタブを選択
リポジトリ上部のナビゲーションから「Settings」をクリック

### Step 3: Secrets and variablesを選択
左サイドバーから「Secrets and variables」→「Actions」をクリック

### Step 4: シークレット追加
「New repository secret」ボタンから新しいシークレットを追加

## 💡 なぜ効果的？
- [[設定場所]]が一目瞭然
- [[視覚的記憶]]で覚えやすい
- [[チーム共有]]が簡単

## 📊 効果の測り方
- [ ] 迷わずに設定場所にたどり着ける
- [ ] 5秒以内にシークレット設定画面を開ける
- [ ] チームメンバーに正確に説明できる

## ⚠️ 注意点
- [[リポジトリ管理者権限]]が必要
- [[Organization]]レベルのシークレットは別の場所
- [[Branch保護]]設定がある場合は権限を確認

## 🔗 組み合わせるとさらに良い
- [[📋GitHub AWS認証設定ガイド]]
- [[💡GitHub ActionでAWS認証する簡単な方法]]
- [[AWS]]アクセスキーの適切な管理

## 📈 レベルアップ版
- [[Organization]]レベルでのシークレット管理
- [[Environment]]別のシークレット設定
- [[GitHub CLI]]でのシークレット管理

## 🎬 実例
**設定例**:
- `AWS_ACCESS_KEY_ID`: AKIAIOSFODNN7EXAMPLE
- `AWS_SECRET_ACCESS_KEY`: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
- `DATABASE_URL`: postgresql://localhost/mydb

## 🖼️ 設定画面
![[CleanShot 2025-05-09 at 14.47.38.png]]

## 🔄 関連リンク
- [[GitHub Actions]]の基本概念
- [[CI/CD]]パイプライン
- [[認証情報管理]]