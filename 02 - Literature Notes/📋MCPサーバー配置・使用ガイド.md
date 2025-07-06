【タスク】: MCPサーバーの配置・使用方法の実装
【対象レベル】: 中級〜上級

## 🎯 このガイドのゴール
Model Context Protocol（MCP）サーバーを適切に配置し、AIエージェントと外部ツール・データソースを安全に連携させる

## ⏱️ 所要時間
約30〜60分（配置方法により異なる）

## 🧰 必要なもの
- Claude DesktopまたはVS Code/Cursor
- Node.js環境またはDocker環境
- 各種APIトークン（GitHub、AWS等）

## 📝 手順概要
1. 配置方法の選択（5つの主要方法から選択）
2. 環境に応じた設定ファイルの作成
3. MCPサーバーの起動と動作確認
4. トラブルシューティング

## 🔧 詳細手順

### Step 1: 配置方法の選択

**1. ローカル直接実行（最も一般的）**
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/username/Desktop"]
    }
  }
}
```
- **適用場面**: 開発・プロトタイピング、個人利用
- **レスポンス時間**: 10-50ms

**2. Dockerコンテナ実行（本番推奨）**
```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN=${GITHUB_TOKEN}", "ghcr.io/github/github-mcp-server"]
    }
  }
}
```
- **適用場面**: 本番環境、チーム開発、企業利用
- **起動時間**: 2-5秒

**3. クラウドファンクション（サーバーレス）**
```json
{
  "mcpServers": {
    "company-api": {
      "type": "sse",
      "url": "https://api.company.com/mcp/sse",
      "headers": {"Authorization": "Bearer ${COMPANY_API_TOKEN}"}
    }
  }
}
```
- **適用場面**: 大規模運用、スケーラブルなサービス

**4. NPMパッケージ配布**
```bash
npm install -g @modelcontextprotocol/server-github
```
- **適用場面**: オープンソースツール、簡単な配布

**5. MCP Toolkitによる管理**
- **適用場面**: 非技術者、GUI操作を好むユーザー

### Step 2: 設定ファイルの配置

**Claude Desktop設定場所:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

**VS Code/Cursor設定場所:**
- `.vscode/mcp.json` または `.cursor/mcp.json`

### Step 3: 用途別推奨方法

| 用途 | 推奨方法 | 理由 |
|---|---|---|
| 学習・実験 | ローカル直接実行 | 簡単、高速 |
| 個人開発 | NPMパッケージ | 手軽、バージョン管理 |
| チーム開発 | Docker | 環境統一、安全性 |
| 本番環境 | Docker + プロセス管理 | 安定性、監視 |
| 大規模サービス | クラウドファンクション | スケーラビリティ |
| 非技術者 | MCP Toolkit | GUI操作、簡単 |

## ✅ 完了チェック
- [ ] MCPサーバーが正常に起動している
- [ ] Claude/VS Codeから接続可能
- [ ] 必要なAPIトークンが設定されている
- [ ] 外部サービスとの連携が動作している

## 🚨 よくある失敗と対策

**Windows環境での問題**
- **問題**: npxコマンドでパス解決エラー
- **解決策**: 絶対パス使用、WSL使用検討

**認証エラー**
- **問題**: APIトークンの設定ミス
- **解決策**: 環境変数の正確な設定、権限確認

**依存関係の競合**
- **問題**: 複数のNode.jsバージョンによる競合
- **解決策**: Dockerコンテナ使用、仮想環境活用

## 🔄 関連リンク
- Claude Desktop公式ドキュメント
- MCP プロトコル仕様
- Docker公式ガイド

## 🚀 次のステップ
- [[デザインシステム用MCPサーバー実装ガイド]]
- カスタムMCPサーバーの開発
- 高度なセキュリティ設定

## 💡 2025年のトレンド
- Docker Toolkitによる統合管理
- クラウドファンクションによるサーバーレス配置
- 技術レベルと用途に応じた最適化