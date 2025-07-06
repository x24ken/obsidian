# Zettelkasten Conversion Commands

## 📋 利用可能なコマンド

### 1. `zettelkasten-status`
Feeling Notesの変換状況をチェックし、レポートを表示します。

```bash
./zettelkasten-status
```

**機能:**
- 未変換ファイル（絵文字プレフィックスなし）の一覧表示
- 変換済みファイル（🔍📋💡）の分類表示
- 次のアクションの提案

### 2. `zettelkasten-convert`
未変換ファイルを検出し、Claude Codeでの変換手順を案内します。

```bash
./zettelkasten-convert
```

**機能:**
- 未変換ファイルの自動検出
- 変換作業の手順案内
- Claude Codeコマンドの提案

## 🔄 ワークフロー

1. **現状確認**: `zettelkasten-status` で変換状況をチェック
2. **変換実行**: `zettelkasten-convert` で変換手順を確認
3. **Claude実行**: 提案されたClaude Codeコマンドでファイルを変換
4. **レビュー**: 変換されたファイルを人間がレビュー
5. **移動**: 承認されたファイルを `02 - Literature Notes/` に移動

## 📁 ファイル分類

- **🔍 Concept**: 概念説明、定義、「〜とは」
- **📋 Guide**: 手順説明、ガイド、設定方法
- **💡 Tips**: 短いコツ、効率化、トリック

## 🚀 使用例

```bash
# 1. 現状確認
$ ./zettelkasten-status
📊 Zettelkasten変換状況をチェック中...
✅ 変換済み（レビュー待ち）: 3 個

# 2. 人間によるレビュー後、Literature Notesに移動
$ mv "01 - Feeling Notes/📋ファイル名.md" "02 - Literature Notes/"
```