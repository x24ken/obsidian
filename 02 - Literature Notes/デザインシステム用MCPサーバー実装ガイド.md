#mcp

## アーキテクチャ概要

```
your-design-system/
├── src/
│   ├── components/     # 既存：Reactコンポーネント
│   ├── tokens/         # 既存：Tailwind CSS v4設定
│   └── ...
├── design-system-mcp/  # 新規：MCPサーバー（推奨構成）
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── package.json        # ルートのworkspace設定
└── ...

your-app-project/       # 別レポジトリ：実装先プロジェクト
```

## MCPサーバーの主要機能

### 1. コンポーネント検索・取得

- デザインシステムからコンポーネントを検索
- コンポーネントのReactコード取得
- Tailwind CSS v4クラス情報の提供

### 2. デザイントークン管理

- Tailwind CSS v4のCSS変数
- カラーパレット、スペーシング、タイポグラフィ
- テーマ設定の自動適用

### 3. 自動インポート・実装

- 必要なコンポーネントの自動インポート
- 依存関係の解決
- TypeScript型定義の提供

## 実装アプローチ

### 技術スタック

- **Node.js + TypeScript** - MCPサーバー実装
- **FastMCP Framework** - 構造化されたMCP開発
- **GitHub API** - デザインシステムレポジトリとの連携

### ディレクトリ構造

```
design-system-mcp/
├── src/
│   ├── server.ts          # MCPサーバーのメイン
│   ├── tools/
│   │   ├── component-search.ts
│   │   ├── component-fetch.ts
│   │   └── design-tokens.ts
│   ├── resources/
│   │   ├── component-catalog.ts
│   │   └── style-guide.ts
│   └── utils/
│       ├── github-client.ts
│       └── tailwind-parser.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 主要ツール実装例

### 1. コンポーネント検索ツール

```typescript
{
  name: "search_components",
  description: "デザインシステムからコンポーネントを検索",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string" },
      category: { type: "string", enum: ["button", "input", "layout"] },
      variant: { type: "string" }
    }
  }
}
```

### 2. コンポーネント取得ツール

```typescript
{
  name: "get_component_code",
  description: "コンポーネントのReactコードを取得",
  inputSchema: {
    type: "object",
    properties: {
      componentName: { type: "string" },
      includeStyles: { type: "boolean" },
      includeDependencies: { type: "boolean" }
    }
  }
}
```

### 3. デザイントークン取得ツール

```typescript
{
  name: "get_design_tokens",
  description: "Tailwind CSS v4のデザイントークンを取得",
  inputSchema: {
    type: "object", 
    properties: {
      category: { type: "string", enum: ["colors", "spacing", "typography"] },
      format: { type: "string", enum: ["css", "js", "json"] }
    }
  }
}
```

## Tailwind CSS v4 統合

### CSS変数の活用

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #3b82f6;
  --color-brand-secondary: #10b981;
  --spacing-component: 1rem;
}
```

### 動的クラス生成

- `color-mix()` 関数対応
- 論理プロパティサポート
- カスケードレイヤー活用

## デザインシステムとの連携方法

### 推奨: ローカルファイルシステム連携

```typescript
// design-system-mcp/src/utils/component-reader.ts
import fs from 'fs/promises';
import path from 'path';

export class ComponentReader {
  private readonly componentsPath: string;
  
  constructor() {
    // 相対パスでデザインシステムのsrcディレクトリを参照
    this.componentsPath = path.resolve(__dirname, '../../../src/components');
  }
  
  async getComponent(componentName: string): Promise<string> {
    const componentPath = path.join(
      this.componentsPath, 
      componentName, 
      `${componentName}.tsx`
    );
    return await fs.readFile(componentPath, 'utf-8');
  }
  
  async listComponents(): Promise<string[]> {
    const dirs = await fs.readdir(this.componentsPath, { withFileTypes: true });
    return dirs
      .filter(dir => dir.isDirectory())
      .map(dir => dir.name);
  }
}
```

### デザイントークン読み取り

```typescript
// design-system-mcp/src/utils/token-reader.ts
export class TokenReader {
  private readonly tokensPath: string;
  
  constructor() {
    this.tokensPath = path.resolve(__dirname, '../../../src/tokens');
  }
  
  async getTailwindConfig(): Promise<any> {
    const configPath = path.join(this.tokensPath, 'tailwind.css');
    const cssContent = await fs.readFile(configPath, 'utf-8');
    return this.parseTailwindCSS(cssContent);
  }
}
```

## セットアップ手順

### 1. デザインシステム内にMCPサーバー作成

```bash
cd your-design-system
mkdir design-system-mcp
cd design-system-mcp
npm init -y
npm install @modelcontextprotocol/sdk typescript @types/node
```

### 2. ルートpackage.jsonでworkspace設定

```json
// your-design-system/package.json
{
  "name": "your-design-system",
  "private": true,
  "workspaces": [
    ".",
    "design-system-mcp"
  ],
  "scripts": {
    "mcp:build": "cd design-system-mcp && npm run build",
    "mcp:start": "cd design-system-mcp && npm start"
  }
}
```

### 3. MCPサーバー設定

```json
// design-system-mcp/package.json
{
  "name": "design-system-mcp",
  "main": "dist/server.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js",
    "dev": "tsx watch src/server.ts"
  }
}
```

### 3. クライアント側設定（Claude Desktop等）

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "design-system": {
      "command": "node",
      "args": ["/path/to/design-system-mcp/dist/server.js"],
      "env": {
        "GITHUB_TOKEN": "your_token_here"
      }
    }
  }
}
```

## 使用例

### AIチャットでの利用

```
「ログインフォームを作りたいです。
デザインシステムのInputコンポーネントとButtonコンポーネントを使用してください」

→ MCPサーバーが自動的に：
1. Input、Buttonコンポーネントを検索
2. 最新のコードを取得
3. Tailwind CSS v4のスタイルを適用
4. 完全な実装コードを生成
```

## この構成の具体的メリット

### 🔄 開発ワークフロー

```bash
# コンポーネント変更 → MCPサーバー更新を一つのPRで
git checkout -b feature/add-new-button
# 1. Button コンポーネントを追加/修正
# 2. MCP サーバーのメタデータも同時更新
# 3. 一つのPRでレビュー・マージ
```

### ⚡ パフォーマンス向上

- **GitHub API制限なし** - ローカルファイル読み取り
- **ネットワーク遅延なし** - 同一ファイルシステム
- **リアルタイム同期** - ファイル変更即座に反映

### 🛡️ バージョン整合性

- デザインシステムとMCPサーバーが**常に同じコミット**
- **breaking changes**の同期実装が容易
- リリース時の**整合性保証**

### 📁 ファイルアクセス例

```typescript
// 同一レポジトリ内なので相対パスで直接アクセス
const buttonComponent = await fs.readFile(
  '../src/components/Button/Button.tsx'
);
const tailwindTokens = await fs.readFile(
  '../src/tokens/colors.css'
);
```

## 参考実装

既存のMCPサーバー実装を参考にできます：

- `@agentience/react-design-systems-mcp` - AWS Cloudscape対応
- Figma MCP Server - デザイン→コード変換
- use-mcp React library - クライアント側実装

このアプローチにより、デザインシステムの一貫性を保ちながら、AIを活用した効率的な開発ワークフローを実現できます。