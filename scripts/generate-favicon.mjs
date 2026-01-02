import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()
const inputLogo = path.join(projectRoot, 'src', 'assets', 'images', 'Logo.png')
const outDir = path.join(projectRoot, 'public')

await fs.mkdir(outDir, { recursive: true })

// Create a small, square favicon PNG (Vite will serve it at /favicon.png).
// A PNG favicon is widely supported in modern browsers.
const outFile = path.join(outDir, 'favicon.png')

const size = 64
// Use a white background to match the requested icon style.
const background = { r: 255, g: 255, b: 255, alpha: 1 }

const buffer = await sharp(inputLogo)
  .resize(Math.round(size * 0.7), Math.round(size * 0.7), {
    fit: 'inside',
    withoutEnlargement: true,
  })
  .png()
  .toBuffer()

await sharp({
  create: {
    width: size,
    height: size,
    channels: 4,
    background,
  },
})
  .composite([{ input: buffer, gravity: 'center' }])
  .png()
  .toFile(outFile)

console.log(`Generated: ${path.relative(projectRoot, outFile)}`)
