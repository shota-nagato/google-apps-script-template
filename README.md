# GAS Multi-Project Management

複数のGoogleAppsScriptプロジェクト・ファイルをGitHub管理する

## 📁 プロジェクト構成

```
projects/
├── sample-project/         # サンプルプロジェクト
│   ├── src/
│   │   ├── sample1.ts      # function1をGASで実行できるように定義 GASプロジェクトでsample1.gsとしてデプロイされる
│   │   ├── sample2.ts      # function2をGASで実行できるように定義 GASプロジェクトでsample2.gsとしてデプロイされる
│   │   └── functions/      # 個別機能ファイル
│   │       ├── function1.ts
│   │       └── function2.ts
│   ├── dist/               # ビルド出力
│   │   ├── appsscript.json # プロジェクト固有の設定ファイル
│   │   ├── sample1.js
│   │   └── sample2.js
│   ├── .clasp.json         # プロジェクトのIDなどを管理 Git管理していないので、新規作成or担当者にScriptIDを確認
│   ├── .clasp.json.example # .clasp.jsonの設定例
│   └── REAMDME.md          # プロジェクトの説明
│
├── project-a/              # プロジェクトA
│
scripts/
└── gas-manager.sh          # ビルド・デプロイコマンドの管理
shared/                     # 共通処理を管理
├── clients/                # 外部API処理
└── utils/                  # 共通関数
```

## 🚀 使い方

### プロジェクト一覧の確認

```bash
pnpm run list
```

### ビルド

```bash
# 特定プロジェクトのビルド
pnpm run build sample-project
pnpm run build project-a

# 全プロジェクトのビルド
pnpm run build all
```

### プッシュ（GASへのアップロード）

```bash
# 特定プロジェクトのプッシュ
pnpm run push sample-project
pnpm run push project-a

# 全プロジェクトのプッシュ
pnpm run push all
```

### デプロイ（ビルド + プッシュ）

```bash
# 特定プロジェクトのデプロイ
pnpm run deploy sample-project
pnpm run deploy project-a

# 全プロジェクトのデプロイ
pnpm run deploy all
```

### 直接スクリプト実行

```bash
# シェルスクリプトを直接実行する場合
./scripts/gas-manager.sh help
./scripts/gas-manager.sh build sample-project
./scripts/gas-manager.sh deploy all
```

## ⚙️ 新しいプロジェクトの追加

1. プロジェクトディレクトリを作成

```bash
mkdir -p projects/project-c/src/functions projects/project-c/dist
```

2. `appsscript.json`を作成

```bash
cat > projects/project-c/dist/appsscript.json << 'EOF'
{
  "timeZone": "Asia/Tokyo",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
EOF
```

3. `.clasp.json`を作成

```bash
cat > projects/project-c/.clasp.json << 'EOF'
{
  "scriptId": "YOUR_SCRIPT_ID_HERE",
  "rootDir": "dist",
  "scriptExtensions": [".js", ".gs"],
  "htmlExtensions": [".html"],
  "jsonExtensions": [".json"],
  "filePushOrder": [],
  "skipSubdirectories": false
}
EOF
```

4. TypeScript ファイルを作成

- `projects/project-c/src/functions/`に個別機能
- `projects/project-c/src/`にまとめファイル

5. プロジェクトが自動認識されることを確認

```bash
pnpm run list
```

> **注意**:
>
> - `YOUR_SCRIPT_ID_HERE`を実際のGoogle Apps ScriptのスクリプトIDに置き換えてください
> - 新しいプロジェクトを追加しても、`package.json`のscriptsセクションを変更する必要はありません
> - `gas-manager.sh`が自動的にプロジェクトを検出します

## 📝 コード例

### functions 配下の個別機能

```typescript
// projects/project-a/src/functions/aaa1.ts
export function aaa1Function(): void {
  console.log('This is aaa1 function')
}
```

### まとめファイル

```typescript
// projects/project-a/src/aaa.ts
import { aaa1Function } from './functions/aaa1'

declare const global: { [key: string]: unknown }
global.aaa1Function = aaa1Function
```

## 📚 共通ライブラリ

### utils/ - 共通ユーティリティ

プロジェクト間で共有できる汎用的な関数群

### clients/ - 共通クライアント

外部 API 接続や GAS 共通処理

## 🎯 利点

- **プロジェクト分離**: 各 GAS プロジェクトが独立して管理される
- **ファイル分割**: 機能ごとにファイルを分けて GAS の行数制限を回避
- **共通ライブラリ**: utils/clients/で再利用可能なコード管理
- **統一されたコマンド**: シェルスクリプトによる一元管理でコマンド体系を統一
- **自動プロジェクト検出**: 新しいプロジェクトが自動的に認識される
- **色付きメッセージ**: 成功/エラー/警告が視覚的に分かりやすい
- **型安全**: TypeScript による型チェック
- **効率的デプロイ**: プロジェクト別・一括デプロイ対応

## 🔧 トラブルシューティング

### エラー: プロジェクトの .clasp.json が見つかりません

```bash
cd projects/your-project
clasp create --type standalone
```

### プロジェクトが一覧に表示されない

`projects/`ディレクトリ直下にプロジェクトフォルダが配置されているか確認してください。

### ビルドエラーが発生する

プロジェクトの`src/`ディレクトリに`.ts`ファイルが存在するか確認してください。
