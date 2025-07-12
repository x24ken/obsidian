# Twitter MCP設定ガイド - Claude CodeでTwitterを操作する方法

## 🎯 目標
Claude CodeからTwitterのツイート取得・投稿・検索ができるようになる

## 📊 Twitter MCPサーバー比較

| サーバー | 認証方式 | 安定性 | 機能 | 料金 | 設定難易度 | おすすめ度 |
|---------|---------|--------|------|------|----------|----------|
| **PassportMCP** | ブラウザクッキー | ⭐⭐⭐⭐ | フル機能 | **完全無料** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| twitterapi.io | 第三者API | ⭐⭐⭐⭐ | フル機能 | 初回100k無料 | ⭐ | ⭐⭐⭐⭐ |
| 公式API Free | 公式API | ⭐⭐⭐⭐⭐ | 超制限 | 無料(100回/月) | ⭐⭐⭐ | ⭐⭐ |
| x-twitter-mcp-server | 公式API | ⭐⭐⭐⭐⭐ | フル機能 | $100/月〜 | ⭐⭐⭐ | ⭐ |

## 🆓 推奨: PassportMCP の設定手順（完全無料）

### ステップ1: PassportMCPをインストール
```bash
pip install ppmcp
ppmcp setup  # Chrome拡張機能を自動インストール
```

### ステップ2: Twitterにログインしてセッション取得
1. Chrome で https://twitter.com/ にログイン
2. Chrome ツールバーの「PassportMCP」アイコンをクリック
3. 「Monitor Requests」をONにする
4. ページを再読み込み（クッキーが自動取得される）

### ステップ3: Twitter MCP サーバーを作成
`twitter_mcp_server.py` を作成:

```python
#!/usr/bin/env python3
from passportmcp import PassportMCP

mcp = PassportMCP("twitter", "twitter.com")

@mcp.tool()
async def get_tweet(tweet_id: str) -> dict:
    """ツイートの詳細を取得"""
    r = mcp.client.get(f"https://twitter.com/i/api/2/tweets/{tweet_id}")
    r.raise_for_status()
    return r.json()

@mcp.tool()
async def search_tweets(query: str, limit: int = 10) -> list[dict]:
    """ツイートを検索"""
    r = mcp.client.get(
        "https://twitter.com/i/api/2/search/adaptive.json",
        params={"q": query, "count": limit}
    )
    r.raise_for_status()
    tweets = r.json().get("globalObjects", {}).get("tweets", {})
    return list(tweets.values())

if __name__ == "__main__":
    mcp.serve()
```

### ステップ4: Claude Code に登録
```bash
claude mcp add twitter-mcp python /path/to/twitter_mcp_server.py
```

### ステップ5: 動作確認
Claude Codeで以下を試す:
- "ツイートID 1906352073089962327の詳細を取得して"
- "'MCP tutorial'でツイート検索して"

## 💰 代替案: twitterapi.io（初回10万ツイート無料）

1. [twitterapi.io](https://twitterapi.io/) でアカウント作成
2. 初回100,000ツイートクレジット（約6,600ツイート）を無料取得  
3. API keyを取得してMCPサーバーに設定

## ⚠️ 注意点・比較

### PassportMCP vs 他の方法
| 項目 | PassportMCP | twitterapi.io | 公式API |
|------|-------------|---------------|---------|
| 料金 | **完全無料** | 初回無料→有料 | $100/月〜 |
| 設定 | 簡単 | 超簡単 | 複雑 |
| 制限 | ブラウザ同等 | API制限あり | 厳しい制限 |
| 安定性 | Twitterの変更に依存 | 比較的安定 | 最も安定 |

### 重要な注意点
- **PassportMCP**: ブラウザクッキーを使用するため、Twitterの利用規約に注意
- **スクレイピング方式**: IP制限やアカウント制限のリスクあり
- **公式API**: 最も安全だが高額

## 🎯 推奨フロー
1. **まずPassportMCPを試す**（完全無料）
2. 制限が厳しければ**twitterapi.io**の無料枠を使用
3. 本格運用なら**公式API**を検討

## 🔧 トラブルシューティング
- PassportMCP拡張機能が見つからない → `ppmcp setup`を再実行
- クッキーが取得できない → Twitterに再ログイン
- MCPサーバーが起動しない → Pythonパスの確認