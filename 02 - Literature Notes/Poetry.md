**タイプ**: 🔍 Concept

## 📝 一行要約
pyproject.toml前提でnpm/yarnライクな開発体験を提供する、Pythonの依存関係管理とパッケージングツール

## 🎯 核心的定義
PoetryはPythonプロジェクトの依存関係管理、ビルド、公開を統合的に扱うツール。`pyproject.toml`を唯一の設定ファイルとし、`poetry.lock`で決定論的な依存解決を保証する。JavaScript/Node.jsの`npm`や`yarn`と同様の開発体験を目指し、`pip + venv + setup.py`の煩雑さを解消する。

## 🌟 主な構成要素
- **依存関係管理**: `poetry add`でpyproject.tomlとpoetry.lock両方を自動更新
- **仮想環境**: 自動作成・管理（`poetry shell`でアクティベート）
- **ロックファイル**: poetry.lockで全依存の厳密なバージョンを固定
- **パッケージング**: `poetry build`でwheelとsdist生成、`poetry publish`でPyPI公開
- **スクリプト実行**: `poetry run python script.py`で仮想環境内コマンド実行

## 🔄 関連概念との違い
`pip`は依存解決が弱く、`pip freeze`は手動管理が必要。`pipenv`はPoetryの前身的存在だが、開発停滞とパフォーマンス問題で衰退。`PDM`や`uv`はPoetryの後発で高速性を重視。`conda`は科学計算特化で、Pythonパッケージ以外も管理可能だがエコシステムが分断されている。Poetryはpyproject.toml標準化（PEP 621）の推進役となった。

## 💡 なぜ重要か
Pythonの依存関係管理の混沌（pip, venv, setup.py, requirements.txtの組み合わせ）を終わらせた立役者。2018年登場以来、Node.jsのような統一された開発体験をPythonにもたらし、`pyproject.toml`の事実上の標準化を加速させた。「Node.jsにnpmが登場したのと同じくらいの革命」と評される。しかし2024年のuv登場により、2025年現在は「Poetryからuvへの過渡期」に入っている。

## つながり

↔ [[Python依存関係管理の進化]]：pip/requirements.txtからの移行を牽引
→ [[uv]]：Poetryの次世代として登場した超高速ツール
→ [[MCP Python SDK]]：公式SDKもpyproject.toml採用（Poetry互換）
