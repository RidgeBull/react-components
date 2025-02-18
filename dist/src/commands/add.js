"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const commander_1 = require("commander");
const downloader_1 = require("../downloader");
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const config_1 = require("../config");
exports.add = new commander_1.Command()
    .name("add")
    .description("Reactコンポーネントをプロジェクトに追加します")
    .argument("<component>", "追加するコンポーネントの名前を指定してください")
    .action(async (component) => {
    const cwd = process.cwd();
    // 設定ファイルがあるか確認
    if (!(0, fs_1.existsSync)(path_1.default.join(cwd, "react-components.json"))) {
        console.error(chalk_1.default.red("設定ファイル (react-components.json) が見つかりません。"));
        process.exit(1);
    }
    // 設定を読み込む
    const config = (0, config_1.getConfig)(cwd);
    if (!config) {
        console.error(chalk_1.default.red("設定ファイルの読み込みに失敗しました。"));
        process.exit(1);
    }
    // コンポーネントをダウンロード
    await (0, downloader_1.downloadComponent)(component, config, cwd);
});
