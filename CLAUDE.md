# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Obsidian vault implementing the Zettelkasten note-taking system with a specific three-template structure. All notes should follow one of three template formats: Concept (🔍), Guide (📋), or Tips (💡).

## Directory Structure

- `01 - Feeling Notes/` - Temporary notes for quick capture
- `02 - Literature Notes/` - Structured notes from external sources
- `03 - Permanet notes/` - Permanent notes with original thoughts
- `80 - Image/` - Image attachments
- `99 - Templates/` - Contains Zettelkasten prompt templates

## Note Creation Guidelines

### Template Selection
When creating or modifying notes, use the `🤖Zettelkastenプロンプト.md` template to determine the appropriate format:

- **🔍 Concept**: For definitions, explanations, "what is" content
- **📋 Guide**: For step-by-step instructions, procedures, how-to content  
- **💡 Tips**: For quick tricks, efficiency hacks, short solutions

### File Naming Convention
- **Concept**: `🔍キーワード.md` (e.g., 🔍Zettelkasten.md)
- **Guide**: `📋◯◯ガイド.md` (e.g., 📋Obsidian設定ガイド.md)
- **Tips**: `💡自由な表現.md` (e.g., 💡ノート作成を爆速化する3つの技.md)

### Linking Rules
**CRITICAL**: Only create [[]] links to files that actually exist in the vault:
- Check if the file exists before creating a link
- Use exact file names including prefixes (🔍, 📋, 💡)
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

1. **Check Feeling Notes**: Review files in `01 - Feeling Notes/` for unprocessed notes (no emoji prefix)
2. **Apply Zettelkasten Template**: Use `🤖Zettelkastenプロンプト.md` to transform the note
3. **Add Emoji Prefix**: Processed files get an emoji prefix (🔍, 📋, or 💡) to mark completion
4. **Human Review**: The user will review and move approved notes to `02 - Literature Notes/`

### Processing Status
- **No emoji prefix** = Unprocessed, needs transformation
- **Has emoji prefix** (🔍/📋/💡) = Processed and ready for human review

## Important Notes

1. All interactions should be in Japanese (日本語で返してください)
2. When modifying notes, preserve the template structure exactly
3. Image files (CleanShot screenshots) are stored in `80 - Image/`
4. The vault uses Zettelkasten methodology - maintain atomic notes with proper linking
5. Focus on transforming Feeling Notes - this is the core workflow