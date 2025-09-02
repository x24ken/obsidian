# AI駆動開発時代の新しいフロントエンド：デザインシステムとMCPが生み出す一貫性

## はじめに

AI駆動開発が急速に普及する中、フロントエンド開発における最大の課題の一つが「一貫性の維持」です。AIが生成するコードは便利ですが、プロジェクト全体でのデザインの統一性や、コンポーネントの再利用性が犠牲になりがちです。

本記事では、**デザインシステムを中心に据え、MCP（Model Context Protocol）を活用することで、AI時代でも一貫性のあるフロントエンド開発を実現する新しいアプローチ**を提案します。


## デザインシステム中心のMCPサイクル

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

### 1. Figma MCPによるデザイン情報の取得

**Figma MCP**を使用することで、Figmaで定義されたデザインシステムから直接情報を取得できます。カラーパレット、スペーシング、タイポグラフィなどのデザイントークンを自動的に取り込み、開発環境に反映させることが可能になります。

### 2. 独自UIライブラリーの自動生成

取得したデザイン情報を基に、プロジェクト専用のUIライブラリーを構築します。

#### ヘッドレスUIとの組み合わせ

ここで重要なのは、**ヘッドレスUI**ライブラリである**Radix UI**を基盤として使用することです。ヘッドレスUIとは、アクセシビリティやキーボード操作などの「動作」は提供するが、見た目（スタイル）は提供しないUIコンポーネントのことです。

実は、この手法は**shadcn/ui**のアプローチそのものです。shadcn/uiは以下の技術スタックで構成されています：

- **Radix UI**: ヘッドレスコンポーネント（動作の基盤）
- **Tailwind CSS**: スタイリング
- **cva (class-variance-authority)**: バリアント管理
- **cn (clsx + tailwind-merge)**: クラス名の結合ユーティリティ

私たちも同じアプローチを採用し、Figmaのデザインシステムをこの構成に落とし込みます。つまり、**shadcn/uiの構造を参考にしながら、独自のデザインシステムを実装する**ということです。

### 3. Storybookでの可視化

生成されたコンポーネントをStorybookで自動ドキュメント化することで、開発者とデザイナーが同じビジョンを共有できます。Figmaの該当コンポーネントへのリンクも含めることで、デザインと実装の対応関係を明確にします。

### 4. 独自UIライブラリー + 独自UI MCPによる配布

作成したUIライブラリーは、**2つのnpmパッケージとして社内配布**します：

1. **独自UIライブラリー（@company/ui-library）**: 開発者が直接インポートして使用
2. **独自UI MCP（@company/ui-mcp）**: `npx`で起動し、AIがコンポーネントを理解するためのサーバー

両パッケージは**GitHub Packages**にプライベートパッケージとして公開され、**GitHub Personal Access Token (PAT)**を使用してアクセスします：

```bash
# .npmrcの設定
@company:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

# UIライブラリーのインストール
npm install @company/ui-library

# MCP サーバーの起動
npx @company/ui-mcp
```


## メリット

### 1. デザインの一貫性
- Figmaのデザインシステムが唯一の真実の源（Single Source of Truth）
- AIが生成するコードもデザインシステムに準拠

### 2. 効率的な開発
- デザイン変更が自動的にコードに反映
- コンポーネントの再利用性が向上

### 3. AIとの親和性
- MCPを通じてAIがデザインシステムを理解
- 「AIぽさ」のない、プロフェッショナルな仕上がり

### 4. スケーラビリティ
- 複数プロダクトで同じデザインシステムを使用可能
- チーム全体での統一感

## 導入事例のシナリオ

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

### After: デザインシステム中心の開発

```jsx
// MCPを通じて生成された統一感のあるコード
import { Button } from '@company/ui-library';

<Button variant="primary" size="medium">
  Submit
</Button>
```

このButtonコンポーネントは、内部的にはRadix UIのボタンプリミティブを使用し、cvaでバリアント管理され、Figmaから取得したデザイントークンでスタイリングされています。

## まとめ

AI駆動開発時代においても、デザインシステムを中心に据えることで、以下が実現できます：

1. **一貫性**: Figmaからプロダクトまで一貫したデザイン
2. **効率性**: MCPによる自動化で開発速度向上
3. **品質**: AIぽさのない、プロフェッショナルな仕上がり
4. **保守性**: デザインシステムの変更が自動的に反映

この「**Figma → MCP → UIライブラリー → MCP → プロダクト**」というサイクルにより、AI時代でも人間中心のデザインを維持しながら、開発効率を最大化できます。

---

## 参考リンク

- [Anthropic MCP Documentation](https://modelcontextprotocol.io/)
- [Figma API Documentation](https://www.figma.com/developers/api)
- [Storybook Documentation](https://storybook.js.org/)


---

この記事が、AI時代のフロントエンド開発の新しい方向性を示す一助となれば幸いです。