// Tailwind CSS v4用の設定ファイル
const { createTailwindConfig } = require('./index.js');

// デフォルトのTailwind設定をエクスポート
module.exports = createTailwindConfig({
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
});