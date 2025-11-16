---
type: Concept
created: 2025-11-16
tags:
  - MCP
  - Python
  - フレームワーク
  - プロダクション
  - Prefect
---

# FastMCP

## 定義

**FastMCP**は、PrefectがメンテナンスするModel Context Protocol（MCP）のサードパーティPythonフレームワークである。公式MCP Python SDKの上に構築され、プロダクション環境向けの追加機能と開発体験の改善を提供する。

**パッケージ名**: `fastmcp`
**現行バージョン**: FastMCP v2

## 核となる主張

FastMCPは、**プロダクション速度**と**エンタープライズ統合**を最優先とする。公式SDKが提供するプリミティブに加えて、既存API統合、認証プロバイダ、サーバー構成などの「すぐ使える機能」を提供することで、開発から本番デプロイまでの時間を大幅に短縮する。

## 歴史的背景

**FastMCP 1.0**:
- 初期の高レベルMCPフレームワーク
- そのコンセプトは公式SDK内の`mcp.server.fastmcp.FastMCP`モジュールに統合された

**FastMCP v2**:
- 独立したフレームワークとして再設計
- 公式SDKとは別パッケージで進化を継続
- プロダクション特化の追加機能を搭載

## 主要な構成要素

### 1. サーバー構成とプロキシング

**機能**:
- 複数のMCPサーバーを1つのエンドポイントに統合
- 他のMCPサーバーへのプロキシング
- サーバー間のルーティング制御

**ユースケース**:
- マイクロサービス構成のMCPバックエンド
- 既存MCPサーバーのアグリゲーション
- チーム別サーバーの統合

### 2. OpenAPI/FastAPI統合

**機能**:
- 既存のOpenAPI仕様からMCPサーバーを自動生成
- FastAPIアプリケーションをMCPツールとして公開
- RESTエンドポイントの自動ラッピング

**メリット**:
- 既存APIの再利用
- MCPへの移行コスト削減
- 統一されたツールインターフェース

**使用例**:
```python
from fastmcp import FastMCP

# 既存のFastAPIアプリをMCP化
mcp = FastMCP.from_fastapi(existing_app)
```

### 3. エンタープライズ認証統合

**統合済みプロバイダ**:
- Google OAuth
- GitHub OAuth
- WorkOS（SSO統合プラットフォーム）
- Azure AD
- Auth0

**特徴**:
- 設定ベースのセットアップ
- トークン検証の自動化
- ロールベースアクセス制御（RBAC）対応

**使用例**:
```python
from fastmcp.auth import GoogleAuth

mcp = FastMCP("Secure Server", auth=GoogleAuth(
    client_id="YOUR_CLIENT_ID",
    allowed_domains=["example.com"]
))
```

### 4. 開発・テストツール

**提供ツール**:
- 独自CLI（`fastmcp`コマンド）
- 統合テストユーティリティ
- モックサーバー生成
- デプロイヘルパー

**開発体験の改善**:
- ボイラープレートの自動生成
- 規約ベースのプロジェクト構造
- チーム向けの標準化

### 5. プロダクション機能

**追加機能**:
- リクエスト/レスポンスのロギング
- メトリクス収集
- レート制限
- エラートラッキング
- ヘルスチェックエンドポイント

## 関連する概念との関係

**MCP Python SDKとの関係**:
- FastMCPはSDKの**上位レイヤー**として動作
- SDKのプリミティブを活用しつつ、追加抽象化を提供
- SDK単体より高レベルだが、仕様追従に若干の遅延リスク

**FastAPIとの関係**:
- 設計思想が類似（規約ベース、デコレータ駆動）
- FastAPIアプリの直接統合が可能
- FastMCPはMCP専用、FastAPIはREST API専用

**名前の混同**:
- 公式SDK内の`FastMCP`モジュール ≠ この`fastmcp`パッケージ
- 同じ名前だが別物（歴史的経緯による）

## 実例と適用

### ユースケース1: 既存REST APIのMCP化

**シナリオ**: 社内のFastAPIベースの天気APIをMCPツールとして公開

```python
from fastapi import FastAPI
from fastmcp import FastMCP

# 既存のFastAPI
weather_api = FastAPI()

@weather_api.get("/weather/{city}")
def get_weather(city: str):
    return {"city": city, "temp": 20}

# MCPサーバーとして公開
mcp = FastMCP.from_fastapi(weather_api)
```

**メリット**: 既存コードの再利用、追加開発不要

### ユースケース2: エンタープライズSSO統合

**シナリオ**: Google Workspaceの特定ドメインのみアクセス許可

