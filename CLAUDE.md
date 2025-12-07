# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Priority Stack

When rules conflict, follow this priority order:

1. **正確性（Factual Accuracy）** - 事実の正確さが最優先
2. **アトミック性（Atomicity）** - 1ノート1アイデア
3. **リンク品質（Link Quality）** - 意味のある関係性の説明
4. **テンプレート適合（Template Conformity）** - テンプレート構造の遵守
5. **リンク数目標（Link Count Targets）** - リンク数の推奨値

**例外ポリシー：**
ルールに従えない正当な理由がある場合、1行で理由を説明すれば例外を許可します。

## Memory Type Policy（Tulvingの記憶分類に基づく）

このVaultに残すのは**意味記憶**と**エピソード記憶**のみ。**手続き記憶（ハウツー・手順書）は残さない**。

### 残さないノートの例（手続き記憶）
- 技術的な設定手順・コマンド例（AIに聞けば済む）
- 使い分けガイド・選定ガイド（AIに聞けば済む）
- 長いステップバイステップのガイド（見返さない）

### 残すノートの例
- **意味記憶**: 概念の定義、理論、比喩による理解（例：`LSPの翻訳者例え話.md`）
- **エピソード記憶**: 個人的な体験、ケーススタディ
- **身体化すべきTips**: タイトルだけで思い出せる短い教訓（例：`悩んだら紙に書け.md`）

### 判断基準
ノート作成時に自問する：
1. 「これはAIに聞けば毎回正確に教えてくれるか？」→ Yes なら残さない
2. 「このノートを見返すか？」→ No なら残さない
3. 「タイトルだけで価値が伝わるか？」→ No なら残さないか、タイトルを改善

## Project Overview

This is an Obsidian vault implementing the Zettelkasten note-taking system with 11 distinct template types. The templates are organized by cognitive function: Understanding, Generating, Critiquing, and Integrating.

## Directory Structure

- `00 - Inbox/` - Pre-stage space for raw memos and AI-generated content
- `01 - Fleeting Notes/` - Temporary notes for quick capture (renamed from Feeling Notes)
- `02 - Literature Notes/` - **AI-generated** structured knowledge notes
- `03 - Permanent Notes/` - **Human-written** original thoughts and insights
- `80 - Image/` - Image attachments
- `99 - Templates/` - Contains Zettelkasten prompt templates

