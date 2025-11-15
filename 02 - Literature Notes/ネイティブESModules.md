**タイプ**: 🔍 Concept

## 📝 一行要約
ネイティブESModulesとは、ブラウザが標準サポートする`<script type="module">`によるモジュールシステムで、バンドル不要の高速開発を可能にする

## 🎯 核心的定義
ES2015で標準化された`import`/`export`構文を、ブラウザが直接解釈・実行する機能。各モジュールを個別ファイルとして配信し、ブラウザ自身が依存関係を解決

## 🌟 主な構成要素
- **`<script type="module">`**: ブラウザへのESMモード指示
- **動的インポート**: `import("./module.js")`による遅延読み込み
- **モジュールグラフ**: ブラウザによる自動依存関係追跡
- **HTTPキャッシュ**: 各モジュールファイルの個別キャッシュ
- **Top-level await**: モジュールレベルでの非同期処理

## 🔄 関連概念との違い
**バンドルとの比較**:
- バンドル: 事前に全ファイルを結合、初期読み込み重い、変更時全体再ビルド
- ネイティブESM: 個別ファイル配信、初期読み込み軽い、変更時該当ファイルのみ更新

**CommonJSとの違い**:
- CommonJS: Node.js専用、同期読み込み、`require()`/`module.exports`
- ネイティブESM: ブラウザ標準、非同期読み込み、`import`/`export`

## 💡 なぜ重要か
従来の「開発時バンドル」を不要にし、ファイル変更時の即座反映（<50ms）を実現。Viteなどモダンツールの高速性の根幹技術として、フロントエンド開発体験を革命的に改善

## つながり
← [[JavaScriptビルドツール進化史]]：ネイティブESMが可能にした第4世代ツールの背景
→ [[Vite]]：ネイティブESMを基盤とするモダンツール
↔ [[ビルドツール進化の周期的パターン]]：開発時間短縮の技術進化例
→ [[Viteが開発時esbuild、本番時Rollupを使う理由]]：ネイティブESMの実践的活用

## 📚 参照元
> [ES modules: A cartoon deep-dive - Mozilla Hacks](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
> [Using JavaScript modules on the web - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
