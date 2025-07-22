# My UI Theme - Tailwind CSS v4

カスタムカラーとユーティリティクラスを含むTailwind CSS v4用のテーマパッケージです。

## インストール

```bash
npm install @myorg/ui-theme
# または
yarn add @myorg/ui-theme
# または
pnpm add @myorg/ui-theme
```

## 使用方法

### 1. global.cssのインポート（推奨）

Tailwind CSS v4では、アプリケーションのメインCSSファイルでglobal.cssをインポートします：

```css
/* app.css または main.css */
@import "@myorg/ui-theme/global.css";

/* 必要に応じて追加のスタイル */
```

### 2. Tailwind設定での使用

既存のTailwind設定を拡張する場合：

```javascript
// tailwind.config.js
const { createTailwindConfig } = require('@myorg/ui-theme');

module.exports = createTailwindConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // 他のコンテンツパス
  ],
  // 追加の設定
});
```

### 3. 提供される設定をそのまま使用

```javascript
// tailwind.config.js
module.exports = require('@myorg/ui-theme/tailwind');
```

## 提供される機能

### カスタムカラー

```html
<!-- プライマリカラー -->
<div class="bg-primary-500 text-white">Primary Color</div>

<!-- ブランドカラー -->
<div class="bg-brand text-white">Brand Color</div>

<!-- セマンティックカラー -->
<div class="bg-success text-white">Success</div>
<div class="bg-warning text-black">Warning</div>
<div class="bg-error text-white">Error</div>
```

### カスタムユーティリティクラス

```html
<!-- グラデーションテキスト -->
<h1 class="text-gradient">Gradient Text</h1>

<!-- フォーカスリング -->
<button class="focus-ring">Click me</button>

<!-- ボタンコンポーネント -->
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-ghost">Ghost Button</button>

<!-- カード -->
<div class="card p-6">
  <h2 class="text-xl font-bold">Card Title</h2>
  <p class="text-muted">Card content</p>
</div>

<!-- バッジ -->
<span class="badge-primary">New</span>
<span class="badge-success">Active</span>

<!-- アラート -->
<div class="alert-info">
  Information message
</div>
<div class="alert-error">
  Error message
</div>
```

### CSS変数によるテーマ切り替え

CSSファイルで直接テーマ変数を使用：

```css
.custom-component {
  background-color: var(--theme-surface);
  color: var(--theme-foreground);
  border: 1px solid var(--theme-border);
}
```

### TypeScriptサポート

```typescript
import { getThemeColors, getThemeVariables } from '@myorg/ui-theme';

// カラーパレットの取得
const colors = getThemeColors();
console.log(colors.primary[500]); // #3b82f6

// テーマ変数の取得
const lightTheme = getThemeVariables('light');
const darkTheme = getThemeVariables('dark');
```

## カスタマイズ

### 色の上書き

```css
/* アプリケーションのCSS */
:root {
  /* プライマリカラーを上書き */
  --color-primary-500: #your-color;
  
  /* テーマ変数を上書き */
  --theme-accent: #your-accent-color;
}
```

### Tailwind設定の拡張

```javascript
const { createTailwindConfig, themeColors } = require('@myorg/ui-theme');

module.exports = createTailwindConfig({
  theme: {
    extend: {
      colors: {
        ...themeColors,
        // カスタムカラーを追加
        custom: {
          light: '#custom-light',
          DEFAULT: '#custom-default',
          dark: '#custom-dark',
        }
      }
    }
  }
});
```

## ダークモード対応

自動的にシステムの設定に基づいてダークモードが適用されます。手動で切り替える場合：

```javascript
// ダークモードを強制
document.documentElement.classList.add('dark');

// ライトモードを強制
document.documentElement.classList.remove('dark');
```

## ライセンス

MIT