### Note Authorship Distinction
- **02 - Literature Notes/**: AIが生成した知識ノート（検索・参照用）
- **03 - Permanent Notes/**: 人間が自分の言葉で書いた洞察（本当の価値）

## Note Creation Guidelines

### Template Selection
When creating or modifying notes, use the `超包括的Zettelkastenプロンプト.md` template to determine the appropriate format from 11 available templates:

**A. Understanding (理解する)**
- **🔍 Concept**: Core ideas, theories, definitions
- **📝 Case**: Specific experiences, examples, project records
- **🧩 Pattern**: Reproducible structures, laws, regularities

**B. Generating (生成する)**
- **❓ Question**: Problem statements, inquiries, research topics
- **🧪 Hypothesis**: Testable hypotheses, speculations, "what if" scenarios
- **💡 Tips**: Practical heuristics, reminders, rules of thumb

**C. Critiquing (批判する)**
- **📊 Analysis**: Critical evaluation, comparison, data interpretation
- **⚖️ Debate**: Opposing viewpoints, paradoxes, controversies

**D. Integrating (統合する)**
- **🔗 Connection**: Relationships between multiple notes/domains
- **💭 Insight**: "Aha!" moments, insights, idea integration

### File Naming Convention (All 11 Types)
All files use Japanese names without emojis. The template type is identified by metadata:
- **All templates**: `[日本語タイトル].md`
- Examples: `esbuild.md`, `JavaScriptバンドラー.md`, `Tailwind CSS v4 UIライブラリ公開術.md`

### Linking Rules
**CRITICAL**: Only create [[]] links to files that actually exist in the vault:
- Check if the file exists before creating a link
- Use exact file names
- Do not create links to abstract concepts that don't have corresponding files
- Convert non-existent concept links to plain text
- **If there are no relevant existing notes for a connection category, write "（現在関連するノートはありません）" instead of creating fictional links**

**Link Format** (シンプルな矢印形式):
- `← [[ノート名]]：関係性の説明` - 元になった考え・前提
- `↔ [[ノート名]]：関係性の説明` - 同レベルの関連・別視点  
- `→ [[ノート名]]：関係性の説明` - 発展・応用・実践例

**Zettelkasten Linking Rules** (厳格な品質基準):

1. **つながりの数: 1-3個推奨（柔軟）**
   - **推奨**: 作成時に1-3個の強いリンクを目指す
   - **0個も許可**: 新しいアイデアや初期段階のノートは0個から始めてOK
   - **上限なし**: 意味のあるリンクなら5個以上も可
   - **原則**: 理由を1文で説明できないリンクは作らない
   - **注意**: 硬直的なクォータは避ける（弱いリンクを捏造する原因になる）

2. **リンクを作る4つの基準**:
   - **継続（Continuation）**: 前のアイデアを拡張・修正・例示
   - **対比（Contrast）**: 異なる視点や対立する考え
   - **橋渡し（Bridge）**: 通常出会わない文脈をつなぐ
   - **変容（Transformation）**: 組み合わせで新しい洞察を生む

3. **リンクを作らない場合**:
   - 単なる分類（`[[JavaScript]]`のような分類タグ的リンク）
   - 関係性を説明できない
   - 完全性のためだけの網羅的リンク

4. **品質チェック**:
   - 各リンクに「：」の後に関係性の具体的説明を必須
   - 双方向性の確保（リンク先にも逆リンクがあるか）
   - 定期的な剪定（弱いリンクの削除）

Example (Good):
```markdown
## つながり

← [[JavaScriptビルドツール進化史]]：速度問題への解答として登場
↔ [[Rollup]]：速度vs最適化のトレードオフ関係
→ [[Vite]]：開発環境での高速性を活かした実装
```

Example (Bad):
```markdown
## つながり

← [[JavaScript]]：JavaScriptの話だから
← [[プログラミング]]：プログラミングツール
→ [[ツール1]]：関連ツール
→ [[ツール2]]：関連ツール
→ [[ツール3]]：関連ツール
→ [[ツール4]]：関連ツール
```

### Auto-Linking for Zettelkasten Notes
When creating or updating notes with Zettelkasten templates:
- **Automatically search** for related notes in `01 - Fleeting Notes/` and `02 - Literature Notes/`
- **Analyze file names** to identify conceptually related notes
- **Add meaningful links** based on actual topical relationships, not just creation order
- **Avoid arbitrary links** - only link notes that share conceptual, methodological, or practical connections

### References Policy
**IMPORTANT: Do NOT include reference/citation sections in notes.**
- The user does not review references after note creation
- References were removed from all existing notes as of 2025-11-18
- Focus on note content and connections instead of tracking sources

### Common Tasks

To check existing files in Literature Notes:
```bash
ls -la "02 - Literature Notes/"
```

To verify a link target exists:
```bash
ls "02 - Literature Notes/" | grep -i "filename"
```

## Obsidian Configuration

- New files default location: `00 - Inbox/`
- Attachments folder: `80 - Image/`
- Always update links when moving files: enabled

## Primary Workflow: Inbox → Fleeting Notes → Literature Notes → Permanent Notes

The main purpose of this vault is to progressively refine notes through four stages:

### Stage 1: Inbox (00 - Inbox)
- **Purpose**: Raw capture space for quick memos, titles only, scribbles
- **AI Usage**: When user requests "メモして" or similar, create notes here
- **Content**: Unstructured thoughts, AI-generated initial drafts, quick ideas

### Stage 2: Fleeting Notes (01 - Fleeting Notes)
- **Process**: Apply `超包括的Zettelkastenプロンプト.md` to Inbox items
- **Purpose**: Transform raw memos into structured Zettelkasten format
- **AI Role**: Use appropriate template from 11 types to structure the content
- **Cleanup**: Delete the original file from `00 - Inbox/` after successful transformation

### Stage 3: Literature Notes (02 - Literature Notes)
- **Process**: Human review and approval of Fleeting Notes
- **Purpose**: **AI-generated** finalized Zettelkasten notes (reference/search)
- **Human Role**: Quality check and move approved notes here

### Stage 4: Permanent Notes (03 - Permanent Notes)
- **Process**: Human writes original insights based on reading Literature Notes
- **Purpose**: **Human-written** thoughts in own words (true value)
- **Key Principle**: Only human can write Permanent Notes - these are the real Zettelkasten

```
AIに質問 → 02にAI生成ノート保存
                ↓
      自分で読んで咀嚼
                ↓
      自分の言葉で洞察 → 03に手書きノート
```

## Permanent Notes Format（超シンプル）

**テンプレートなし。自由に書く。ただし以下を守る：**

### タイトル = 主張形式
- ✅ 「意味記憶は、Obsidianにまとめる」（主張）
- ✅ 「人間は、エピソード記憶を増やすことに集中しよう」（主張）
- ❌ 「記憶について」（トピック）
- ❌ 「Tulvingの記憶分類」（概念名だけ）

### 本文の構造（最小限）
```markdown
# [主張形式のタイトル]

[なぜそう思うか？自分の言葉で3-6文]

## つながり
- [[関連ノート]]：どう関連するか
```

### 良いPermanent Noteの例
```markdown
# 意味記憶は、Obsidianにまとめる

長期記憶には3種類ある。
そのうち意味記憶（概念・理論・事実）は外部化できる。

なぜなら、意味記憶は「いつ・どこで学んだか」を忘れても価値が残るから。
本や記事で学んだ知識は、自分の頭になくても検索できれば十分。

だから、意味記憶はObsidianに、体験は人間に残す。

## つながり
- [[手続き記憶は、CLAUDE.mdにまとめる]]：3種類の記憶の分担
- [[人間は、エピソード記憶を増やすことに集中しよう]]：人間にしかできないこと
```

### Permanent Notes の品質チェック
1. **タイトルは主張か？** → 「〜は、〜する」「〜べき」形式
2. **なぜ？が書いてあるか？** → 理由・根拠が自分の言葉で
3. **つながりがあるか？** → 最低1つのリンク（なければ孤立ノート）
4. **短いか？** → 長くなったら分割を検討
5. **Feynmanテスト** → ノートを見ずに口で説明できるか？

### AI校正ルール（Permanent Notes）

**原則**: AIは「鏡」として使う。書き直しはさせない。

**やっていいこと（白リスト）**:
- 誤字脱字の指摘（修正案をリストで提示、適用は人間が判断）
- 曖昧な部分を**質問形式**で指摘（「ここは〜という意味？」）
- リンク候補の提案（「[[〇〇]]と関連あるかも」）
- 構造チェック（1ノート1アイデアになっているか）

**やってはいけないこと（黒リスト）**:
- 文章の書き直し・リライト
- 「もっと良くして」「読みやすくして」への対応
- 要約・拡張・言い換え
- 同義語への置き換え

**AIへの指示例**:
```
誤字脱字だけ指摘して。文章は変えないで。
```
```
このノートに曖昧な部分があれば質問形式で教えて。
```

## Important Notes

1. All interactions should be in Japanese (日本語で返してください)
2. When user requests "メモして" or similar, create notes in `00 - Inbox/`
3. When modifying notes, preserve the template structure exactly
4. Image files (CleanShot screenshots) are stored in `80 - Image/`
5. The vault uses Zettelkasten methodology - maintain atomic notes with proper linking
6. Core workflow: Inbox → Fleeting Notes → Literature Notes → Permanent Notes
7. **AI writes to 02, Human writes to 03**: AIはLiterature Notesを生成、人間だけがPermanent Notesを書く
8. **Consult o3 MCP**: When facing technical uncertainties, implementation decisions, or need fact-checking, consult o3-search MCP in English for accurate information
9. **o3 MCP Status Check**: Always check if o3-search MCP is working before using it. If it returns timeout errors or fails, immediately inform the user that "o3が現在利用できないため、私の知識で回答します" and proceed with available knowledge

## Security and Privacy Rules

**CRITICAL - NEVER VIOLATE THESE RULES:**

- **NEVER include API keys, tokens, passwords, or any credentials in notes**
- **ALWAYS use environment variables** (`process.env.API_KEY`) or placeholders (`YOUR_API_KEY_HERE`) in code examples
- If actual credentials are needed, suggest using `.env` files and verify they are in `.gitignore`
- Ask user for confirmation before creating notes that might contain sensitive information

**Bad Example:**
```javascript
const apiKey = "SG.abc123..."  // ❌ ABSOLUTELY FORBIDDEN
```

**Good Example:**
```javascript
const apiKey = process.env.SENDGRID_API_KEY  // ✅ Correct
```

