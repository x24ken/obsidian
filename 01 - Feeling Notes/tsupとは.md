# tsupとは

tsupは、TypeScriptとJavaScriptプロジェクト用の高速なビルドツールです。

## 主な特徴
- **高速**: esbuildベースで非常に高速
- **TypeScript対応**: TypeScriptファイルを直接ビルド可能  
- **設定不要**: ゼロコンフィグで動作
- **複数フォーマット**: ESM、CommonJS、UMD、IIFEに対応
- **バンドル**: 複数ファイルを1つにまとめる機能

## よく使われるケース
- ライブラリの配布用ビルド
- npm パッケージの作成
- TypeScriptプロジェクトの高速ビルド

## 基本的な使い方
```bash
npx tsup src/index.ts
```

## メリット
- Webpackやrollupと比べて設定がシンプル
- ビルド時間が大幅に短縮
- TypeScriptの型定義ファイル(.d.ts)も自動生成

## デメリット
- 複雑なビルド設定には向かない
- プラグインエコシステムが限定的
- 一部の高度な機能はWebpackに劣る