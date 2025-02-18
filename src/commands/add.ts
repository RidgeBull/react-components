import { Command } from "commander";
import { downloadComponent } from "../downloader";
import chalk from "chalk";
import path from "path";
import { existsSync } from "fs";
import { getConfig } from "../config";

export const add = new Command()
  .name("add")
  .description("Reactコンポーネントをプロジェクトに追加します")
  .argument("<component>", "追加するコンポーネントの名前を指定してください")
  .action(async (component) => {
    const cwd = process.cwd();

    // 設定ファイルがあるか確認
    if (!existsSync(path.join(cwd, "react-components.json"))) {
      console.error(
        chalk.red("設定ファイル (react-components.json) が見つかりません。")
      );
      process.exit(1);
    }

    // 設定を読み込む
    const config = getConfig(cwd);
    if (!config) {
      console.error(chalk.red("設定ファイルの読み込みに失敗しました。"));
      process.exit(1);
    }

    // コンポーネントをダウンロード
    await downloadComponent(component, config, cwd);
  });
