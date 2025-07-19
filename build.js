import esbuild from 'esbuild'
import { GasPlugin } from 'esbuild-gas-plugin'
import { glob } from 'glob'
import path from 'path'
import { fileURLToPath } from 'url'
import process from 'process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectName = process.argv[2]
if (!projectName) {
  console.error(
    'プロジェクト名を指定してください: node build.js <project-name>',
  )
  process.exit(1)
}

const projectDir = path.join(__dirname, 'projects', projectName)
const srcDir = path.join(projectDir, 'src')
const distDir = path.join(projectDir, 'dist')

import fs from 'fs'
if (!fs.existsSync(srcDir)) {
  console.error(
    `プロジェクト "${projectName}" のsrcディレクトリが見つかりません: ${srcDir}`,
  )
  process.exit(1)
}

// src直下のTSファイルを取得
const srcFiles = glob.sync(path.join(srcDir, '*.ts'))

if (srcFiles.length === 0) {
  console.warn(`プロジェクト "${projectName}" にTSファイルが見つかりません`)
  process.exit(0)
}

const buildPromises = srcFiles.map((file) => {
  const name = path.basename(file, '.ts')
  const outfile = path.join(distDir, `${name}.js`)

  return esbuild.build({
    entryPoints: [file],
    bundle: true,
    outfile,
    format: 'iife',
    plugins: [GasPlugin],
  })
})

Promise.all(buildPromises)
  .then(() => {
    console.log(`✅ Project "${projectName}" built successfully!`)
  })
  .catch((e) => {
    console.error(`❌ Build failed for project "${projectName}":`, e)
    process.exit(1)
  })
