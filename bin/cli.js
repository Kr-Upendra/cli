#!/usr/bin/env node

import { program } from "commander";
import promptAppName from "../lib/prompts";
import { createApp } from "../lib/actions";

program.version("1.0.0").description("CLI Tool for Express.js");

program
  .command("create-project <name>")
  .description("Create a new Express.js project")
  .option("-n, --name <name>", "Name of the application")
  .action(async (options) => {
    let appName = options.name;
    if (!appName) {
      const answers = await promptAppName();
      appName = answers.name;
    }
    createApp(appName);
  });

program.parse(process.argv);
