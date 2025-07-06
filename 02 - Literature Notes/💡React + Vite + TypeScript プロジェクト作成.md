【分野】: フロントエンド開発
【解決したい課題】: React + Vite + TypeScriptの新規プロジェクトを素早く作りたい

## ⚡ このTipsの効果
[[React]]と[[TypeScript]]を使った[[Vite]]プロジェクトを一発で作成できる

## 📍 こんな時に使える
- 新しいフロントエンドプロジェクトを始める時
- [[React]]と[[TypeScript]]でモダンな開発環境が欲しい時
- [[webpack]]より高速な[[Vite]]を使いたい時

## 🎯 やり方（30秒版）
```bash
npm create vite@latest my-app -- --template react-ts
```

## 📱 やり方（詳細版）

### Step 1: プロジェクト作成
```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

### Step 2: 依存関係インストール
```bash
npm install
```

### Step 3: 開発サーバー起動
```bash
npm run dev
```

## 💡 なぜ効果的？
- [[Vite]]の高速ビルドでストレスフリー
- [[TypeScript]]で型安全性を確保
- [[React]]の最新ベストプラクティスが適用済み

## 📊 効果の測り方
- [ ] プロジェクトが1分以内に作成される
- [ ] 開発サーバーが高速で起動する
- [ ] [[TypeScript]]の型チェックが動作する

## ⚠️ 注意点
- [[Node.js]]のバージョンは14以上が必要
- プロジェクト名に大文字は使えない
- 既存のディレクトリ名と重複しないよう注意

## 🔗 組み合わせるとさらに良い
- [[ESLint]]と[[Prettier]]の設定
- [[TailwindCSS]]の追加
- [[React Router]]の導入

## 📈 レベルアップ版
- [[カスタムテンプレート]]の作成
- [[Monorepo]]構成での管理
- [[Docker]]での開発環境構築

## 🎬 実例
```bash
# プロジェクト作成
npm create vite@latest todo-app -- --template react-ts
cd todo-app
npm install
npm run dev

# ブラウザで http://localhost:5173 にアクセス
```

## 🔄 関連リンク
- [[React]]の基本概念
- [[TypeScript]]入門
- [[Vite]]設定ガイド