# Figma Code Connect

## 概要
Code Connectは、Figmaのデザインコンポーネントと実際のコード実装を直接連携させる開発者向け機能。Dev Mode上で自動生成されるCSSの代わりに、チームが用意した本番用コードスニペットを表示・コピーできるようになる。

## 主な特徴
- **対象プラン**: Organization/Enterpriseプラン（Full/Dev seat必須）
- **目的**: デザインシステムのFigmaコンポーネントと実際のコード実装の橋渡し
- **メリット**: エンジニアが正確な実装コードをDev Modeから直接取得可能

## サポートフレームワーク（2024年時点）

### Web
- React / React Native
- Vanilla HTML
- Web Components
- Angular
- Vue
- Storybook（Reactと統合可能）

### モバイル
- **iOS**: SwiftUI
- **Android**: Jetpack Compose

## セットアップフロー

### 1. 準備
- 対象コンポーネントとフレームワークの選定
- Code Connectパッケージのインストール

### 2. CLIインストール例（npm）
```bash
npm install --global @figma/code-connect@latest
```

### 3. マッピング作成
```bash
# ウィザードでマッピングファイル生成
npx figma connect --token=$FIGMA_TOKEN

# 公開
npx figma connect publish --token=$FIGMA_TOKEN
```

## マッピングファイルの構造（React例）

```tsx
import figma from '@figma/code-connect'
import { Button } from '../ui/Button'

figma.connect(Button,
  'https://www.figma.com/design/…?node-id=65:5',
  {
    props: {
      label: figma.string('Label'),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Neutral: 'neutral'
      }),
      icon: figma.instance('Icon'),
    },
    example: ({label, variant, icon}) =>
      <Button variant={variant} icon={icon}>
        {label}
      </Button>
  }
)
```

### ヘルパータイプ
- `figma.string()`: 文字列プロパティ
- `figma.boolean()`: ブール値
- `figma.enum()`: 列挙型
- `figma.instance()`: コンポーネントインスタンス

## ファイル管理

### 配置場所
- デフォルト: コンポーネントと同じディレクトリ
- 推奨: `src/figma/`などの専用ディレクトリ
- 命名規則: `component-name.figma.tsx`

### 公開/非公開
```bash
# 公開
npx figma connect publish --token=TOKEN

# 特定コンポーネントの非公開
npx figma connect unpublish --node=<node-url>

# 全削除
npx figma connect unpublish
```

## Storybook統合（React限定）

別途`.figma.tsx`ファイルを作成せず、Storybook内で直接定義可能：

```tsx
export default {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://…',
      props: { 
        label: figma.string('Text Content') 
      },
      examples: [ButtonExample],
    },
  },
}
```

## 開発者体験

### Figma側
- Dev Modeでマッピングされたコンポーネントを選択
- チーム承認済みのコードスニペットが表示
- ワンクリックでコピー可能

### VS Code統合
- "Figma for VS Code"拡張機能でCode Connect対応
- コードからデザインへのジャンプ
- インラインでのスニペット取得

## ワークフロー例

1. デザインシステムリポジトリを最新化
2. CLIウィザードでマッピング作成
3. `.figma.*`ファイルを調整・コミット
4. CI/CDまたは手動でFigmaへ公開
5. 開発者がDev Mode/VS Codeから正確なコードを取得

## プライバシー・セキュリティ

### アップロードされる情報
- コンポーネントファイルパス
- リポジトリURL
- マッピングファイル（`.figma.*`）

### アップロードされない情報
- 実装コード本体
- AIトレーニングへの使用なし

## メリット
- デザインと実装の乖離を防止
- バリアント/プロパティの使用法が明確化
- デザインシステムの一貫性向上
- 開発効率の向上