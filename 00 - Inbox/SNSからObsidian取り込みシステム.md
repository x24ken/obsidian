# SNS・Web記事からObsidianへの取り込みシステム

## 調査結果サマリー

SNSやWeb上の記事を簡単にObsidianでメモとして取り込む方法を調査しました。

## 実装アプローチ（推奨順）

### 1. 公式Obsidian Web Clipper（推奨）
**対象**: 一般的なWeb記事の取り込み
- **メリット**: 公式ツール、ハイライト機能、テンプレート対応
- **対応ブラウザ**: Chrome、Firefox、Safari、Edge
- **機能**: AIによる要約、メタデータ抽出、オフライン対応

### 2. ReadItLaterプラグイン
**対象**: クリップボードベースの簡単取り込み
- **メリット**: URLコピー＆ショートカットで即座に保存
- **対応**: YouTube、Twitter、Web記事、画像ダウンロード
- **デメリット**: ブラウザ拡張機能なし、手動コピー必要

### 3. Readwise Reader連携
**対象**: ハイライト重視の学習・研究用途
- **メリット**: 自動同期、PDF対応、豊富なメタデータ
- **機能**: RSS統合、Kindle/Kobo連携、AI要約
- **料金**: 月額料金あり

## 各プラットフォーム別取り込み方法

### Twitter/X
- **Tweet to Markdownプラグイン**: 個別ツイートをMarkdown化
- **制限**: 現在のX API変更により機能が制限される可能性
- **代替案**: Web Clipper経由でツイートページを保存

### YouTube
- **Web Clipper**: 動画ページの基本情報を保存
- **今後の機能**: 2025年にトランスクリプト取得機能が追加予定
- **現状**: サードパーティツールでトランスクリプト取得後にコピー

### LINE
- **制限**: 2025年3月31日にLINE Notify終了
- **新方式**: Messaging API + Webhook → GitHub連携
- **手動**: チャット履歴エクスポート → テキスト変換

### Web記事
- **Web Clipper**: 最も効率的、Mozilla Readabilityで本文抽出
- **ReadItLater**: クリップボード経由、複数URL一括処理対応
- **Instapaper**: 公式プラグインでハイライト同期

## GitHub連携・同期方法

### デスクトップ
- **Obsidian Gitプラグイン**: 自動コミット・プル
- **設定**: .gitignoreで.obsidian/workspace*を除外
- **メディア**: Git-LFSで大容量ファイル管理

### モバイル同期
- **iOS**: Working Copy + Shortcuts、a-shell利用
- **Android**: GitSync、Termux利用
- **注意**: モバイルでのObsidian Gitプラグインは不安定

### 自動化ワークフロー
- **GitHub Actions**: 定期的なReadwise同期、整理タスク
- **n8n/Make.com**: LINE Webhook → GitHub API連携
- **エラー処理**: デッドレターキューで失敗タスク管理

## 推奨実装プラン

### フェーズ1: 基本セットアップ
1. **Obsidian Web Clipper**をブラウザにインストール
2. **ReadItLaterプラグイン**をObsidianに追加
3. **Obsidian Git**でGitHub同期を設定

### フェーズ2: 自動化強化
1. **Readwise Reader**アカウント作成・連携
2. **Instapaper**プラグインでハイライト同期
3. **GitHub Actions**で定期同期・整理

### フェーズ3: カスタム自動化
1. **LINE Messaging API**でチャット取り込み
2. **n8n**でワークフロー自動化
3. **カスタムテンプレート**でコンテンツ分類

## ファイル整理構造

```
00-Inbox/           # 未整理の取り込みコンテンツ
├── web-clips/      # Web Clipper経由
├── readlater/      # ReadItLater経由
└── social/         # SNS経由

01-Feeling Notes/   # 一次整理済み
02-Literature Notes/ # 最終整理済み
```

## 重要な注意点

- **Pocket**: 2025年7月にサービス終了済み
- **LINE Notify**: 2025年3月にサービス終了済み
- **Obsidian Git**: モバイルでは不安定、代替アプリ推奨
- **YouTube転写**: 2025年中にWeb Clipperに機能追加予定