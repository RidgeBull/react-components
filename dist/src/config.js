"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
function getConfig(cwd) {
    const configPath = path_1.default.join(cwd, "react-components.json");
    if (!(0, fs_1.existsSync)(configPath)) {
        return null;
    }
    const configData = JSON.parse((0, fs_1.readFileSync)(configPath, "utf-8"));
    return configData;
}
