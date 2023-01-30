import fs from "fs";
import inquirer from "inquirer";
import { getLicensesNames } from "./utils/getLicenses.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";

const apikey = process.argv[2]

const initMessage = `
Welcome to the README Generator that strives to save you time and provide you with a README file that others will actually enjoy reading.
Some details regarding the use of this README generator:
  - IMPORTANT: You will need a GitHub Developer Personal Access Token for this app to work continuosly. Visit https://github.com/settings/tokens for more info.
  - Some questions will attempt to use your default editor (Notepad for Windows and VIM for Linux), if these programs are not installed and you have not specified another default editor, the program will exit.
  - When writing on your editor, if you will like for a new line to show or start on your README file you must leave an empty line in between paragraphs or lines of text.
  - Refer to the GitHub repo README for this project to see an example of how it works.
`

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'project_name',
    message: "What's is your project's name? \n",
  },
  {
    type: 'editor',
    name: 'description',
    message: "How would you describe your project? \n",
  },
  {
    type: 'editor',
    name: 'install',
    message: "How can others install your project? \n",
  },
  {
    type: 'editor',
    name: 'usage',
    message: "How can others use your project? \n",
  },
  {
    type: 'editor',
    name: 'contributions',
    message: "How can others contribute to your project? \n",
  },
  {
    type: 'editor',
    name: 'tests',
    message: "What's is your project's tests? \n",
  },
  {
    type: 'input',
    name: 'github',
    message: "What's is your GitHub's profile username? (e.g. torresorona) NO URLS!\n",
  },
  {
    type: 'list',
    name: 'license',
    message: "What's is your project's license? \n",
    choices: await getLicensesNames(apikey),
  },
  {
    type: 'input',
    name: 'email',
    message: "What's is your email for project questions? \n",
  }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, dataPassed) {
  const content = await generateMarkdown(dataPassed, apikey);
  fs.writeFileSync(fileName, content)
}

// TODO: Create a function to initialize app
function init() {
  console.log(initMessage);
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(`README-${answers.project_name}.md`, answers))
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        throw new Error(error);
      } else console.log(error)
    });
}

// Function call to initialize app
init();
