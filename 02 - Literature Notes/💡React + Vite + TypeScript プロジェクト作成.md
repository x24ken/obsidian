【分野】: フロントエンド開発
【解決したい課題】: React + Vite + TypeScriptの新規プロジェクトを素早く作りたい

## ⚡ このTipsの効果
ReactとTypeScriptを使ったViteプロジェクトを一発で作成できる

## 📍 こんな時に使える
- 新しいフロントエンドプロジェクトを始める時
- ReactとTypeScriptでモダンな開発環境が欲しい時
- webpackより高速なViteを使いたい時

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
- Viteの高速ビルドでストレスフリー
- TypeScriptで型安全性を確保
- Reactの最新ベストプラクティスが適用済み

## 📊 効果の測り方
- [ ] プロジェクトが1分以内に作成される
- [ ] 開発サーバーが高速で起動する
- [ ] TypeScriptの型チェックが動作する

## ⚠️ 注意点
- Node.jsのバージョンは14以上が必要
- プロジェクト名に大文字は使えない
- 既存のディレクトリ名と重複しないよう注意

## 🔗 組み合わせるとさらに良い
- ESLintとPrettierの設定
- TailwindCSSの追加
- React Routerの導入

## 📈 レベルアップ版
- カスタムテンプレートの作成
- Monorepo構成での管理
- Dockerでの開発環境構築

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
- Reactの基本概念
- TypeScript入門
- Vite設定ガイド