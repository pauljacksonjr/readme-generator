const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
const util = require("util");


const questions = [{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
},
{
    type: "input",
    message: "Enter your project title:",
    name: "title"
},
{
    type: "input",
    message: "Describe the application",
    name: "description"
},
{
    type: "input",
    message: "How do you install the application",
    name: "npm install"
},

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("util\readme.md", generateMarkdown)
}

// function to initialize program
function init() {
}


// function call to initialize program
init();
