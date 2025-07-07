**タイプ**: 💡 Tips

## 📝 一行要約
Tailwind CSS v4を使ったUIライブラリをViteで効率的にnpm公開する方法。

## ⚡ 期待できる効果
- ビルド設定の簡素化（Vite一本化）
- CSS自動バンドルによる配布の簡易化
- 名前空間衝突の回避（prefix設定）
- 開発時と同じ環境でのビルド

## 🎯 使用方法

### 必須パッケージインストール
```bash
pnpm add -D @tailwindcss/vite@next vite-plugin-dts
```

### Tailwind設定（名前空間を付ける）
```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  prefix: 'ui-',  // 全クラスに ui- プレフィックス
  darkMode: 'class'
}
```

### package.json エクスポート設定
```json
{
  "exports": {
    ".": {
      "import": "./dist/index.es.js",
      "require": "./dist/index.cjs.js"
    },
    "./styles.css": "./dist/style.css"
  }
}
```

## 📍 適用場面
- React/Vue/Svelteコンポーネントライブラリ
- デザインシステムの公開
- 社内UIライブラリの共有
- Tailwindベースのテーマ配布

## 📊 効果測定
- ビルド時間: 2-5秒（中規模ライブラリ）
- バンドルサイズ: CSS 10-50KB（Tailwind使用量による）
- 利用側の設定: ゼロコンフィグ

## 💡 なぜ重要か
ViteのライブラリモードとTailwind v4の組み合わせにより、CSSを含むUIライブラリの公開が劇的に簡単になった。特にCSS自動抽出機能により、利用者は単にインポートするだけで済む。これにより、デザインシステムの共有と再利用が促進される。

## 🔗 つながり
→ [[JavaScriptバンドラー選択ガイド]], [[Vite]], [[esbuild]]

## 📚 参照元
> [Tailwind CSS v4 Alpha - tailwindcss.com, 2025-01-07]
> [Building Component Libraries with Tailwind - Medium, 2025-01-07]