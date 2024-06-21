// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
        type: 'input',
        message: 'Project Title: ',
        name: 'title',
    },
    
    {
      type: 'input',
      message: 'Project Description: ',
      name: 'description',
    },
    
    {
        type: 'input',
        message: 'Installation Instructions: ',
        name: 'installInstruct',
    },

    {
        type: 'input',
        message: 'Usage Information: ',
        name: 'usageInfo',
    },

    {
        type: 'input',
        message: 'Contribution Guidelines: ',
        name: 'guidelines',
    },

    {
        type: 'input',
        message: 'Testing Instructions: ',
        name: 'testInstruct',
    },

    {
        type: 'list',
        message: 'Choose a License:',
        name: 'license',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },

    {
        type: 'input',
        message: 'GitHub Username: ',
        name: 'githubUser',
    },

    {
        type: 'input',
        message: 'Email Address: ',
        name: 'email',
    },

  ])
  .then(data => {
    fs.writeFile("dist/README.md", generateMarkdown(data), (err) => {
        if (err) console.log(err);
        else console.log("Your file was created successfully!");
    })


  }
  )











// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}



// // TODO: Create a function to initialize app
// function init() {}



// // Function call to initialize app
// init();
