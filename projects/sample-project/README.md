# Sample Project

## 📋 概要

これはSampleプロジェクトです。
Google Apps Scriptを使用したサンプル実装を含んでいます。

## 🎯 目的・用途

- function1: 基本的なログ出力のサンプル
- function2: 共通ライブラリを使用した処理のサンプル

## 📁 ファイル構成

```
sample-project/
├── src/
│   ├── sample1.ts          # function1のGAS実行ファイル
│   ├── sample2.ts          # function2のGAS実行ファイル
│   └── functions/
│       ├── function1.ts    # 基本機能
│       └── function2.ts    # 共通ライブラリ使用例
├── dist/                   # ビルド出力（.clasp.jsonのrootDir）
│   ├── appsscript.json    # GAS設定ファイル
│   ├── sample1.js         # ビルド済みfunction1
│   └── sample2.js         # ビルド済みfunction2
├── .clasp.json            # GASプロジェクト設定
└── README.md              # このファイル
```

## 🔧 GAS設定情報

### スクリプトID

```
YOUR_SCRIPT_ID_HERE
```

### 実行可能な関数

- `function1`: 基本的なログ出力
- `function2`: 共通ライブラリを使用した処理

### タイムゾーン

Asia/Tokyo

### ランタイム

V8

## 🚀 開発・デプロイ手順

### 1. 開発環境での作業

```bash
# プロジェクトルートから実行

# ビルド
pnpm run build sample-project

# GASにプッシュ
pnpm run push sample-project

# ビルド + プッシュ
pnpm run deploy sample-project
```

### 2. 初回セットアップ

1. Google Apps Scriptでプロジェクトを作成
2. スクリプトIDを`.clasp.json`に設定
3. 必要に応じて共有設定を変更

### 3. トリガー設定

現在、手動実行のみ対応。
必要に応じてGAS管理画面でトリガーを設定してください。

## 🔐 権限・スコープ

### 必要な権限

現在のプロジェクトでは特別な権限は不要です。

### 使用するGoogle APIs

- なし（基本機能のみ）

## 📝 関数仕様

### function1()

- **目的**: 基本的なログ出力のサンプル
- **引数**: なし
- **戻り値**: なし
- **実行時間**: < 1秒
- **制限事項**: なし

### function2()

- **目的**: 共通ライブラリ(Person class)の使用例
- **引数**: なし
- **戻り値**: なし
- **実行時間**: < 1秒
- **制限事項**: なし

## 🐛 既知の問題・制限事項

- なし

## 📊 ログ・モニタリング

### ログの確認方法

1. GAS エディタの「実行ログ」で確認
2. Cloud Loggingでの詳細ログ確認（Stackdriver有効）

### エラー監視

- Google Cloud Console > ログ > Apps Script で確認

## 🔄 更新履歴

### v1.0.0 (YYYY-MM-DD)

- 初期バージョン
- function1, function2の実装

## 👥 関係者・連絡先

### 開発者

- [開発者名]

### レビュワー

- [レビュワー名]

### 運用担当者

- [運用担当者名]

## 📚 参考資料

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [プロジェクト全体のREADME](../../README.md)

## 🚨 緊急時対応

### 障害発生時

1. GAS管理画面で実行ログを確認
2. Cloud Loggingで詳細エラーを確認
3. 必要に応じて開発者に連絡

### ロールバック手順

1. 前のバージョンのコードをデプロイ

```bash
# 例: 特定のコミットをデプロイ
git checkout [前のコミットID]
pnpm run deploy sample-project
git checkout main
```
