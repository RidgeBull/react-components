import fs from "fs"
import path from "path"
import chalk from "chalk"
import { Config } from "./config"

const TEMPLATE_DIR = path.join(__dirname, "..", "..", "templates")

export async function downloadComponent(componentName: string, config: Config, cwd: string) {
  const componentsDir = path.join(cwd, config.componentsDir)
  const fileExtension = config.typescript ? ".tsx" : ".jsx"
  const sourcePath = path.join(TEMPLATE_DIR, `${componentName}${fileExtension}`)
  const destinationPath = path.join(componentsDir, `${componentName}${fileExtension}`)

  if (!fs.existsSync(TEMPLATE_DIR)) {
    console.error(chalk.red(`❌ テンプレートディレクトリが見つかりません: ${TEMPLATE_DIR}`))
    process.exit(1)
  }

  if (!fs.existsSync(sourcePath)) {
    console.error(chalk.red(`❌ コンポーネント "${componentName}" が見つかりませんでした。`))
    process.exit(1)
  }

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true })
  }

  fs.copyFileSync(sourcePath, destinationPath)
  console.log(chalk.green(`✅ ${componentName} を ${config.componentsDir}/${componentName}${fileExtension} にコピーしました！`))
}
