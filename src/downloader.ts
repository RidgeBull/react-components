import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Config } from "./config";

const TEMPLATE_DIR = path.join(__dirname, "..", "..", "templates");

export async function downloadComponent(
  componentName: string,
  config: Config,
  cwd: string
) {
  const componentsDir = path.join(cwd, config.componentsDir);
  const sourcePath = path.join(TEMPLATE_DIR, componentName);
  console.log(TEMPLATE_DIR);
  const destinationPath = path.join(componentsDir, componentName);

  if (!fs.existsSync(sourcePath)) {
    console.error(
      chalk.red(`❌ コンポーネント "${componentName}" が見つかりませんでした。`)
    );
    process.exit(1);
  }

  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  if (fs.existsSync(destinationPath)) {
    console.log(
      chalk.yellow(`⚠ ${componentName} はすでに存在します。上書きしますか？`)
    );
  }

  copyFolderRecursiveSync(sourcePath, destinationPath);
  console.log(
    chalk.green(
      `✅ ${componentName} を ${config.componentsDir}/${componentName} にコピーしました！`
    )
  );
}

function copyFolderRecursiveSync(source: string, target: string) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);
  for (const file of files) {
    const sourceFile = path.join(source, file);
    const targetFile = path.join(target, file);

    if (fs.lstatSync(sourceFile).isDirectory()) {
      copyFolderRecursiveSync(sourceFile, targetFile);
    } else {
      fs.copyFileSync(sourceFile, targetFile);
    }
  }
}
