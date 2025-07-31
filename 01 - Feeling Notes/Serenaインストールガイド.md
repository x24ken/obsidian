**タイプ**: 📋 Guide

## 📝 一行要約
SerenaをLLMと統合してコーディングエージェントとして使用するための、インストールから設定までの完全ガイド。

## 🎯 最終ゴール
SerenaをClaude CodeやClaude Desktopなどと統合し、セマンティックなコード検索・編集機能を持つAIコーディングアシスタントを構築する。

## 🔧 実行手順
1. **インストール方法の選択と実行**
   - ローカルインストール: `git clone https://github.com/oraios/serena && cd serena && uv run serena-mcp-server`
   - 直接実行: `uvx --from git+https://github.com/oraios/serena serena-mcp-server`
   - Docker（実験的）: `docker run --rm -i --network host -v /path/to/projects:/workspaces/projects ghcr.io/oraios/serena:latest serena-mcp-server --transport stdio`

2. **設定ファイルの作成**
   - `~/.serena/serena_config.yml`を作成
   - プロジェクトパスと設定を記述

3. **LLMクライアントとの統合**
   - Claude Code: `claude mcp add serena -- <serena-mcp-server> --context ide-assistant --project $(pwd)`
   - Claude Desktop: `claude_desktop_config.json`にSerenaサーバー設定を追加
   - その他のMCPクライアント（Cline、Roo-Code、Cursor）も対応

## ⚠️ 注意点・罠
- 現在活発に開発中のため、設定方法が変更される可能性がある
- 大規模プロジェクトではインデックス作成により初回起動が遅くなる
- ツール実行時は権限設定に注意が必要

## ✅ 成功の指標
- LLMからSerenaのツールにアクセスできる
- セマンティック検索で意味的に関連するコードが見つかる
- コードの自動編集や生成が正常に動作する

## 💡 なぜ重要か
Serenaの適切な設定により、従来の構文ベースのツールでは不可能だった高度なコード理解と操作が可能になる。これにより、開発者はAIを活用した自律的なコーディングタスクの実行が可能となり、開発生産性が飛躍的に向上する。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[Serena]] - Serenaの概念と基本機能
→ [[MCP]] - 統合に必要なプロトコルの理解

### 🎯 実践例
→ [[MCPクライアントのリモートサーバー対応状況（2025年7月）]] - 対応クライアント一覧

## 📚 参照元
> [oraios/serena - GitHub](https://github.com/oraios/serena)