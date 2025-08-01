**タイプ**: 🔍 Concept

## 📝 一行要約
JavaScriptバンドラーは、複数のJavaScriptファイルや依存関係を1つ（または少数）のファイルにまとめるビルドツール。

## 🎯 核心的定義
バンドラーは、モジュール化された現代のJavaScriptコードを、ブラウザが理解できる形式に変換・結合するツール。依存関係の解決、コード最適化、アセット処理を一括で行い、Webアプリケーションの配信を効率化する。

## 🌟 主な構成要素
- **依存関係解決**: import/exportの追跡と結合
- **トランスパイル**: 最新JS構文を古いブラウザ対応に変換
- **最適化**: コード圧縮、不要コード削除（Tree-shaking）
- **アセット処理**: CSS、画像、フォントなどの統合
- **開発サーバー**: ローカル開発環境の提供（esbuild、Parcel、Viteは内蔵、webpack/Rollupは別パッケージ）

## 🔄 関連概念との違い
**トランスパイラ（Babel等）との違い**:
- トランスパイラ: 構文変換のみ
- バンドラー: ファイル結合＋最適化＋配信準備

**タスクランナー（Gulp等）との違い**:
- タスクランナー: 汎用的なビルド自動化
- バンドラー: JavaScript中心の専門ツール

## 💡 なぜ重要か
モダンJavaScript開発では、数百〜数千のモジュールを使用することが一般的。バンドラーなしでは、ブラウザが個別にファイルを読み込む必要があり、パフォーマンスが著しく低下する。バンドラーはこの問題を解決し、効率的なWebアプリケーション配信を可能にする基盤技術。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[ネイティブESModules]] - バンドラーが解決するモジュール化の問題
→ [[JavaScriptビルドツール進化史]] - バンドラー技術の発展経緯

### ➡️ 発展・結果
→ [[esbuild]] - Go製高速バンドラーの代表例
→ [[Vite]] - ネイティブESMを活用したモダンバンドラー
→ [[Rollup]] - ES Modulesに最適化されたバンドラー
→ [[tsup]] - esbuildベースのTypeScript特化バンドラー

### 🔀 別の視点
→ [[JavaScriptバンドラー定義の曖昧性問題]] - バンドラー概念の境界に関する課題
→ [[ビルドツール進化の周期的パターン]] - バンドラー技術の変遷法則

### 🎯 実践例
→ [[JavaScriptパッケージ公開ツール比較分析]] - 具体的なツール選択指針
→ [[Typescriptビルドツール比較分析]] - TypeScript環境での選択基準
→ [[TypeScript二段階ビルドパターン]] - バンドラーを活用した実装パターン