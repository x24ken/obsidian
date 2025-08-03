**タイプ**: 🔍 Concept

## 📝 一行要約
Function Callingは大規模言語モデルが事前訓練されたJSON構造を用いて外部ツールや関数を決定論的に呼び出す機能で、構造化された入出力により高い信頼性を実現する。

## 🎯 核心的定義
Function Callingとは、LLMが特定のJSON形式で定義された関数シグネチャを理解し、適切なパラメータを生成して外部ツールやAPIを呼び出す機能。モデルは事前訓練により関数の意味と使用方法を学習済みで、テキスト解析を必要とせずに構造化されたデータを直接生成する。

## 🌟 主な構成要素
- **関数定義スキーマ**: JSON形式での関数シグネチャと説明
- **パラメータ生成**: LLMによる適切な引数の自動生成
- **構造化出力**: 決定論的なJSON形式での応答
- **並列実行**: 複数関数の同時呼び出し対応
- **事前訓練**: 関数理解に特化したモデル最適化

## 🔄 関連概念との違い
ReActフレームワークがテキスト形式の推論トレースを文字列解析で処理するのに対し、Function Callingは構造化されたJSON出力を直接生成する。これにより解析エラーが大幅に削減され、決定論的な動作が可能になる。また、ReActの逐次処理に対し、Function Callingは並列実行をサポートしている。

## 💡 なぜ重要か
Function CallingはLLMエージェントの実用性を本格的な本番環境レベルに押し上げる技術革新を表している。構造化された確実な外部システム連携により、従来のプロトタイプレベルから信頼性の高いプロダクションシステムへの転換を可能にし、AIエージェントの産業応用を大幅に拡大する。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[AIエージェント]] - Function Callingを実装する主体
→ [[JSON-RPC 2.0]] - 構造化通信プロトコルの基盤技術

### ➡️ 発展・結果
→ [[MCP]] - より高度なツール統合プロトコル

### 🔀 別の視点
→ [[ReActフレームワーク]] - 従来の代替アプローチ

### 🎯 実践例
→ （現在関連するノートはありません）

## 📚 参照元
> [Tool use (function calling) - Anthropic Documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use)
> [Function calling and other API updates - OpenAI](https://openai.com/blog/function-calling-and-other-api-updates)
> [LLMCompiler: An LLM Compiler for Parallel Function Calling - ICML 2024](https://github.com/SqueezeAILab/LLMCompiler)