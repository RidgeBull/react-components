"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadComponent = downloadComponent;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const prompts_1 = __importDefault(require("prompts"));
const TEMPLATE_DIR = path_1.default.join(__dirname, "..", "..", "templates");
async function downloadComponent(componentName, config, cwd) {
    const componentsDir = path_1.default.join(cwd, config.componentsDir);
    const sourcePath = path_1.default.join(TEMPLATE_DIR, componentName);
    const destinationPath = path_1.default.join(componentsDir, componentName);
    if (!fs_1.default.existsSync(sourcePath)) {
        console.error(chalk_1.default.red(`コンポーネント "${componentName}" が見つかりませんでした。`));
        process.exit(1);
    }
    if (!fs_1.default.existsSync(componentsDir)) {
        fs_1.default.mkdirSync(componentsDir, { recursive: true });
    }
    if (fs_1.default.existsSync(destinationPath)) {
        console.log(chalk_1.default.yellow(`${componentName} はすでに存在します。`));
        const response = await (0, prompts_1.default)({
            type: "confirm",
            name: "overwrite",
            message: "上書きしますか？",
            initial: false,
        });
        if (!response.overwrite) {
            console.log(chalk_1.default.blue(`${componentName} のダウンロードをキャンセルしました。`));
            return;
        }
    }
    copyFolderRecursiveSync(sourcePath, destinationPath);
    console.log(chalk_1.default.green(`${componentName} を ${config.componentsDir}/${componentName} にコピーしました！`));
}
function copyFolderRecursiveSync(source, target) {
    if (!fs_1.default.existsSync(target)) {
        fs_1.default.mkdirSync(target, { recursive: true });
    }
    const files = fs_1.default.readdirSync(source);
    for (const file of files) {
        const sourceFile = path_1.default.join(source, file);
        const targetFile = path_1.default.join(target, file);
        if (fs_1.default.lstatSync(sourceFile).isDirectory()) {
            copyFolderRecursiveSync(sourceFile, targetFile);
        }
        else {
            fs_1.default.copyFileSync(sourceFile, targetFile);
        }
    }
}
