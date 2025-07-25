**タイプ**: 📋 Guide

## 📝 一行要約
Playwright MCPサーバーを活用してTwitterの自動ログイン・コンテンツ取得を実現する段階的実装手順

## 🎯 最終ゴール
ブラウザ自動化によりTwitterアカウントへの安全なログインを実現し、スクレイピングやコンテンツ操作をMCP経由でClaude Codeから実行できるようにする

## 🔧 実行手順
1. **Playwright MCPサーバーの選択・インストール**
   - 汎用: `@microsoft/playwright-mcp` または `@executeautomation/playwright-mcp-server`
   - Twitter専用: `Barresider/x-mcp` (ログイン機能内蔵)
   - Stealth版: `pvinis-playwright-stealth` (ボット検出回避)

2. **Claude Code設定**
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["@microsoft/playwright-mcp"],
         "env": {"HEADLESS": "false"}
       }
     }
   }
   ```

3. **ログイン自動化スクリプト実装**
   - ログインページアクセス (`twitter.com/i/flow/login`)
   - ユーザー名・パスワード入力の自動化
   - 2FA対応 (TOTPコード生成・入力)
   - セッション状態保存 (`storageState()`)

4. **ボット検出対策の実装**
   - User-Agent文字列のランダム化
   - `navigator.webdriver` フラグの除去
   - プロキシローテーション設定
   - Stealth プラグインの使用

## ⚠️ 注意点・罠
- Twitter 2FA: SMS認証は有料アカウントのみ、TOTP推奨
- ボット検出: 頻繁なアクセスでIP制限・アカウント制限のリスク
- セッション管理: クッキー保存による永続化が必要
- レート制限: 過度なリクエストによるアカウント凍結注意

## ✅ 成功の指標
- 2FA含む自動ログインが安定動作
- セッション状態が適切に保存・復元される
- ボット検出を回避してコンテンツアクセス可能
- Claude CodeからTwitter操作コマンドが実行できる

## 💡 なぜ重要か
このガイドは、高額なAPI料金を回避しながらも確実性の高いTwitterアクセス手法を提供し、PassportMCPとは異なる「完全ブラウザ模擬」アプローチによる堅牢なソリューションを実現する。特に、企業でのソーシャルメディア分析や個人プロジェクトでの大規模データ収集において、経済的かつ技術的な実現可能性を両立させる

## 🔗 つながり

### ⬅️ 前提・背景
→ [[MCP]] - MCPサーバーの基本概念
→ [[MCPトランスポート層]] - stdioトランスポートの利用
→ [[MCPトランスポートの実用的な使い分け]] - ローカルツールでの実装例

### ➡️ 発展・結果
（現在関連するノートはありません）

### 🔀 別の視点
→ [[PassportMCP]] - ブラウザセッションベースの代替アプローチ
→ [[Zapier MCP]] - サードパーティAPI経由の代替手法

### 🎯 実践例
→ [[MCPの秘書と道具箱例え話]] - ブラウザ操作道具箱の例

