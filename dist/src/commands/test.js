"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
exports.test = new commander_1.Command()
    .name("test")
    .description("Check if the CLI is working")
    .action(() => {
    console.log(chalk_1.default.green("react-components CLI is working!"));
});
