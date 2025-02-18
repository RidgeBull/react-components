import { Command } from "commander";
import chalk from "chalk";

export const test = new Command()
  .name("test")
  .description("Check if the CLI is working")
  .action(() => {
    console.log(chalk.green("✅ react-components CLI is working!"));
  });
