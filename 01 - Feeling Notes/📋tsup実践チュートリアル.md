**タイプ**: 📋 Guide

## 📝 一行要約
tscだけでnpmパッケージを作る限界を体験し、tsupがどう解決するかを実践的に学ぶチュートリアル。

## 🎯 最終ゴール
ESM/CommonJS両対応のnpmパッケージをtsupで効率的にビルドできるようになる。

## 🔧 実行手順
1. **tscでdate-formatterライブラリを作成**
   - プロジェクト初期化: `mkdir date-formatter && npm init -y`
   - TypeScriptで日付フォーマット関数を実装
   - CommonJS用のtsconfig.jsonでビルド

2. **ESM対応の問題に直面**
   - 別のtsconfig.esm.jsonを作成
   - package.jsonが複雑化（main/module/exportsの設定）
   - 2回のビルド実行が必要

3. **tsupで全て解決**
   - `npm install -D tsup`でインストール
   - tsup.config.tsで全形式を一括設定
   - `npm run build`一発で完了

## ⚠️ 注意点・罠
- tscだけだと型定義ファイルが重複する
- package.jsonのexportsフィールドの手動管理が煩雑
- ビルド時間がプロジェクト規模に比例して増大

## ✅ 成功の指標
- 1つのコマンドでESM/CommonJS両方が生成される
- ビルド時間が大幅短縮（2.5秒→0.3秒）※JS生成のみの場合。型定義ファイル生成を含めると1-3秒程度
- ブラウザ用バンドル（IIFE）も同時生成可能

## 💡 なぜ重要か
現代のJavaScriptエコシステムでは、パッケージがESMとCommonJSの両方に対応することが求められる。tsupはこの複雑性を隠蔽し、開発者が本質的なコード開発に集中できる環境を提供する。

## 🔗 つながり
→ [[Claude Code]], [[GitHub ActionでAWS認証する簡単な方法]]

## 📚 参照元
> [個人体験, 2025-01-07]