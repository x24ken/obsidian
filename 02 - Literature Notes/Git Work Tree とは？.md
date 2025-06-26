
`git worktree` を使うと、一つのローカルリポジトリで作業ツリーを複数同時に持てる

![[CleanShot 2025-06-10 at 17.29.54.png]]

ワークツリーをmainから追加
```
gw add .worktrees/hotfix main
```

.worktrees/hotfixに移動すれば、mainブランチに変わり、そこでブランチを生やして作業できる
