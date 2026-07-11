import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const distDir = resolve('dist')
const ssrDir = resolve('dist-ssr')

const { render } = await import(resolve(ssrDir, 'entry-server.js'))

const appHtml = render()

const templatePath = resolve(distDir, 'index.html')
const template = readFileSync(templatePath, 'utf-8')
const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

writeFileSync(templatePath, finalHtml)
rmSync(ssrDir, { recursive: true, force: true })

console.log('Prerendered index.html with static markup.')
