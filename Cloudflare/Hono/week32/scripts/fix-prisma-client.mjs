import fs from 'node:fs/promises'
import path from 'node:path'

const from = path.join(process.cwd(), 'node_modules', '.prisma', 'client')
const to = path.join(process.cwd(), 'node_modules', '@prisma', 'client', '.prisma', 'client')

async function main() {
  try {
    await fs.access(from)
  } catch {
    // Nothing to fix if prisma hasn't generated the client yet.
    return
  }

  await fs.mkdir(to, { recursive: true })
  await fs.cp(from, to, { recursive: true, force: true })
}

await main()

