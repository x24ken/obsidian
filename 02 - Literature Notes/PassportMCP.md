**タイプ**: 🔍 Concept

## 📝 一行要約
ブラウザのセッションクッキーを活用してAPI認証を回避し、無料でWebサービスをMCP経由でアクセス可能にするフレームワーク

## 🎯 核心的定義
PassportMCPは、Chrome拡張機能とPython SDKを組み合わせて、ユーザーのブラウザセッション（クッキー・認証ヘッダー）を自動取得し、それをMCPサーバーのHTTPリクエストに注入することで、公式APIキーなしでWebサービスにアクセスできるツール

## 🌟 主な構成要素
- **Chrome拡張機能** - ブラウザのリクエストを監視してクッキーを抽出
- **Python SDK** - 取得したクッキーをHTTPクライアントに自動注入
- **MCP Server Framework** - FastMCP互換のデコレータベースツール定義
- **Credential Store** - ローカルマシン上でのセッション情報永続化

## 🔄 関連概念との違い
- **公式API vs PassportMCP**: 前者は開発者アカウント・課金が必要、後者は既存ログインセッションを活用
- **Webスクレイピング vs PassportMCP**: 前者はHTMLパース、後者は内部JSON APIを直接利用
- **Playwright自動化 vs PassportMCP**: 前者はブラウザ制御、後者は軽量なHTTPリクエストのみ

## 💡 なぜ重要か
このツールは、高額なAPI料金（Twitter $100/月）を回避して個人開発者がWebサービス統合を実現する革新的なアプローチを提供し、AIエージェント開発の民主化に貢献している。特に、既存の認証フローを活用することで開発者体験を向上させ、プロトタイピング段階での経済的障壁を除去する

## 🔗 つながり

### ⬅️ 前提・背景
→ [[MCP]] - MCPサーバーの基本概念
→ [[MCPトランスポート層]] - HTTPベースの通信手法

### ➡️ 発展・結果
（現在関連するノートはありません）

### 🔀 別の視点
→ [[Playwright MCPでTwitter自動ログイン]] - ブラウザ自動化の代替アプローチ
→ [[Zapier MCP]] - APIキーベースの伝統的アプローチ

### 🎯 実践例
→ [[MCPの秘書と道具箱例え話]] - 秘書がブラウザセッション道具箱を使う例

