---
tags: [ツール/Obsidian, 同期/Git, 設定管理]
created: 2025-08-23
type: 📋Guide
---

# Obsidian Gitプラグインによる設定同期の仕組み

## 概要
Obsidian Gitプラグインを使用したvaultと設定の同期方法についてのガイド。現在のvaultは`https://github.com/x24ken/obsidian.git`にバックアップされており、5分間隔での自動コミット・プルが設定されている。

## 現在の設定状況

### 自動同期設定
- **自動保存間隔**: 5分
- **自動プル間隔**: 5分  
- **プッシュ前にプル**: 有効
- **コミットメッセージ**: `vault backup: {{date}}`
- **日付フォーマット**: `YYYY-MM-DD HH:mm:ss`

### Gitリポジトリ
- **リモート**: `https://github.com/x24ken/obsidian.git`
- **ブランチ**: `main`
- **ユーザー**: x24ken

## .obsidianフォルダの同期について

### 同期される設定ファイル

現在の`.gitignore`設定により、`.obsidian/`フォルダ全体が**同期対象外**となっている。これは以下を意味する：

#### 同期されないもの
- プラグイン設定（`plugins/*/data.json`）
- テーマ設定（`appearance.json`）
- ホットキー設定（`hotkeys.json`）
- コアプラグイン設定（`core-plugins.json`）
- ワークスペース（`workspace.json`）

#### 同期されるもの
- ノートファイル（`.md`）
- 画像（`80 - Image/`）
- テンプレート（`99 - Templates/`）
- プロジェクト設定（`CLAUDE.md`）

## 複数デバイス間での設定同期戦略

### 戦略1: 完全同期（推奨）
`.gitignore`を修正して設定も同期する：
```gitignore
.mcp.json
.claude/
# ワークスペースとキャッシュのみ除外
.obsidian/workspace*.json
.obsidian/cache/
```

### 戦略2: 選択的同期
プラグイン設定のみ同期：
```gitignore
.obsidian/*
!.obsidian/plugins/
.obsidian/plugins/*/*
!.obsidian/plugins/*/data.json
```

### 戦略3: 現状維持（設定を同期しない）
- 各デバイスで個別に設定
- ノートのみ同期
- デバイス固有の設定を維持

## デバイス別設定

### デスクトップ
- フル機能のGit統合
- SSH/HTTPSによる認証
- 自動バックアップのメインデバイス

### モバイル
- isomorphic-git使用（制限あり）
- SSHキー非対応
- 大規模リポジトリでメモリ制限
- 代替案：Obsidian SyncやWorking Copy使用

## コンフリクト回避のベストプラクティス

1. **ワークスペースファイルを除外**
   - `.obsidian/workspace*.json`を`.gitignore`に追加
   - デバイス間のペイン配置の違いによるコンフリクトを防ぐ

2. **適切な自動コミット間隔**
   - 5-10分間隔を推奨
   - "Pull before push"を有効化

3. **他の同期サービスとの競合回避**
   - Obsidian Sync使用時は`.git`フォルダを除外
   - 複数の同期サービスを同時使用しない

4. **デバイス固有の無効化**
   - バックアップ不要なデバイスでは「このデバイスで無効化」を使用

## 設定ファイルの場所

```
.obsidian/
├── plugins/
│   └── obsidian-git/
│       └── data.json  # Obsidian Git設定
├── app.json           # アプリ基本設定
├── appearance.json    # 外観設定
├── core-plugins.json  # コアプラグイン
├── community-plugins.json # コミュニティプラグイン一覧
└── workspace.json     # ワークスペース（デバイス固有）
```

## トラブルシューティング

### 設定が同期されない
1. `.gitignore`を確認
2. `git status`で除外ファイルを確認
3. 必要に応じて`.gitignore`を修正

### モバイルで同期できない
- リポジトリサイズを確認（100MB以下推奨）
- HTTPS認証を使用（SSHは非対応）
- Working Copyアプリを代替として検討

### コンフリクトが頻発する
- `workspace.json`を`.gitignore`に追加
- 自動コミット間隔を調整
- "Pull before push"を有効化

## 関連ノート

⬅️ 前提・背景：
- （現在関連するノートはありません）

➡️ 発展・結果：
- （現在関連するノートはありません）

🔀 別の視点：
- （現在関連するノートはありません）

🎯 実践例：
- （現在関連するノートはありません）

## 参考資料

> [Obsidian Git Plugin Documentation - GitHub](https://github.com/Vinzent03/obsidian-git)
> [Tips and Tricks - Obsidian Git](https://github.com/Vinzent03/obsidian-git/blob/master/docs/Tips-and-Tricks.md)
> [Sync Obsidian Plugin Data via Git - Blog](https://blog.muya.co.ke/sync-obsidian-plugin-data-via-git/)