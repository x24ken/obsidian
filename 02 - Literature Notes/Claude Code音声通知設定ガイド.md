**タイプ**: 📋 Guide

## 📝 一行要約
macOSでiTerm2を使用してClaude Codeのタスク完了時や入力待ち時に音声通知を受け取る設定方法

## 🎯 最終ゴール
[[Claude Code]]のタスク完了時や入力待ち時に音声通知を受け取り、効率的な開発ワークフローを実現する

## 🔧 実行手順
1. **Claude Code通知設定**: `claude config set --global preferredNotifChannel iterm2_with_bell`
2. **macOSシステム通知許可**: システム設定→通知→iTerm2→通知を許可
3. **iTerm2設定調整**: Preferences→Profiles→Terminal→Silence bellをオフ
4. **動作確認**: `echo -e "\a"` でベル音テスト

## ⚠️ 注意点・罠
- **音が鳴らない**: macOS音量設定やiTerm2のSilence bell設定を確認
- **通知表示されない**: おやすみモードやフォーカス設定の影響
- **設定反映されない**: iTerm2の再起動が必要な場合あり

## ✅ 成功の指標
- Claude Codeコマンド実行で音が鳴る
- 通知バナーが表示される
- ベル音テストが正常動作
- 設定が保存されている

## 💡 なぜ重要か
[[Claude Code]]の非同期な処理待ちを音声通知で把握することで、他の作業に集中しながら効率的な開発が可能になる。これは[[Git Work Tree並列化ガイド]]のような複数プロセス管理において特に重要な生産性向上技術となる。

## 🔗 つながり
→ [[Claude Code]], [[Claude Code許可設定ガイド]], [[作成予定-macOS開発環境最適化]]

## 📚 参照元
> [Claude Code Documentation - 通知設定, 2024年実践経験]