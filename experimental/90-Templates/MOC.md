# {{title}}

> このトピックの入口ノート

## 主要なノート

-

## 関連するノート（自動）

```dataview
TABLE file.mtime as "更新日"
FROM "01-Zettelkasten"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.mtime DESC
LIMIT 20
```
