import esbuild from 'esbuild';
import { GasPlugin } from 'esbuild-gas-plugin';
import { glob } from 'glob';
import path from 'path';

// src直下のTSファイルを取得（scriptsディレクトリは除外）
const srcFiles = glob.sync('src/files/*.ts');

// 各ファイルを個別にビルド
const buildPromises = srcFiles.map(file => {
  const name = path.basename(file, '.ts');
  return esbuild.build({
    entryPoints: [file],
    bundle: true,
    outfile: `dist/${name}.js`,
    format: 'iife',
    plugins: [GasPlugin],
  });
});

// すべてのビルドを並行実行
Promise.all(buildPromises).catch((e) => {
  console.error(e);
  process.exit(1);
});
