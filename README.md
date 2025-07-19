# GAS Multi-Project Management

複数の Google Apps Script プロジェクトを効率的に管理するための開発環境です。

## 📁 プロジェクト構成

```
projects/
├── project-a/              # プロジェクトA（既存機能）
│   ├── src/
│   │   ├── aaa.ts          # AAAグループ機能
│   │   ├── bbb.ts          # BBBグループ機能
│   │   ├── index.ts        # サンプル機能
│   │   └── functions/      # 個別機能ファイル
│   │       ├── aaa1.ts
│   │       ├── aaa2.ts
│   │       ├── bbb1.ts
│   │       ├── bbb2.ts
│   │       └── sample.ts
│   ├── dist/               # ビルド出力
│   │   ├── aaa.js
│   │   ├── bbb.js
│   │   └── index.js
│   └── .clasp.json
│
├── project-b/              # プロジェクトB（Gmail & Sheets）
│   ├── src/
│   │   ├── email.ts        # Gmail機能
│   │   ├── sheet.ts        # Spreadsheet機能
│   │   └── functions/
│   │       ├── email1.ts
│   │       └── sheet1.ts
│   ├── dist/
│   │   ├── email.js
│   │   └── sheet.js
│   └── .clasp.json
│
utils/                      # 共通ユーティリティ
clients/                    # 共通クライアント
└── build.js               # 共通ビルドスクリプト
```

## 🚀 使い方

### ビルド

```bash
# 特定プロジェクトのビルド
pnpm run build:project-a
pnpm run build:project-b

# 全プロジェクトのビルド
pnpm run build:all
```

### デプロイ

```bash
# 特定プロジェクトのデプロイ
pnpm run deploy:project-a
pnpm run deploy:project-b

# 全プロジェクトのデプロイ
pnpm run deploy:all
```

### プッシュのみ（ビルド済みの場合）

```bash
pnpm run push:project-a
pnpm run push:project-b
```

## ⚙️ 新しいプロジェクトの追加

1. プロジェクトディレクトリを作成

```bash
mkdir -p projects/project-c/src/functions projects/project-c/dist
```

2. `.clasp.json`を作成

```json
{
  "scriptId": "YOUR_SCRIPT_ID_HERE",
  "rootDir": "dist",
  "scriptExtensions": [".js", ".gs"],
  "htmlExtensions": [".html"],
  "jsonExtensions": [".json"],
  "filePushOrder": [],
  "skipSubdirectories": false
}
```

3. `package.json`にスクリプトを追加

```json
{
  "scripts": {
    "build:project-c": "node build.js project-c",
    "push:project-c": "cd projects/project-c && clasp push",
    "deploy:project-c": "pnpm run build:project-c && pnpm run push:project-c"
  }
}
```

4. TypeScript ファイルを作成

- `projects/project-c/src/functions/`に個別機能
- `projects/project-c/src/`にまとめファイル

## 📝 コード例

### functions 配下の個別機能

```typescript
// projects/project-a/src/functions/aaa1.ts
export function aaa1Function(): void {
  console.log("This is aaa1 function");
}
```

### まとめファイル

```typescript
// projects/project-a/src/aaa.ts
import { aaa1Function } from "./functions/aaa1";

declare const global: { [key: string]: any };
global.aaa1Function = aaa1Function;
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
- **共通ビルド**: 統一されたビルドシステム
- **型安全**: TypeScript による型チェック
- **効率的デプロイ**: プロジェクト別・一括デプロイ対応
