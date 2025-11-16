---
type: Concept
created: 2025-11-16
tags:
  - MCP
  - Python
  - SDK
  - 公式実装
---

# MCP Python SDK

## 定義

**MCP Python SDK**は、Anthropicが提供するModel Context Protocol（MCP）の公式Python実装である。MCPサーバーとクライアントを構築するための包括的なツールキットで、プロトコル仕様の参照実装として機能する。

**パッケージ名**: `mcp`

## 核となる主張

MCP Python SDKは、**仕様への忠実性**と**最小限の依存関係**を重視した設計思想を持つ。公式実装として、プロトコル仕様の変更に即座に追従し、Claude DesktopやChatGPT Appsなど多様なMCPクライアントとの互換性を保証する。

## 主要な構成要素

### 1. FastMCPモジュール（高レベルAPI）

**場所**: `mcp.server.fastmcp.FastMCP`

**提供機能**:
- デコレータ形式でのツール/リソース/プロンプト定義
- コンテキストユーティリティ（ログ、プログレス、read_resource、elicit、sampling）
- 自動スキーマ生成と検証

**使用例**:
```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("My Server")

@mcp.tool()
def calculate(x: int, y: int) -> int:
    """2つの数値を加算"""
    return x + y
```

### 2. トランスポート層

**3つのトランスポート**:
- **stdio**: ローカル開発とClaude Desktop向け（最も一般的）
- **SSE（Server-Sent Events）**: レガシー、非推奨
- **Streamable HTTP**: プロダクション推奨、セッション管理対応

**Streamable HTTPの特徴**（2025年11月時点）:
- セッション管理（`Mcp-Session-Id`ヘッダー）
- 再開可能なSSEストリーム
- マルチクライアント対応
- ASGI/Starlette統合サポート

### 3. 構造化出力システム

**対応型システム**:
- Pydantic models
- TypedDict
- dataclasses
- 標準Pythonの型ヒント

**自動処理**:
- JSON Schemaの自動生成
- 入力検証
- 出力の型安全性保証

**高度な制御**:
- `CallToolResult`を返すことで`_meta`フィールドなど完全制御可能

### 4. 認証機能

**提供内容**:
- OAuth形式の認証フローの実装例
- トークン検証のプリミティブ
- CORS設定のガイダンス

**特徴**: 完全実装ではなく、プリミティブと例を提供（柔軟性重視）

### 5. 開発ツール

**mcp devコマンド**:
```bash
mcp dev server.py
```
- 自動リロード
- MCP Inspectorとの統合
- リアルタイムデバッグ

**Claude Desktop統合**:
- 設定ファイル経由での簡単接続
- 実際のアシスタントでのテスト

## 関連する概念との関係

**プロトコルとの関係**:
- MCPプロトコル仕様の**参照実装**
- 仕様変更に最も早く追従
- 他の実装（TypeScript SDK等）との互換性保証

**他のSDKとの違い**:
- TypeScript SDK: ブラウザ/Node.js環境向け
- Python SDK: サーバーサイドPython環境向け

**FastMCPフレームワークとの混同注意**:
- SDK内の`FastMCP`モジュール ≠ サードパーティの`fastmcp`パッケージ
- 名前は同じだが、後者は独立したフレームワーク

## 実例と適用

### ユースケース1: Claude Desktop向けツール

**シナリオ**: ローカルファイルシステムにアクセスするツールを提供

```python
from mcp.server.fastmcp import FastMCP
import os

mcp = FastMCP("Filesystem Tools")

@mcp.tool()
def list_files(directory: str) -> list[str]:
    """指定ディレクトリのファイル一覧を取得"""
    return os.listdir(directory)
```

**接続方法**: Claude Desktop設定で`stdio`トランスポート指定

### ユースケース2: Web APIとしてのデプロイ

**シナリオ**: Streamable HTTPでASGI/Starletteに統合

```python
from starlette.applications import Starlette
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Web API Server")

# ツール定義...

app = Starlette()
# MCPエンドポイントをマウント（CORS設定含む）
```

**本番環境**: Uvicorn/Gunicornでホスティング

### ユースケース3: ChatGPT Apps統合

**要件**: Streamable HTTP必須

**手順**:
1. Streamable HTTPサーバー実装
2. CORS設定（`Mcp-Session-Id`ヘッダー公開）
3. OpenAI Apps SDKに登録

## 制限と注意点

### 制限1: プロダクション機能のボイラープレート

**課題**: エンタープライズ向け機能は自前実装が必要
- 認証プロバイダ統合
- 複数サーバー構成
- 監視・ロギング

**対策**: 必要に応じてFastMCPフレームワークやカスタム抽象化を検討

### 制限2: ドキュメントの分散

**課題**: 情報が複数箇所に散在
- 公式ドキュメント
- GitHub examples
- MCP仕様書

**対策**: MCP Inspectorで実際の動作を確認しながら学習

### 注意点: トランスポート選択の重要性

**stdio**: ローカルのみ、最も簡単
**Streamable HTTP**: プロダクション、セッション管理が必須

間違ったトランスポートを選ぶと後から変更が困難。

## ベストプラクティス

### 1. 開発フロー

```
開発: mcp dev + stdio
  ↓
統合テスト: Claude Desktop
  ↓
プロダクション: Streamable HTTP
```

### 2. セキュリティ

**必須設定**:
- `Origin`ヘッダー検証（DNS rebind攻撃対策）
- ローカルサーバーは`localhost`バインド
- 本番環境では認証必須
- CORSの適切な設定

### 3. 型安全性

**ツール定義**:
```python
from pydantic import BaseModel

class CalculateInput(BaseModel):
    x: int
    y: int

@mcp.tool()
def calculate(input: CalculateInput) -> int:
    return input.x + input.y
```

**メリット**:
- 自動バリデーション
- 自動ドキュメント生成
- クライアント側の型補完

### 4. エラーハンドリング

```python
from mcp.types import CallToolResult

@mcp.tool()
def risky_operation(data: str) -> CallToolResult:
    try:
        result = process(data)
        return CallToolResult(content=[{"type": "text", "text": result}])
    except Exception as e:
        return CallToolResult(
            isError=True,
            content=[{"type": "text", "text": f"エラー: {str(e)}"}]
        )
```

## つながり

← [[MCP]]：MCPプロトコルの基礎概念と全体像
↔ [[MCPトランスポート層]]：stdio、SSE、Streamable HTTPの技術詳細
→ [[MCPツール機能]]：ツール定義の具体的な実装パターン

## 参考文献

> [MCP Python SDK Documentation](https://modelcontextprotocol.github.io/python-sdk/)
> [GitHub - modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk)
> [MCP Specification - Transports](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports)
> [OpenAI Apps SDK - MCP Server Concepts](https://developers.openai.com/apps-sdk/concepts/mcp-server/)
