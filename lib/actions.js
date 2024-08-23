import chalk from "chalk";
import fs from "fs";
import path from "path";
import { getIndexJsTemplate, getPackageJsonTemplate } from "./templates.js";

export function createApp(appName) {
  const appPath = path.join(process.cwd(), appName);
  if (fs.existsSync(appPath)) {
    console.log(chalk.red(`Directory ${appName} already exists.`));
    return;
  }

  fs.mkdirSync(appPath);
  console.log(chalk.green(`Creating a new Express.js app in ${appPath}`));

  const indexJsContent = getIndexJsTemplate();
  const packageJsonContent = getPackageJsonTemplate(appName);

  fs.writeFileSync(path.join(appPath, "package.json"), packageJsonContent);
  fs.writeFileSync(path.join(appPath, "app.js"), indexJsContent);

  console.log(chalk.green("Express.js App created successfully."));
  console.log(chalk.green("Run the following commands to start your app:"));
  console.log(chalk.green(`cd ${appName}`));
  console.log(chalk.green(`npm install`));
  console.log(chalk.green(`npm start`));
}
