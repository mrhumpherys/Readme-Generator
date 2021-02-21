// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/SampleREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    console.log(`
    ================
    ReadMe Generator
    ================
    `);
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a detailed description of your project:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the installation process!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Describe how to use the project:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the usage!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contributing",
            message: "List the individuals contributing to this project:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the contributors!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Describe the tests for the project:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the tests for the project!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "questions",
            message: "What would you like in the Questions section? Your email and Github will be included automatically.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter how to resolve issues!');
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Choose the license for this project: ",
            choices: [
                "Apache",
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "MIT",
                "Mozilla",
                "None"
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]);
}

// Function call to initialize app
init()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(data2 => {
        return writeFile(data2);
    })
    .then( () => {
        console.log(`
        Your ReadMe file has been successfully created! 
        Check the dist folder for your new ReadME!
        `);
    })
    .catch(err => {
        console.log(err);
    });