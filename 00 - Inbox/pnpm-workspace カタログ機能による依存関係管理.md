# pnpm-workspace カタログ機能による依存関係管理

## カタログ機能とは

pnpm v9.5.0から導入された、ワークスペース全体で共通の依存関係バージョンを一元管理する機能。

## 基本設定

### pnpm-workspace.yaml

```yaml
packages:
  - 'packages/*'
  - 'apps/*'

catalog:
  # デフォルトカタログ
  react: ^18.2.0
  typescript: ^5.3.0
  prettier: ^3.2.0
  eslint: ^8.56.0
  
  # 名前付きカタログ
  legacy:
    react: ^17.0.2
    react-dom: ^17.0.2
  
  testing:
    vitest: ^1.2.0
    '@testing-library/react': ^14.1.0
  
  build:
    vite: ^5.0.0
    esbuild: ^0.19.0
```

### package.json での参照

```json
{
  "dependencies": {
    // デフォルトカタログから
    "react": "catalog:",
    
    // 名前付きカタログから
    "vitest": "catalog:testing",
    
    // ワークスペース内参照
    "@myorg/ui": "workspace:*"
  }
}
```

## カタログの使い分け

### デフォルトカタログを使う場合

- **全プロジェクト共通の基本ツール**
  - TypeScript, React, ESLint, Prettier
- **バージョン統一が重要な依存関係**
- **80%以上のパッケージが使用するもの**

### 名前付きカタログを使う場合

1. **レガシー互換性**
   ```yaml
   legacy:
     react: ^17.0.2
     next: ^12.3.4
   ```

2. **用途別ツールセット**
   ```yaml
   testing:
     vitest: ^1.2.0
     playwright: ^1.40.0
   
   mobile:
     react-native: ^0.73.0
     expo: ^50.0.0
   ```

3. **段階的マイグレーション**
   ```yaml
   next-major:
     vue: ^3.4.0
     nuxt: ^3.9.0
   ```

4. **クライアント要件別**
   ```yaml
   client-a:  # IE11対応
     react: ^16.14.0
     core-js: ^3.35.0
   ```

## ベストプラクティス

### 1. ワークスペースプロトコル

```json
{
  "dependencies": {
    "@myorg/shared": "workspace:*",    // 常に最新
    "@myorg/utils": "workspace:^",     // 互換範囲で更新
    "@myorg/core": "workspace:~"       // パッチのみ更新
  }
}
```

### 2. changesets による管理

```bash
# 初期設定
pnpm add -Dw @changesets/cli
pnpm changeset init

# バージョン管理フロー
pnpm changeset        # 変更を記録
pnpm changeset version # バージョン更新
pnpm changeset publish # 公開
```

### 3. 更新コマンド

```bash
# カタログ更新
pnpm catalog update react@^18.3.0

# 全パッケージ更新
pnpm -r update

# ワークスペース内更新
pnpm -r update --workspace

# カタログ一覧
pnpm catalog list
```

## 実践例

### モノレポ構成

```yaml
# pnpm-workspace.yaml
catalog:
  # 基本
  react: ^18.2.0
  typescript: ^5.3.0
  
  # グループ別
  testing:
    vitest: ^1.2.0
    '@testing-library/react': ^14.1.0
  
  build-tools:
    vite: ^5.0.0
    tsup: ^8.0.0
  
  linting:
    eslint: ^8.56.0
    prettier: ^3.2.0
```

### アプリケーション package.json

```json
{
  "name": "@myorg/web-app",
  "dependencies": {
    // カタログから
    "react": "catalog:",
    "typescript": "catalog:",
    
    // 名前付きカタログから
    "vitest": "catalog:testing",
    "vite": "catalog:build-tools",
    
    // ワークスペース参照
    "@myorg/ui": "workspace:*",
    
    // 直接指定（特殊ケース）
    "prisma": "^5.8.0"
  }
}
```

## まとめ

- **デフォルトカタログ**: 共通の基本依存関係（80%のケース）
- **名前付きカタログ**: 特定用途・環境別の依存関係（20%のケース）
- **利点**: バージョン一元管理、メンテナンス性向上、チーム間の一貫性