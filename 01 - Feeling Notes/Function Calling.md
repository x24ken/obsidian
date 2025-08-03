**タイプ**: 🔍 Concept

## 📝 一行要約
Function CallingはLLMが構造化されたJSON形式で外部ツールやAPIを呼び出すための技術的インターフェースで、ReActなどの推論パターンの実装基盤として機能する。

## 🎯 核心的定義
Function Callingとは、LLMが特定のJSON形式で定義された関数シグネチャを理解し、適切なパラメータを生成して外部ツールやAPIを呼び出す機能。モデルは事前訓練により関数の意味と使用方法を学習済みで、テキスト解析を必要とせずに構造化されたデータを直接生成する。

## 🌟 主な構成要素
- **関数定義スキーマ**: JSON形式での関数シグネチャと説明
- **パラメータ生成**: LLMによる適切な引数の自動生成
- **構造化出力**: 決定論的なJSON形式での応答
- **並列実行**: 複数関数の同時呼び出し対応
- **事前訓練**: 関数理解に特化したモデル最適化

## 🔄 関連概念との違い
Function CallingはReActフレームワークと競合するものではなく、異なる抽象レイヤーの技術である。ReActが高レベルの推論・行動パターン（Thought→Action→Observation）を定義するのに対し、Function Callingはその「Action」部分を実装する低レベルのメカニズムを提供する。従来のテキスト解析による実装と比較して、構造化されたJSON出力により高い信頼性を実現する。

## 💡 なぜ重要か
Function CallingはReActなどの推論パターンを実装する際の基盤技術として重要である。構造化されたインターフェースにより、従来のテキスト解析による不安定な実装から、信頼性の高いツール連携へと進化させた。これによりReActパターンの本番環境での実用性が大幅に向上し、AIエージェントの産業応用を可能にしている。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[AIエージェント]] - Function Callingを実装する主体
→ [[JSON-RPC 2.0]] - 構造化通信プロトコルの基盤技術

### ➡️ 発展・結果
→ [[MCP]] - より高度なツール統合プロトコル

### 🔀 別の視点
→ [[ReActフレームワーク]] - Function Callingを活用する高レベル推論パターン

### 🎯 実践例
→ （現在関連するノートはありません）

## 📚 参照元
> [Tool use (function calling) - Anthropic Documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
> [Function calling and other API updates - OpenAI](https://openai.com/blog/function-calling-and-other-api-updates)
> [LLMCompiler: An LLM Compiler for Parallel Function Calling - ICML 2024](https://github.com/SqueezeAILab/LLMCompiler)