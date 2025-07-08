# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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