```python
from fastmcp import FastMCP
from fastmcp.auth import GoogleAuth

mcp = FastMCP(
    "Corporate Tools",
    auth=GoogleAuth(
        client_id=os.getenv("GOOGLE_CLIENT_ID"),
        client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
        allowed_domains=["company.com"]
    )
)

@mcp.tool()
def sensitive_operation():
    """社内専用ツール"""
    return "Authorized users only"
```

**メリット**: エンタープライズ要件を最小コードで実現

### ユースケース3: マイクロサービス統合

**シナリオ**: 複数チームのMCPサーバーを統合API GatewayとしてデプロイSenario:

```python
from fastmcp import FastMCP, compose_servers

# チームAのサーバー
team_a_server = FastMCP("Team A Tools")

# チームBのサーバー
team_b_server = FastMCP("Team B Tools")

# 統合サーバー
gateway = compose_servers(
    team_a_server,
    team_b_server,
    name="Company Gateway"
)
```

**メリット**: 分散開発と統一インターフェースの両立

## 制限と注意点

### 制限1: 仕様追従の遅延リスク

**課題**: 公式MCP仕様変更への対応がSDKより遅い
- FastMCPはSDK上に構築されているため、SDKの更新待ち
- 最新機能の利用に数週間〜数ヶ月の遅延の可能性

**対策**:
- 最新仕様機能が必須なら公式SDK使用
- 安定性重視ならFastMCPでも問題なし

### 制限2: 追加抽象化による複雑性

**課題**: フレームワーク独自の概念と学習コスト
- FastMCP特有の規約
- デバッグ時の抽象化レイヤー

**対策**:
- ドキュメント熟読
- 必要に応じてSDKレベルにフォールバック

### 制限3: コミュニティメンテナンス

**課題**: 公式サポートではない
- Prefectの優先度に依存
- 長期的な保守の不確実性

**対策**:
- GitHubでの活動状況を定期確認
- ミッションクリティカルなら公式SDK検討

### 注意点: 公式SDKとの使い分け

**FastMCPを選ぶべき場合**:
- 既存API資産の活用
- エンタープライズ認証必須
- 開発速度優先

**公式SDKを選ぶべき場合**:
- 最新仕様機能の即時利用
- 長期保守の確実性
- 軽量・最小依存

## ベストプラクティス

### 1. 段階的導入

```
Phase 1: FastMCPで迅速なプロトタイプ
  ↓
Phase 2: 本番環境での検証
  ↓
Phase 3: 必要に応じて公式SDKへの移行検討
```

### 2. 認証設計

**環境変数の活用**:
```python
import os
from fastmcp.auth import GoogleAuth

auth = GoogleAuth(
    client_id=os.getenv("GOOGLE_CLIENT_ID"),  # .envから読み込み
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET")
)
```

**絶対にコードにハードコードしない**

### 3. サーバー構成パターン

**Single Responsibility**:
- 1サーバー = 1ドメイン機能
- 統合はcompose_serversで実現

**例**:
```
database_server: DB操作ツール
analytics_server: 分析ツール
gateway: 上記2つを統合
```

### 4. 監視とロギング

**FastMCPの組み込み機能活用**:
```python
mcp = FastMCP(
    "Production Server",
    enable_metrics=True,
    log_requests=True,
    log_level="INFO"
)
```

### 5. テスト戦略

**FastMCPのテストユーティリティ使用**:
```python
from fastmcp.testing import MCPTestClient

client = MCPTestClient(mcp)
result = client.call_tool("my_tool", {"param": "value"})
assert result.success
```

## 公式SDKとの比較ポイント

| 観点 | FastMCP | MCP Python SDK |
|------|---------|----------------|
| **学習曲線** | 緩やか（規約ベース） | やや急（プリミティブ） |
| **開発速度** | 速い（既存API統合） | 標準 |
| **柔軟性** | 中（フレームワーク規約） | 高（低レベル制御可） |
| **エンタープライズ** | 統合済み | 自前実装 |
| **仕様追従** | 若干遅延 | 即時 |
| **長期保守** | コミュニティ依存 | 公式保証 |

## つながり

← [[MCP Python SDK]]：FastMCPの基盤となる公式SDK
↔ [[MCP]]：MCPプロトコルの基礎概念
→ [[MCPトランスポートの実用的な使い分け]]：プロダクション環境での適用パターン

## 参考文献

> [GitHub - jlowin/fastmcp](https://github.com/jlowin/fastmcp)
> [FastMCP Documentation](https://github.com/jlowin/fastmcp#readme)
> [MCP Python SDK Documentation](https://modelcontextprotocol.github.io/python-sdk/)
