# Experimental Zettelkasten Vault

シンプル化したZettelkasten実験用Vault

## フォルダ構造

```
experimental/
├── 00-Inbox/          # キャプチャ用（メモ、アイデア）
├── 01-Zettelkasten/   # 全てのノート（AI生成・人間両方）
├── 02-MOC/            # Map of Content（トピック入口）
├── 90-Templates/      # テンプレート（3種類のみ）
└── 99-Attachments/    # 画像など
```

## テンプレート

| テンプレート | 用途 |
|-------------|------|
| Zettel.md | 主張・アイデア（メイン） |
| Literature.md | ソースの要約 |
| MOC.md | トピック入口 |

## 現行システムとの違い

| 項目 | 現行 | 実験 |
|------|------|------|
| フォルダ数 | 6個 | 5個 |
| テンプレート | 11種類 | 3種類 |
| MOC | なし | あり |
| AI/人間の区別 | フォルダで分離 | プロパティで管理 |

## 必要なプラグイン

- **Dataview**（必須）: MOCの自動リスト
- **Templater**（推奨）: 高度なテンプレート

## Obsidianでの開き方

1. Obsidianを開く
2. 左下の「別のVaultを開く」
3. 「フォルダをVaultとして開く」
4. `/Users/x24ken/obsidian/experimental` を選択
