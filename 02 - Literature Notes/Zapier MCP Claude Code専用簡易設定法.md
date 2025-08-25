**タイプ**: 💡 Tips

## 📝 一行要約
Zapier MCPがClaude Code専用に提供する、Authorizationヘッダー認証を使った1コマンド設定方法

## 🎯 この方法が解決する問題
従来の手動.mcp.json編集やIntegration URL管理の複雑さを、API Key方式の1行コマンドで解決

## 💡 実践的な知識

### コマンド構造の解析
```bash
claude mcp add zapier https://mcp.zapier.com/api/mcp/mcp \
  -t http \
  -H "Authorization: Bearer API_KEY"
```

**各パラメータの意味**：
- `zapier`: MCPサーバーの登録名
- `https://mcp.zapier.com/api/mcp/mcp`: 統一エンドポイント（個別URL不要）
- `-t http`: HTTPトランスポート指定
- `-H`: Authorizationヘッダー追加（API Key認証）

### 従来方式との違い

| 項目 | 従来方式 | Claude Code専用方式 |
|------|----------|-------------------|
| URL | 個別のIntegration URL | 統一エンドポイント |
| 認証 | URL内に秘密情報埋め込み | Authorizationヘッダー |
| 設定 | .mcp.json手動編集も可 | CLIコマンド1行 |
| 管理 | URL全体が秘密情報 | API Keyのみ管理 |

## 🔧 実装手順

### 1. Zapier MCP画面での準備
1. https://mcp.zapier.com にアクセス
2. 「+ New MCP Server」→「Claude Code」選択
3. サーバー名を設定して作成

### 2. コマンド実行
```bash
# 1. 表示されたコマンドをコピー
# 2. API Keyを「Copy secret」でコピー
# 3. ******をAPI Keyに置き換えて実行
claude mcp add zapier https://mcp.zapier.com/api/mcp/mcp \
  -t http -H "Authorization: Bearer 実際のAPIキー"
```

### 3. 生成される.mcp.json構造
```json
{
  "mcpServers": {
    "zapier": {
      "transport": "http",
      "url": "https://mcp.zapier.com/api/mcp/mcp",
      "headers": {
        "Authorization": "Bearer API_KEY_HERE"
      }
    }
  }
}
```

## ⚡ なぜこの方法が優れているか

### セキュリティ面の改善
- **API Key分離**: URLとは独立して管理可能
- **標準的な認証**: HTTP標準のAuthorizationヘッダー使用
- **ローテート容易**: API Keyのみの更新で済む

### 運用面の利点
- **設定ミス防止**: URLタイプミスのリスクなし
- **即座に利用可能**: コマンド1行で完了
- **チーム共有簡単**: API Keyの環境変数化が容易

## 🚨 注意点
- この方式はClaude Code選択時のみ利用可能
- 他のMCPクライアント（Cursor等）では従来のIntegration URL方式
- API Keyも秘密情報として厳重管理が必要

## つながり

← [[Claude Code]]：この専用設定の対象ツール
↔ [[MCPトランスポート層]]：HTTPトランスポートとヘッダー認証の技術詳細
→ [[MCPクライアントのリモートサーバー対応状況（2025年7月）]]：クライアント別の実装差異

## 📚 参照元
> [Zapier MCP Connect Tab - Screenshot, 2025-08-25](画面キャプチャ)
> [Claude Code MCP Documentation - Anthropic](https://docs.anthropic.com/en/docs/claude-code/mcp)