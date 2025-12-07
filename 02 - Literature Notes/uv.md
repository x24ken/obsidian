**タイプ**: 🔍 Concept

## 📝 一行要約
Rust製で10-100倍高速なPythonパッケージマネージャで、Astral社がPythonツールチェーン統一を目指して開発

## 🎯 核心的定義
`uv`はRuffの開発元Astral社が2024年にリリースした超高速Pythonパッケージマネージャ。Rust製でpipやPoetryより10-100倍高速、かつpip/Poetry/pipenv/pyenvの機能を統合し、「一つのツールで全てを」というNode.jsのnpmやRustのCargoのような統一体験を目指す。pyproject.toml完全対応で、uv.lockで決定論的依存解決を提供。

## 🌟 主な構成要素
- **超高速依存解決**: Rust製で並列処理最適化、グローバルキャッシュで重複ダウンロード回避
- **統合ツールチェーン**: パッケージ管理 + 仮想環境 + Pythonバージョン管理を一本化
- **pip互換**: `uv pip install`でpip置き換え、既存プロジェクトへの導入障壁が低い
- **uv.lock**: poetry.lock相当の決定論的ロックファイル
- **プロジェクト管理**: `uv init`/`uv add`/`uv run`でPoetryライクな体験

## 🔄 関連概念との違い
Poetryは依存解決が遅く（Python製）、複雑な依存グラフで数分かかることも。uvは同じ処理を数秒で完了。PDMもPython製で高速化に限界。pipはロックファイル非対応で再現性が弱い。condaは科学計算特化で汎用性に欠ける。uvはRuffと同じくRust製で、「Pythonツールの遅さ」問題を根本解決し、さらにツール統合でDX（開発者体験）を向上させた。

## 💡 なぜ重要か
PoetryがもたらしたNode.js的体験を、さらに高速化・統合化して「次世代標準」を狙う。2024-2025年は「Poetry安定期からuv移行期」で、Astral社のRuff（linter/formatter）+ uv（パッケージマネージャ）がPythonツールチェーンのデファクトスタンダードになる可能性が高い。速度だけでなく、pyenv不要のPythonバージョン管理機能が決定的な差別化要因。

## つながり

↔ [[Python依存関係管理の進化]]：requirements.txt→Poetry→uvの進化
