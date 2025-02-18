#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("../src/commands/add");
const commander_1 = require("commander");
const test_1 = require("../src/commands/test");
process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
async function main() {
    const program = new commander_1.Command()
        .name("react-components")
        .description("CLI for managing React components")
        .version("1.0.0");
    program.addCommand(add_1.add);
    program.addCommand(test_1.test);
    program.parse(process.argv);
}
main();
