import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const projectRoot = process.cwd()

const inputLogo = path.join(projectRoot, 'src', 'assets', 'images', 'Logo.png')
const outDir = path.join(projectRoot, 'public')

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function writeIcon(size) {
  const outFile = path.join(outDir, `pwa-${size}x${size}.png`)

  // Create a square icon with padding, so the original logo isn't cropped.
  // Use a white background to match the requested icon style.
  const background = { r: 255, g: 255, b: 255, alpha: 1 }

  const image = sharp(inputLogo)
  const resized = image.resize(Math.round(size * 0.7), Math.round(size * 0.7), {
    fit: 'inside',
    withoutEnlargement: true,
  })

  const buffer = await resized.png().toBuffer()

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

  return outFile
}

await ensureDir(outDir)

const outputs = []
outputs.push(await writeIcon(192))
outputs.push(await writeIcon(512))

console.log('Generated PWA icons:')
for (const file of outputs) console.log(`- ${path.relative(projectRoot, file)}`)
