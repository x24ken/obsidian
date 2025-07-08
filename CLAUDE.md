# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Obsidian vault implementing the Zettelkasten note-taking system with 11 distinct template types. The templates are organized by cognitive function: Understanding, Generating, Critiquing, and Integrating.

## Directory Structure

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

- New files default location: `01 - Feeling Notes/`
- Attachments folder: `80 - Image/`
- Always update links when moving files: enabled

## Primary Workflow: Feeling Notes → Literature Notes

The main purpose of this vault is to transform notes from `01 - Feeling Notes/` into properly formatted Zettelkasten notes:

1. **Check Feeling Notes**: Review files in `01 - Feeling Notes/` for unprocessed notes
2. **Apply Zettelkasten Template**: Use `超包括的Zettelkastenプロンプト.md` to transform the note
3. **Human Review**: The user will review and move approved notes to `02 - Literature Notes/`

## Important Notes

1. All interactions should be in Japanese (日本語で返してください)
2. When modifying notes, preserve the template structure exactly
3. Image files (CleanShot screenshots) are stored in `80 - Image/`
4. The vault uses Zettelkasten methodology - maintain atomic notes with proper linking
5. Focus on transforming Feeling Notes - this is the core workflow