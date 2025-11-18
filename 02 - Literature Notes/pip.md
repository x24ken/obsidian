**タイプ**: 🔍 Concept

## 📝 一行要約
Pythonの公式パッケージインストーラで、2008年登場以来PyPIからパッケージをダウンロード・インストールする標準ツール

## 🎯 核心的定義
`pip`（Pip Installs Packages）はPythonパッケージの検索・インストール・アンインストールを行う公式ツール。PyPI（Python Package Index）と連携し、`pip install パッケージ名`で依存関係を自動解決してインストールする。Python 3.4以降は標準バンドルされ、Pythonエコシステムの基盤インフラとなっている。

## 🌟 主な構成要素
- **パッケージインストール**: `pip install`でPyPIまたはGitHubから取得
- **依存解決**: パッケージ間の依存関係を自動計算（基本的なバックトラック）
- **requirements.txt**: `pip freeze`で現在の環境を出力、`pip install -r`で再現
- **バージョン指定**: `pip install package==1.2.3`で厳密なバージョン固定
- **アップグレード**: `pip install --upgrade`で最新版に更新

## 🔄 関連概念との違い
Poetryやuvはpipをラップまたは置き換えるツール。pipは「インストールのみ」でプロジェクト管理機能（仮想環境、ロックファイル、メタデータ管理）を持たない。npm/yarnのような統合体験はなく、venv/virtualenvと組み合わせる必要がある。conda/mambaはpipと独立した別のパッケージマネージャで、バイナリ依存も管理可能だが、エコシステムが分断されている。

## 💡 なぜ重要か
Pythonパッケージ管理の「最小公倍数」として、全てのツール（Poetry/uv/PDM）がpipと互換性を保つ。2025年現在でも、CI/CD、Docker、クラウド環境の多くが`pip install -r requirements.txt`を前提としており、レガシーシステムや教育現場で依然として主流。Poetryやuvはpipの「上位互換」であり、pipを理解することが全てのPythonツールを理解する出発点となる。

## つながり

→ [[Python依存関係管理の進化]]：第1期（混沌期）の中心ツール
→ [[Poetry]]：pipの上位互換として登場した統合ツール
→ [[uv]]：pip互換を保ちつつ10-100倍高速化
