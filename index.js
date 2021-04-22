#!/usr/bin/node

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt({
    type: "input",
    message: "Enter the name of the JSON file",
    name: "fileName",
  })
  .then(({ fileName }) => {
    if (!fileName) {
      console.log("\x1b[31m", "Enter a valid JSON file");
      return;
    }
    try {
      const cwd = process.cwd();
      const rawdata = fs.readFileSync(cwd + `/${fileName}`);
      const jsonData = JSON.parse(rawdata);

      let envFile = "";
      for (const key of Object.keys(jsonData)) {
        envFile += `${key}=${jsonData[key]}\n`;
      }

      fs.writeFileSync(".env", envFile);

      console.log("\x1b[34m", ".env created successfully");
      //file written successfully
    } catch (err) {
      console.log("\x1b[31m", err.message);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("\x1b[31m", "Prompt not supported here");
    } else {
      // Something else went wrong
      console.log("\x1b[31m", "Something went wrong");
    }
  });
