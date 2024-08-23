import inquirer from "inquirer";

export function promptAppName() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter the name of your application:",
      default: "express-app",
    },
  ]);
}
