# AI駆動開発時代の新しいフロントエンド：デザインシステムとMCPが生み出す一貫性

## はじめに

AI駆動開発が急速に普及する中、フロントエンド開発における最大の課題の一つが「一貫性の維持」です。AIが生成するコードは便利ですが、プロジェクト全体でのデザインの統一性や、コンポーネントの再利用性が犠牲になりがちです。

本記事では、**デザインシステムを中心に据え、MCP（Model Context Protocol）を活用することで、AI時代でも一貫性のあるフロントエンド開発を実現する新しいアプローチ**を提案します。

## 課題：AIが生成するコードの「AIぽさ」

### Before: 従来のAI駆動開発

```jsx
// AIが生成した不統一なコード
<button style={{
  backgroundColor: '#3b82f6',  // ハードコードされた色
  padding: '12px 24px',        // 独自のスペーシング
  borderRadius: '8px'          // デザインシステムと異なる
}}>
  Submit
</button>
```

このようなコードには以下の問題があります：
- デザインシステムとの乖離
- スタイルの不統一
- 保守性の低下

## 解決策：デザインシステム中心のMCPサイクル

### 提案するアーキテクチャ

```
Figma (デザインの源泉)
    ↓
[Figma MCP] で情報取得
    ↓
独自UIライブラリー構築
- React コンポーネント (Radix UI + cva)
- Tailwind CSS 設定
- Storybook ドキュメント
    ↓
[独自UIライブラリー + 独自UI MCP] で配布
    ↓
複数プロダクトへ展開
```

## 実装の流れ

### 1. Figma MCPでデザイン情報を取得

Figmaで定義されたデザインシステムから、カラーパレット、スペーシング、タイポグラフィなどのデザイントークンを自動的に取り込みます。

### 2. UIライブラリーの自動生成

取得したデザイン情報を基に、UIライブラリーを構築します。

#### shadcn/uiアプローチの採用

ここで重要なのは、**shadcn/ui**と同じ技術スタックを採用することです：

- **Radix UI**: ヘッドレスコンポーネント（動作の基盤）
- **Tailwind CSS**: スタイリング
- **cva (class-variance-authority)**: バリアント管理
- **cn (clsx + tailwind-merge)**: クラス名の結合ユーティリティ

**ヘッドレスUI**とは、アクセシビリティやキーボード操作などの「動作」は提供するが、見た目（スタイル）は提供しないUIコンポーネントのことです。Radix UIを使うことで、アクセシビリティが保証された堅牢な基盤の上に、Figmaのデザインシステムに準拠したスタイルを適用できます。

**shadcn/uiの構造を参考にしながら、Figmaのデザインシステムを実装する**ことで、実績のあるアーキテクチャを活用できます。

### 3. Storybookでドキュメント化

生成されたコンポーネントをStorybookで可視化し、開発者とデザイナーが同じビジョンを共有できるようにします。

### 4. npmパッケージとして社内配布

**2つのnpmパッケージをGitHub Packagesにプライベート公開**：

1. **@company/ui-library**: 開発者が直接インポートして使用
2. **@company/ui-mcp**: AIがコンポーネントを理解するためのMCPサーバー

```bash
# .npmrcの設定（GitHub PAT使用）
@company:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

# UIライブラリーのインストール
npm install @company/ui-library

# MCP サーバーの起動
npx @company/ui-mcp
```

## 結果：AIも人も使える統一されたUI

### After: デザインシステム中心の開発

```jsx
// MCPを通じて生成された統一感のあるコード
import { Button } from '@company/ui-library';

<Button variant="primary" size="medium">
  Submit
</Button>
```

このButtonコンポーネントは：
- Radix UIのボタンプリミティブを使用（アクセシビリティ保証）
- cvaでバリアント管理（一貫性のあるAPI）
- Figmaから取得したデザイントークンでスタイリング（デザイン準拠）

## 導入のメリット

### 1. デザインの一貫性
Figmaのデザインシステムが唯一の真実の源（Single Source of Truth）となり、AIが生成するコードもデザインシステムに準拠します。

### 2. 効率的な開発
デザイン変更が自動的にコードに反映され、コンポーネントの再利用性が向上します。

### 3. AIとの親和性
MCPを通じてAIがデザインシステムを理解し、「AIぽさ」のない、プロフェッショナルな仕上がりを実現します。

### 4. スケーラビリティ
複数プロダクトで同じデザインシステムを使用でき、チーム全体での統一感を保てます。

## まとめ

「**Figma → MCP → UIライブラリー → MCP → プロダクト**」というサイクルにより、AI時代でも人間中心のデザインを維持しながら、開発効率を最大化できます。

shadcn/uiの実績ある構成を採用し、Figmaのデザインシステムと組み合わせることで、AIも人間も使いやすい、一貫性のあるフロントエンド開発環境を実現できます。

---

## 参考リンク

- [Anthropic MCP Documentation](https://modelcontextprotocol.io/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Figma API Documentation](https://www.figma.com/developers/api)