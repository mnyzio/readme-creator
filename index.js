// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of possible licenses
const licenceTypes = [
    "Apache License 2.0",
    "GNU General Pbublic License v3.2",
    "MIT License",
    "BSD 2-Clause 'Simplified' License",
    "BSD 3-Clause 'New' or 'Revised' License",
    "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal",
    "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0",
    "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1",
    "Mozilla Public License 2.0",
    "The Unilicense",
    "None"
]

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Project title:"
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation?"
    },
    {
        type: 'input',
        name: 'purpose',
        message: "Why did you build this app?"
    },
    {
        type: 'input',
        name: 'solve',
        message: "What problem does it solve?"
    },
    {
        type: 'input',
        name: 'learn',
        message: "What did you learn throughout the process?"
    },
    {
        type: 'input',
        name: 'standOut',
        message: "What makes your project stand out?"
    },    
    {
        type: 'input',
        name: 'instal',
        message: "What are the steps required to install your project?"
    },  
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage instructions:"
    },      
    {
        type: 'input',
        name: 'contributions',
        message: "Who contributed to this project"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your e-mail for future questions:"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "Please enter your GitHub username?"
    },
    {   
        type: 'list',
        name: 'licenseType',
        message: 'Choose license:',
        choices: licenceTypes,    
        loop: false,    
    },
    {
        type: 'input',
        name: 'test',
        message: "How can the user run tests for this application?"
    },  
    {
        type: 'input',
        name: 'features',
        message: "Does you project have any special features?"
    }  
];

// Function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("File successfully created!");
    })
}

// Function to initialize app
function init() {

    inquirer
        .prompt([
            questions[0],
            questions[1],
            questions[2],
            questions[3],
            questions[4],
            questions[5],
            questions[6],
            questions[7],
            questions[8],
            questions[9],
            questions[10],
            questions[11],
            questions[12],            
            questions[13],            
        ])
        .then(answers => {
            const readMeContent = generateMarkdown(answers);
            // const fileName = 'NEWREADME.md';
            // Write content to file
            writeToFile('NEWREADME.md', readMeContent);                   
        });
}

// Function call to initialize app
init();


