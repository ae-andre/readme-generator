// TODO: Include packages needed for this application
var inquirer = require('inquirer');

var fs = require('fs');

var generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description?",
    },
    {
        type: "input",
        name: "install_instructions",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "usage_info",
        message: "What is the usage information?",
    },
    {
        type: "input",
        name: "contribu_guidelines",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "test_instructions",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you select?",
        choices: ["MIT", "Apache", "MPL"],
    },
    {
        type: "input",
        name: "git_username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email_address",
        message: "What is your email address?",
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
    var readme = generateMarkdown(answers);
    console.log(readme)
    fs.writeFile('sample.md', readme, () => {
        console.log("successfully completed readme file")
    })
  })
}

// Function call to initialize app
init();
