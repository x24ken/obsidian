**タイプ**: 📋 Guide

## 📝 一行要約
プロジェクトの.mcp.jsonファイルにZapier MCPサーバーを登録し、AIアシスタントから8,000以上のアプリ連携を可能にする手順書

## 🎯 このガイドの目的
Claude CodeやCursorなどのAIツールからZapierの全機能にアクセスできるようにする環境構築

## 📋 必要な前提条件
- Zapierアカウント（無料プランでも可）
- Claude Code（またはMCP対応AIツール）のインストール
- プロジェクトディレクトリへの書き込み権限

## 🔧 セットアップ手順

### ステップ1: Zapier MCPエンドポイントの作成
1. **サインイン**: https://mcp.zapier.com にアクセス
2. **新規作成**: 「+ New MCP Server」をクリック
3. **クライアント選択**: 「Claude」を選択（リストになければ「Other」）
4. **名前設定**: サーバー名を入力して「Create」
5. **URL取得**: 「Connect」タブで「Integration URL」の横の「Copy」をクリック
   - 形式: `https://hooks.zapier.com/mcp/xxxxxxxxxxxxxxxx`
   - **重要**: このURLは秘密情報として扱う

### ステップ2: .mcp.jsonへの登録

#### 方法A: CLIを使用（推奨）
```bash
# プロジェクトルートで実行
claude mcp add --transport http -s local \
  zapier https://hooks.zapier.com/mcp/YOUR_SECRET_URL
```

#### 方法B: 手動編集
`.mcp.json`ファイルに以下を追加：
```json
{
  "mcpServers": {
    "既存のサーバー": { ... },
    "zapier": {
      "transport": "http",
      "url": "https://hooks.zapier.com/mcp/YOUR_SECRET_URL"
    }
  }
}
```

### ステップ3: 接続の承認と確認
1. **MCPコマンド実行**: Claude Codeで `/mcp` を入力
2. **信頼の承認**: 「Trust remote server zapier」で「Approve」をクリック
3. **ツール確認**: 「Show tools」でZapierツールの一覧を確認

### ステップ4: 実行時の使用方法
```bash
# ツール許可を明示してコマンド実行
claude -p "Slackにメッセージを送信" \
  --allowedTools mcp__zapier

# 特定ツールのみ許可する場合
claude -p "Googleスプレッドシートに行を追加" \
  --allowedTools mcp__zapier__sheets__create_row
```

## ⚠️ セキュリティ上の注意

### URLの管理
- **公開リポジトリ厳禁**: Integration URLを含む.mcp.jsonをpublicリポジトリにコミットしない
- **環境変数化**: チーム共有時は環境変数での管理を検討
- **定期ローテート**: セキュリティのため定期的にURLを再生成

### アクセス制御
- Zapier MCPサーバーごとに接続可能なZapを制限可能
- 本番環境と開発環境で別のMCPサーバーを使用推奨

## 🔧 トラブルシューティング

### よくある問題と解決策

| 症状 | 原因 | 解決策 |
|------|------|--------|
| Server not found | URL形式の誤り | URLが`https://`で始まることを確認 |
| 401/403エラー | URLの期限切れ | Zapier MCPでRotateして新URL取得 |
| ツールが表示されない | 承認未完了 | `/mcp`で再度承認を実行 |
| 実行時エラー | ツール許可なし | `--allowedTools`フラグを追加 |

### デバッグコマンド
```bash
# 全MCPサーバーの確認
claude mcp list

# Zapierサーバーの詳細確認
claude mcp get zapier

# サーバーの削除（再設定時）
claude mcp remove zapier
```

## 💡 応用例
- **自動化ワークフロー**: AIが判断してZapを実行
- **マルチアプリ連携**: Google Workspace、Slack、Notion等を横断的に操作
- **データパイプライン**: AIによる自動データ収集と処理

## つながり

← [[Zapier MCP]]：このガイドが設定する対象システム
← [[MCP]]：基盤となるプロトコル仕様
↔ [[PassportMCP]]：APIキー不要の代替手法との比較
→ [[MCPトランスポート層]]：HTTPトランスポートの実装詳細
→ [[iPaaS×MCP統合の発展予測]]：この設定が可能にする未来

## 📚 参照元
> [Use Zapier MCP with your client - Zapier Help Center](https://help.zapier.com/hc/en-us/articles/36265392843917-Use-Zapier-MCP-with-your-client)
> [Claude Code MCP Documentation - Anthropic](https://docs.anthropic.com/en/docs/claude-code/mcp)
> [Zapier MCP Guide - Zapier Blog](https://zapier.com/blog/zapier-mcp-guide/)