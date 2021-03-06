const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');
const { checkForDist } = require('./utils/fileOperations');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please enter a short description of your project's functionality. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("A project description is required!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please enter details on how to install your project. (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Installation details are required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Usage information is required!');
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please include any information on best practices for contribution (if applicable).'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please include any information on testing methodology (if applicable).'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license type for your project?',
        choices: ['MIT', 'LGPL', 'FreeBSD', 'None'],
        default: 0
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('An email address is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('A GitHub username is required!');
            }
        }
    }
];

async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        const renderedMarkdown = generateMarkdown(userResponses);
        checkForDist();
        fs.writeFile('./dist/README.md', renderedMarkdown, err => {
            err ? console.log("FILE WRITE FAILED", err) : console.log("README successfully created, check it out in the dist folder!");
        })  
    } catch (error) {
        console.log(error.message);
    }
}

init();