// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'first_name',
        message: "What's your first name",
      },
      {
        type: 'input',
        name: 'last_name',
        message: "What's your last name",
        default() {
          return 'Doe';
        },
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
