**タイプ**: 🔍 Concept

## 📝 一行要約
AST（Abstract Syntax Tree）は、プログラムコードを木構造のデータとして表現したもので、コンパイラやコード解析ツールがコードを「理解」するための中間表現。

## 🎯 核心的定義
ASTは、ソースコードから余分な情報（空白、コメント、括弧など）を取り除き、プログラムの本質的な構造だけを階層的な木構造で表現したデータ構造。各ノードはプログラムの構成要素（関数、変数、演算子など）を表し、親子関係でコードの構造を表現する。

## 🌟 主な構成要素
- **ルートノード**: プログラム全体を表す最上位ノード
- **中間ノード**: 関数定義、条件分岐、ループなどの構造
- **リーフノード**: 変数名、リテラル値などの終端要素

## 🔄 関連概念との違い
### コードとASTの対比例
```javascript
// 元のコード
function add(a, b) {
  return a + b;
}

// AST表現（簡略化）
FunctionDeclaration
├── Identifier: "add"
├── Parameters
│   ├── Identifier: "a"
│   └── Identifier: "b"
└── BlockStatement
    └── ReturnStatement
        └── BinaryExpression: "+"
            ├── Identifier: "a"
            └── Identifier: "b"
```

### 具体例：条件分岐のAST
```javascript
// コード
if (x > 10) {
  console.log("大きい");
}

// AST
IfStatement
├── BinaryExpression: ">"
│   ├── Identifier: "x"
│   └── Literal: 10
└── BlockStatement
    └── CallExpression
        ├── MemberExpression
        │   ├── Identifier: "console"
        │   └── Identifier: "log"
        └── Arguments
            └── Literal: "大きい"
```

## 💡 なぜ重要か
ASTは、コードを「文字列」ではなく「構造」として扱えるようにする根幹技術。これにより：
1. **セマンティック検索**: 「変数xを使う条件分岐」のような意味的な検索が可能
2. **リファクタリング**: 構造を保ちながら安全にコード変更
3. **静的解析**: バグやコード品質の自動チェック
4. **トランスパイル**: 異なる言語への変換（TypeScript→JavaScript等）

特にSerenaのようなツールでは、ASTによってコードの「意味」を理解し、単純な文字列マッチングを超えた高度な検索・編集が実現される。

## つながり
← [[セマンティックコード検索の技術アーキテクチャ]]：ASTを活用する上位技術
→ [[セマンティックコード検索の真髄]]：AST解析による意味理解の実現

## 📚 参照元
> 個人体験とプログラミング言語理論, 2025-07-31