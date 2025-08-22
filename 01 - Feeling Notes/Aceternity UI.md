---
タイプ: 🔍 Concept
分野: UI/UX, フロントエンド開発
作成日: 2025-08-22
更新日: 2025-08-22
---

# Aceternity UI

## 中心概念

Aceternity UIは、**視覚的インパクトとアニメーションに特化したReact/Next.jsコンポーネントライブラリ**である。Manu Aroraによって開発され、「コピー&ペースト&カスタマイズ」の哲学を採用している。

主な特徴：
- **Tailwind CSS + Framer Motion**の技術スタック
- **100以上の無料コンポーネント**と有料のPro版
- **マーケティングサイト向け**の派手なアニメーション効果
- **shadcn/uiと同じCLIワークフロー**を採用

## 詳細説明

### 技術スタック

```bash
# インストール方法
npx shadcn@latest add https://ui.aceternity.com/registry/spotlight.json
```

必要な依存関係：
- React 18 / Next.js 14以降
- Tailwind CSS 3/4
- TypeScript
- Framer Motion（アニメーション用）

### コンポーネントカテゴリ

1. **背景エフェクト**
   - Aurora Background
   - Beams with Collision
   - Gradient Animation
   - Vortex Background
   - Wavy Background

2. **カード系**
   - 3D Card
   - Card Spotlight
   - Wobble Card
   - Draggable Card

3. **ヒーロー&レイアウト**
   - Hero Parallax
   - Bento Grid
   - MacBook Scroll Effect

4. **UIウィジェット**
   - Animated Modal
   - Navbar Menu
   - File Upload
   - 各種ローダー

### 価格体系

- **無料版（MIT）**: ui.aceternity.comで公開されている全コンポーネント
- **Pro版**: 
  - 70以上の追加コンポーネントパック
  - カスタムコンポーネントサービス: $4,995/月
  - ページ制作サービス: $6,995/月
  - マルチページサイト: $12,499〜

## 具体例

```jsx
// 3Dカードの実装例
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card">
        <CardItem translateZ="50" className="text-xl font-bold">
          Make things float in air
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img src="/image.png" className="h-60 w-full object-cover" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
```

## 関連ノート

### ⬅️ 前提・背景
- [[Tailwind CSS]]
- [[Framer Motion]]

### ➡️ 発展・結果
（現在関連するノートはありません）

### 🔀 別の視点
（現在関連するノートはありません）

### 🎯 実践例
（現在関連するノートはありません）

## 参考文献

> [Aceternity UI公式サイト](https://ui.aceternity.com)
> [Aceternity UI Components一覧](https://aceternity-ui.vercel.app/components)
> [Aceternity UI価格ページ](https://aceternity-ui.vercel.app/pricing)
> [All Utility CSS - Aceternity UI詳細レビュー](https://allutilitycss.com/components/aceternity-ui/)