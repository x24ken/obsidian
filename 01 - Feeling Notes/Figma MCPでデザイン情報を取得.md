# Figma MCPでデザイン情報を取得

**タイプ**: 🧩 Pattern  
**作成日時**: 2025-09-02  
**更新日時**: 2025-09-02  

## 概要

Figma MCP（Model Context Protocol）は、Figmaのデザイン情報をAI開発ツールに直接提供するプロトコルです。デザインシステムのトークン、コンポーネント、レイアウト情報を構造化されたデータとして取得し、AI駆動開発においてもデザインの一貫性を保つことを可能にします。

## 詳細内容

### MCPの基本概念

MCPは、AIシステムがソフトウェアアプリケーションに接続するためのオープンソース標準です。「AIのUSB-Cコネクタ」とも呼ばれ、LLMに対して構造化されたコンテキストを提供します。

### Figma Dev Mode MCPサーバーの仕組み

```
[Figmaデザインファイル]
        ↓
[MCPサーバー (localhost:3845)]
        ↓
[MCPクライアント (IDE内)]
        ↓
[AI開発ツール (Cursor/Claude Code等)]
```

サーバーは以下の3つの主要コンポーネントで構成されています：
- **MCPホスト**: コーディング環境（IDE）
- **MCPクライアント**: 接続を維持し、通信を管理
- **MCPサーバー**: Figma APIとのインターフェース

### 提供される主要ツール

#### 1. get_code
選択したFigmaフレームからReact + Tailwindの構造化コードを生成します。このコードは出発点となり、AIアシスタントが任意のフレームワークやスタイルに変換できます。

```javascript
// MCPが提供する構造化データの例
{
  component: "Button",
  props: {
    variant: "primary",
    size: "medium"
  },
  styles: {
    backgroundColor: "var(--color-primary)",
    padding: "var(--spacing-md)"
  }
}
```

#### 2. get_variable_defs
選択範囲で使用されている変数とスタイル（カラー、スペーシング、タイポグラフィなど）を抽出します。これにより、生成されるコードで直接デザイントークンを参照できます。

```javascript
// 抽出される変数定義の例
{
  colors: {
    primary: "#3b82f6",
    secondary: "#10b981"
  },
  spacing: {
    sm: "8px",
    md: "16px",
    lg: "24px"
  },
  typography: {
    heading: {
      fontSize: "24px",
      fontWeight: "700"
    }
  }
}
```

#### 3. get_code_connect_map
FigmaのノードをコードベースのコンポーネントにマッピングするCode Connect情報を取得します。これにより、既存のコンポーネント実装との一貫性を保てます。

#### 4. get_image
デザイン要素のスクリーンショットを取得し、視覚的なコンテキストを提供します。

### セットアップ手順

#### 1. Figmaデスクトップアプリの設定
```
1. Figmaデスクトップアプリを最新版に更新
2. Figmaメニュー → Preferences を開く
3. "Enable local MCP Server" をオンにする
4. サーバーが http://127.0.0.1:3845/sse で起動
```

#### 2. IDE統合（Cursorの例）
```json
{
  "mcpServers": {
    "figma": {
      "command": "figma",
      "args": ["mcp"],
      "env": {}
    }
  }
}
```

#### 3. サードパーティ実装（GLips/Figma-Context-MCP）
```json
// MacOS/Linux
{
  "mcpServers": {
    "Framelink Figma MCP": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"]
    }
  }
}
```

### ベストプラクティス

#### デザインファイルの準備
- **コンポーネント化**: 再利用される要素（ボタン、カード、入力欄）はコンポーネント化
- **変数の活用**: スペーシング、カラー、角丸、タイポグラフィに変数を使用
- **セマンティックな命名**: レイヤー名を意味のある名前に（`CardContainer`、`Group 5`ではなく）
- **Auto Layoutの使用**: レスポンシブな意図を伝える

#### 選択範囲の最適化
大きな選択範囲は処理が遅くなったり、エラーの原因になります。代わりに：
- 画面を小さな部分に分割（コンポーネントや論理的なチャンク）
- 個別のコンポーネント単位で生成（Card、Header、Sidebar）
- 段階的にコードを構築

### 実装パターン

#### パターン1: デザインシステム同期
```typescript
// Figmaから取得したトークンをTailwind設定に反映
export const tailwindConfig = {
  theme: {
    extend: {
      colors: getFigmaColors(),      // MCPで取得
      spacing: getFigmaSpacing(),    // MCPで取得
      typography: getFigmaTypography() // MCPで取得
    }
  }
}
```

#### パターン2: コンポーネント生成フロー
```typescript
// 1. Figmaからコンポーネント情報を取得
const figmaComponent = await mcp.getCode(nodeId);

// 2. デザイントークンを取得
const tokens = await mcp.getVariableDefs(nodeId);

// 3. AIにコンポーネント生成を依頼
const prompt = `
  Generate a React component based on:
  - Figma structure: ${figmaComponent}
  - Design tokens: ${tokens}
  - Use our existing component library patterns
`;
```

#### パターン3: Code Connect活用
```typescript
// Figmaノードと既存コンポーネントのマッピング
const codeConnectMap = await mcp.getCodeConnectMap();

// マッピング情報を使用してコンポーネントを参照
if (codeConnectMap[nodeId]) {
  return `import { ${codeConnectMap[nodeId].name} } from '@company/ui';`;
}
```

## つながり

← [[AI駆動開発時代のデザインシステム中心フロントエンド]]：Figma MCPがデザインシステム統合の核となる技術
↔ [[shadcn UIアーキテクチャパターン]]：Figmaから取得したデザイントークンを適用する実装基盤
→ [[独自UIライブラリMCPサーバー構築]]：Figma MCPで取得した情報を基にMCPサーバーを作成

## メタデータ

### タグ
- #figma
- #mcp
- #design-system
- #ai-development
- #design-to-code

### 参考文献
> [Introducing our Dev Mode MCP server - Figma Blog, 2024](https://www.figma.com/blog/introducing-figmas-dev-mode-mcp-server/)
> [Guide to the Dev Mode MCP Server - Figma Help Center, 2024](https://help.figma.com/hc/en-us/articles/32132100833559)
> [GLips/Figma-Context-MCP - GitHub](https://github.com/GLips/Figma-Context-MCP)
> [Model Context Protocol Documentation - Anthropic](https://modelcontextprotocol.io/)

### 個人的な振り返り
Figma MCPは、デザインとコードの間のギャップを埋める革新的な技術です。特に、AIが生成するコードがデザインシステムから逸脱しがちな問題を、構造化されたコンテキスト提供により解決している点が優れています。実装においては、小さな選択範囲から始めて段階的に拡張していくアプローチが効果的です。