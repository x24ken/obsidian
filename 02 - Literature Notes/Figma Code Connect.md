**タイプ**: 🔍 Concept

## 📝 一行要約
Figma Code ConnectはFigmaのDev Mode内でデザインコンポーネントと実際のコード実装を直接連携させる「アダプター層」で、開発者に本番対応コードスニペットを提供する

## 🎯 核心的定義
Code Connectは、デザインシステムのコードがFigmaコンポーネントと「並列表示」される開発者向け機能。自動生成されるCSS/Swift/Androidスニペットの代わりに、エンジニアが公開した実際のプロダクションレディなコード例とAPIを表示する。

## 🌟 主な構成要素
- **CLIパーサー**: React/React Native、HTML、SwiftUI、Jetpack Composeに対応
- **プロパティマッピングAPI**: `figma.string()`, `figma.enum()`, `figma.boolean()`でデザイン-コード間の橋渡し
- **Template API**: 動的スニペット生成とプログラマブルな文書構築
- **Storybook統合**: 生きたドキュメントとCode Connectの同期機能
- **カスタムパーサー**: 任意の言語/フレームワークへの拡張対応

## 🔄 関連概念との違い
従来のDev Modeが「生成コード」を表示するのに対し、Code Connectは「本物のコード」を表示。Storybookが別サイトでドキュメントを管理するのに対し、Code Connectはデザインファイル内で直接コードを確認可能。競合ツールと異なり、複数プラットフォーム（Web/iOS/Android）の実装を同一デザインから参照できる。

## 💡 なぜ重要か
Code Connectは「デザイン意図と実装の最後の1マイル」を解決し、Figmaを真の「単一情報源」に変える。開発者がコンテキストスイッチングなしで正確なAPIを取得できることで、デザインシステムの採用促進とコード品質向上を実現する。特にクロスプラットフォーム開発での一貫性確保に革新をもたらす。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[Figma]] - プラットフォーム基盤
→ [[Language Server Protocol（LSP）]] - 開発ツール統合の概念

### ➡️ 発展・結果
→ [[TypeScript二段階ビルドパターン]] - 実装における型安全性
→ [[JavaScriptバンドラー]] - ビルド環境との統合

### 🎯 実践例
→ [[MCP]] - 開発ツール間連携の類似事例

## 📚 参照元
> [Figma Code Connect公式ドキュメント](https://figma.com/code-connect-docs/)