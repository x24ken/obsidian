# GPT5-MCP-Serverセットアップ手順

## 1. リポジトリのクローン
```bash
git clone https://github.com/gotalab/gpt5-mcp-server.git
cd gpt5-mcp-server
```

## 2. 依存関係のインストール
```bash
pnpm i
# または npm install
```

## 3. 環境変数の設定
`.env`ファイルを作成：
```bash
cp .env.example .env
```

`.env`ファイルを編集：
```
OPENAI_API_KEY=your_openai_api_key_here
MODEL=gpt-5-mini  # または gpt-5, gpt-4o など
REASONING_EFFORT=medium  # low/medium/high
VERBOSITY=normal  # low/normal/high
ENABLE_WEB_SEARCH=true
```

## 4. ビルド
```bash
pnpm run build
# または npm run build
```

## 5. サーバー起動
```bash
pnpm start
# または npm start
```

## 6. Claude Codeでの設定
Claude Codeの設定ファイルに追加：

### 設定場所
- `~/.claude/mcp_servers.json` または
- プロジェクトの`.claude/mcp_servers.json`

### 設定内容
```json
{
  "mcpServers": {
    "gpt5-search": {
      "command": "node",
      "args": ["/path/to/gpt5-mcp-server/dist/index.js"],
      "env": {
        "OPENAI_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## 7. Claude Code再起動
設定反映のためClaude Codeを再起動

## 利用可能なツール
- `gpt5_query`: GPT-5への質問とWebサーチ
- 設定可能パラメータ：
  - `reasoning_effort`: 推論レベル
  - `web_search`: Webサーチの有効/無効
  - `verbosity`: 回答の詳細度

## トラブルシューティング
- Node.js 18+が必要
- OpenAI API keyが有効であることを確認
- ファイアウォール設定でポートが開いていることを確認
- ログを確認：`pnpm start --verbose`

## 現在のo3-search-mcpからの移行
1. 既存のo3-search-mcp設定をコメントアウト
2. 新しいgpt5-search設定を追加
3. Claude Code再起動で確認