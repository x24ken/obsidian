【タスク】: Claude Codeの音声通知設定
【対象レベル】: 中級者（macOS、iTerm2の基本操作ができる）

## 🎯 このガイドのゴール
[[macOS]]で[[iTerm2]]を使用して[[Claude Code]]のタスク完了時や入力待ち時に音声通知を受け取れるようになる

## ⏱️ 所要時間
約10-15分

## 🧰 必要なもの
- [[macOS]]環境
- [[iTerm2]]がインストール済み
- [[Claude Code]]がインストール済み
- システム管理者権限

## 📝 手順概要
1. [[Claude Code]]の通知設定を有効化
2. [[macOS]]システム通知の許可設定
3. [[iTerm2]]の詳細設定調整
4. 動作確認とテスト

## 🔧 詳細手順

### Step 1: Claude Codeの通知設定

```bash
claude config set --global preferredNotifChannel iterm2_with_bell
```

**推奨オプション：**
- `iterm2_with_bell`：[[iTerm2]]専用の通知＋ベル音
- `terminal_bell`：汎用的なターミナルベル

### Step 2: macOSシステム通知の許可

1. **[[システム設定]]**を開く
2. **通知**をクリック
3. **[[iTerm2]]**を探してクリック
4. **通知を許可**をオンにする
5. お好みで**バナー**や**サウンド**も有効化

### Step 3: iTerm2の設定調整

#### プロファイル設定手順
1. [[iTerm2]]を開く
2. **iTerm2 → Preferences** (`Cmd + ,`)
3. **Profiles**タブを選択
4. 使用中のプロファイルを選択
5. **Terminal**タブをクリック

#### 推奨設定項目
- **Silence bell**: **オフ**（音を鳴らすため）
- **Flash screen when bell rings**: お好みで設定
- **Send escape sequence-generated alerts**: **オン**
- **Notification settings**: 遅延時間設定（例：1秒）

### Step 4: 動作確認

```bash
# ベル音テスト
echo -e "\a"

# Claude Codeでテスト
claude -p "Hello world"
```

## ✅ 完了チェック
- [ ] [[Claude Code]]コマンド実行で音が鳴る
- [ ] 通知バナーが表示される
- [ ] ベル音テストが正常動作
- [ ] 設定が保存されている

## 🚨 よくある失敗と対策

### 音が鳴らない場合
1. **[[macOS]]音量設定確認**
   - システム音量がミュートでない
   - 通知音量が適切に設定
2. **[[iTerm2]]設定再確認**
   - 「Silence bell」がオフ
   - 正しいプロファイルで設定
3. **[[Claude Code]]設定確認**
   ```bash
   claude config get preferredNotifChannel
   ```

### 通知が表示されない場合
- [[macOS]]の**[[おやすみモード]]**を確認
- [[iTerm2]]がフォーカスされていない時のみ通知表示される設定の可能性

## 🔄 関連リンク
- 上位ガイド：[[Claude Codeとは？]]
- 関連設定：[[ClaudeCode許可設定]]
- 詳細設定：[[Claude Codeにコマンドを追加する]]

## 🚀 次のステップ
- [[Claude Code]]の詳細機能設定
- [[Git Work Treeを使用して Claude コードを並列化する方法]]
- 高度な[[自動化スクリプト]]作成