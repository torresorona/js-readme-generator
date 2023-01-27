// TODO: Include packages needed for this applicatio
import fs from "fs";
import inquirer from "inquirer";
import { getLicenses } from "./utils/getLicenses.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";

const apikey = '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';
// const apikey = process.argv[2]

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: "What's is your project's name? \n",
      },
      {
        type: 'input',
        name: 'description',
        message: "How would you describe your project? \n",
      },
      {
        type: 'input',
        name: 'install',
        message: "How can others install your project? \n",
      },
      {
        type: 'input',
        name: 'usage',
        message: "How can others use your project? \n",
      },
      {
        type: 'input',
        name: 'contributions',
        message: "How can others contribute to your project? \n",
      },
      {
        type: 'input',
        name: 'tests',
        message: "What's is your project's tests? \n",
      },
      {
        type: 'input',
        name: 'github',
        message: "What's is your GitHub's profile name? \n",
      },
      {
        type: 'list',
        name: 'license',
        message: "What's is your project's license? \n",
        choices: await getLicenses(apikey),
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);
  fs.writeFileSync(fileName, content)
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile('README.md', answers))
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        throw new Error(error);
      }
    });
}

// Function call to initialize app
init();
