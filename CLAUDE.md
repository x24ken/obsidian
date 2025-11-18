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

## Project Overview

This is an Obsidian vault implementing the Zettelkasten note-taking system with 11 distinct template types. The templates are organized by cognitive function: Understanding, Generating, Critiquing, and Integrating.

## Directory Structure

- `00 - Inbox/` - Pre-stage space for raw memos and AI-generated content
- `01 - Feeling Notes/` - Temporary notes for quick capture
- `02 - Literature Notes/` - Structured notes from external sources
- `03 - Permanet notes/` - Permanent notes with original thoughts
- `80 - Image/` - Image attachments
- `99 - Templates/` - Contains Zettelkasten prompt templates

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
- **📋 Guide**: Step-by-step processes or frameworks

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
- **Automatically search** for related notes in `01 - Feeling Notes/` and `02 - Literature Notes/`
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

## Primary Workflow: Inbox → Feeling Notes → Literature Notes

The main purpose of this vault is to progressively refine notes through three stages:

### Stage 1: Inbox (00 - Inbox)
- **Purpose**: Raw capture space for quick memos, titles only, scribbles
- **AI Usage**: When user requests "メモして" or similar, create notes here
- **Content**: Unstructured thoughts, AI-generated initial drafts, quick ideas

### Stage 2: Feeling Notes (01 - Feeling Notes)
- **Process**: Apply `超包括的Zettelkastenプロンプト.md` to Inbox items
- **Purpose**: Transform raw memos into structured Zettelkasten format
- **AI Role**: Use appropriate template from 11 types to structure the content
- **Cleanup**: Delete the original file from `00 - Inbox/` after successful transformation

### Stage 3: Literature Notes (02 - Literature Notes)
- **Process**: Human review and approval of Feeling Notes
- **Purpose**: Finalized, properly formatted Zettelkasten notes
- **Human Role**: Quality check and move approved notes here

## Important Notes

1. All interactions should be in Japanese (日本語で返してください)
2. When user requests "メモして" or similar, create notes in `00 - Inbox/`
3. When modifying notes, preserve the template structure exactly
4. Image files (CleanShot screenshots) are stored in `80 - Image/`
5. The vault uses Zettelkasten methodology - maintain atomic notes with proper linking
6. Core workflow: Inbox → Feeling Notes → Literature Notes (progressive refinement)
7. **Consult o3 MCP**: When facing technical uncertainties, implementation decisions, or need fact-checking, consult o3-search MCP in English for accurate information
8. **o3 MCP Status Check**: Always check if o3-search MCP is working before using it. If it returns timeout errors or fails, immediately inform the user that "o3が現在利用できないため、私の知識で回答します" and proceed with available knowledge

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

