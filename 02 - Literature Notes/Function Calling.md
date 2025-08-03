**タイプ**: 🔍 Concept

## 📝 一行要約
現代のLLMが外部システムと連携するAPI機能で、JSON構造化出力により関数を呼び出し、テキスト生成器をソフトウェアエージェントに進化させる技術

## 🎯 核心的定義
Function Calling（ツール使用）は、ChatGPT、Claude、Geminiなどの現代LLM APIで提供される機能。開発者が関数リスト（名前、説明、JSONスキーマ）を提供すると、モデルが関数を選択して`{"name": "関数名", "arguments": {...}}`形式のJSONオブジェクトを返す。開発者がこのJSONを解析・検証し、実際の関数を実行して結果をモデルに戻す。

## 🌟 主な構成要素
- **関数定義**: JSONスキーマによる構造化されたツール仕様
- **構造化出力**: strict modeまたは検証により構文正確性を保証
- **単一呼び出し**: 1回の応答で1つの関数を指定（複数ステップは外部で制御）
- **開発者側責任**: JSON検証、認証処理、エラーハンドリング

## 🔄 関連概念との違い
プロンプトエンジニアリングを置き換えるものではなく、機械読み取り可能な出力を生成する拡張機能。従来のテキスト解析と比較して構造化データを直接生成するが、適切なツール選択には依然として慎重なプロンプト設計が必要。

## 💡 なぜ重要か
LLMを散文生成からプログラム合成に近い動作に進化させる基盤技術。データ抽出、API連携、IoT制御など構造化データが必要なアプリケーションを可能にする。GPT-4oでは特定の評価で98%のJSON有効率を達成するが、実際の成功率はモデル、タスク複雑度、実装品質により変動する。

## 🔗 つながり
### ⬅️ 前提・背景
→ [[AIエージェント]] - Function Callingを活用するエージェントシステム

### ➡️ 発展・結果
（現在関連するノートはありません）

### 🔀 別の視点
→ [[ReActフレームワーク]] - 推論と行動を組み合わせる思考パターン

## 📚 参照元
> [OpenAI Function Calling and API Updates](https://openai.com/index/function-calling-and-other-api-updates/)
> [Anthropic Claude Tool Use Documentation](https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview)
> [Google Gemini Function Calling Guide](https://ai.google.dev/gemini-api/docs/function-calling)