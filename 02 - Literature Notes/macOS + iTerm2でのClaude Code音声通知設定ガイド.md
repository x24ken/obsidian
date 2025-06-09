## 概要

macOSでiTerm2を使用してClaude Codeの音声通知を設定する方法を、ステップバイステップで説明します。この設定により、Claude Codeがタスクを完了したり入力待ちになったりした際に、音で知らせてくれるようになります。

## 基本設定手順

### 1. Claude Codeの通知設定

まず、Claude Codeで通知機能を有効にします：

```bash
claude config set --global preferredNotifChannel iterm2_with_bell
```

**推奨オプション：**

- `iterm2_with_bell` - iTerm2専用の通知＋ベル音
- `terminal_bell` - 汎用的なターミナルベル（iTerm2以外でも使用可能）

### 2. macOSシステム通知の許可設定

1. **システム設定** を開く
2. **通知** をクリック
3. **iTerm2** を探してクリック
4. **通知を許可** をオンにする
5. お好みで **バナー** や **サウンド** も有効にする

### 3. iTerm2の詳細設定

#### プロファイル設定

1. iTerm2を開く
2. **iTerm2 → Preferences** (または `Cmd + ,`)
3. **Profiles** タブを選択
4. 使用中のプロファイルを選択
5. **Terminal** タブをクリック

#### 推奨設定項目

- **Silence bell**: **オフ** にする（音を鳴らすため）
- **Flash screen when bell rings**: お好みで設定
- **Send escape sequence-generated alerts**: **オン** にする
- **Notification settings**: 通知の遅延時間を設定（例：1秒）

## 動作確認方法

設定完了後、以下の方法で動作を確認できます：

1. ターミナルで `echo -e "\a"` を実行してベル音をテスト
2. Claude Codeでファイル読み込みなどの処理を実行し、完了時に音が鳴るか確認

## トラブルシューティング

### 音が鳴らない場合

1. **macOSの音量設定を確認**
    
    - システム音量がミュートになっていないか
    - 通知音量が適切に設定されているか
2. **iTerm2のプロファイル設定を再確認**
    
    - 「Silence bell」がオフになっているか
    - 正しいプロファイルで設定しているか
3. **Claude Codeの設定を確認**
    
    ```bash
    claude config get preferredNotifChannel
    ```
    

### 通知が表示されない場合

- macOSの**おやすみモード**がオンになっていないか確認
- iTerm2が**フォーカスされていない**時のみ通知が表示される設定になっている可能性

## 設定のカスタマイズ

### 音の種類を変更したい場合

iTerm2のPreferences → Profiles → Terminal → Notification settingsで、通知音をカスタマイズできます。

### より高度な通知が必要な場合

macOSの通知センターと連携したい場合は、以下のコマンドも併用できます：

```bash
# Claude Codeの処理後に通知を送信
osascript -e 'display notification "Claude Code処理完了" with title "通知"'
```

## まとめ

この設定により、Claude Codeでの作業中に他のタスクに集中していても、処理完了や入力待ちの際に確実に気づくことができるようになります。特にiTerm2の豊富な通知オプションを活用することで、より効率的な開発環境を構築できます。