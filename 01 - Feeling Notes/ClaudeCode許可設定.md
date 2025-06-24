#claude
## 各設定項目の説明

**`defaultMode: "accept"`**

- 全ての操作を自動的に許可します
- `"prompt"`（デフォルト）だと毎回確認が必要
- `"acceptEdits"`だとファイル編集のみ自動許可

**`allow`配列の権限**

- `"Read"`: ファイル読み取り
- `"Write"`: ファイル作成・書き込み
- `"Edit"`: ファイル編集
- `"MultiEdit"`: 複数ファイル同時編集
- `"Bash"`: シェルコマンド実行
- `"Grep"`: コード検索
- `"WebFetch"`: Web取得
- `"WebSearch"`: Web検索
- `"Task"`: サブエージェント作成

## より安全な設定（推奨）

完全に制限なしにするのではなく、危険なコマンドだけ制限する方法も推奨されます：

```json
{
  "permissions": {
    "defaultMode": "accept",
    "allow": [
      "Read",
      "Write", 
      "Edit",
      "MultiEdit",
      "Bash",
      "Grep",
      "WebFetch",
      "WebSearch",
      "Task"
    ],
    "deny": [
      "Bash(sudo:*)",
      "Bash(rm -rf:*)",
      "Bash(curl:*)",
      "Edit(/etc/**)",
      "Edit(/usr/**)"
    ]
  }
}
```