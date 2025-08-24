# Zettelkastenコマンドツール使い方ガイド

## 概要
Zettelkastenノートの品質管理を自動化する2つのコマンドツールです。
ノート間のつながり（リンク）の健全性をチェックし、改善点を提案します。

## コマンド一覧

### 1. `zettelkasten-status` - 健全性ダッシュボード

Zettelkastenの全体的な健全性を素早く確認できるダッシュボードです。

#### 基本的な使い方
```bash
# ダッシュボードを表示
./claude/commands/zettelkasten-status

# または（パスを通している場合）
zettelkasten-status
```

#### オプション
```bash
# JSON形式で出力（他のツールと連携する場合）
zettelkasten-status --json

# 別のVaultを指定
zettelkasten-status --vault /path/to/vault
```

#### 表示される情報
- **Health Score**: 全体的な健全性スコア（0-100%）
- **Note Distribution**: 各フォルダのノート数
- **Link Health**: リンクの健全性統計
  - ✅ Healthy (2-5 links): 理想的なリンク数
  - ⚠️ Orphaned (0-1 link): リンク不足
  - ❌ Excessive (6+ links): リンク過多
- **Link Distribution**: リンク数の分布グラフ
- **Note Types**: ノートタイプの分布
- **Recently Modified**: 最近更新されたノート
- **Recommended Actions**: 推奨される改善アクション

### 2. `zettelkasten-review` - 詳細な品質レビュー

各ノートの問題点を詳細に分析し、具体的な改善提案を提供します。

#### 基本的な使い方
```bash
# 全ノートの概要レポート
./claude/commands/zettelkasten-review

# 詳細な問題点と改善提案を表示
./claude/commands/zettelkasten-review --verbose
./claude/commands/zettelkasten-review -v  # 短縮形
```

#### オプション
```bash
# 特定数のファイルのみ分析（テスト用）
zettelkasten-review --limit 20

# 詳細モードで20ファイルのみ分析
zettelkasten-review --limit 20 --verbose

# 別のVaultを指定
zettelkasten-review --vault /path/to/vault --verbose
```

#### 検出される問題
1. **孤立ノート**: リンクが0-1個しかないノート
2. **過剰リンク**: 6個以上のリンクを持つノート
3. **カテゴリ的リンク**: 「JavaScript」「ツール」など抽象的なリンク
4. **曖昧な説明**: リンクの関係性が不明確
5. **存在しないノート**: リンク先のファイルが存在しない

#### 出力例
```
📝 要改善ノート詳細

  esbuild.md
    タイプ: 🔍 Concept
    リンク数: 7
    ❌ 過剰リンク（7個のリンク）
    ⚠️ カテゴリ的リンク: JavaScriptバンドラー
    💡 最も重要な2-5個に絞り込み
    💡 より具体的な技術的・論理的関係に置き換え
```

## 使用シナリオ

### 毎日の確認（1分）
```bash
# 健全性スコアをチェック
zettelkasten-status
```

### 週次レビュー（10-15分）
```bash
# 1. 全体の健全性を確認
zettelkasten-status

# 2. 問題のあるノートを詳しく確認
zettelkasten-review --verbose

# 3. 手動で修正後、再チェック
zettelkasten-status
```

### 大規模な整理（30分以上）
```bash
# 1. 詳細な分析レポートを生成
zettelkasten-review --verbose > review_report.txt

# 2. レポートを見ながら系統的に修正

# 3. 修正後の健全性を確認
zettelkasten-status
```

## Zettelkastenリンクの品質基準

### 理想的なリンク数: 2-5個
- **最小2個**: 孤立したノートは死んだノート
- **最大5個**: 多すぎると意味が薄まる

### リンクを作る4つの基準
1. **継続（Continuation）**: アイデアの拡張・修正・例示
2. **対比（Contrast）**: 異なる視点や対立する考え
3. **橋渡し（Bridge）**: 通常出会わない文脈をつなぐ
4. **変容（Transformation）**: 組み合わせで新しい洞察を生む

### 良いリンクの例
```markdown
← [[AST（抽象構文木）解析]]：単一パス処理による超高速化の技術基盤
↔ [[Rollup]]：速度vs最適化品質のトレードオフ関係
→ [[Vite]]：開発環境での事前バンドルという革新的活用
```

### 避けるべきリンク
- 単なる分類（`[[JavaScript]]`のようなカテゴリ）
- 関係性を説明できないリンク
- 完全性のためだけの網羅的リンク

## トラブルシューティング

### コマンドが見つからない場合
```bash
# フルパスで実行
/Users/x24ken/obsidian/.claude/commands/zettelkasten-status

# エイリアスを設定（.zshrcや.bashrcに追加）
alias zk-status="/Users/x24ken/obsidian/.claude/commands/zettelkasten-status"
alias zk-review="/Users/x24ken/obsidian/.claude/commands/zettelkasten-review"
```

### 権限エラーの場合
```bash
# 実行権限を付与
chmod +x /Users/x24ken/obsidian/.claude/commands/zettelkasten-*
```

### Python3が見つからない場合
```bash
# Python3のインストール確認
python3 --version

# 必要に応じてインストール
brew install python3
```

## 今後の機能追加予定

- [ ] `--fix`オプションによる自動修正
- [ ] 双方向リンクの整合性チェック
- [ ] 時系列での健全性推移グラフ
- [ ] Obsidian Graph Viewとの連携
- [ ] カスタムルールの設定機能

## 関連ファイル

- **コマンド本体**: `.claude/commands/zettelkasten-status`, `.claude/commands/zettelkasten-review`
- **設定ファイル**: `CLAUDE.md`（Zettelkastenルール定義）
- **テンプレート**: `99 - Templates/超包括的Zettelkastenプロンプト.md`

## お問い合わせ

問題や改善要望がある場合は、Claude Codeで以下のように依頼してください：

```
zettelkasten-reviewコマンドに〇〇の機能を追加して
```

---

*Last updated: 2025-08-24*