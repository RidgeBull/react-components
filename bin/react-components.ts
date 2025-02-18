#!/usr/bin/env node

import { add } from "../src/commands/add";
import { Command } from "commander";
import { test } from "../src/commands/test";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  const program = new Command()
    .name("react-components")
    .description("CLI for managing React components")
    .version("1.0.0");

  program.addCommand(add);
  program.addCommand(test);
  program.parse(process.argv);
}

main();
