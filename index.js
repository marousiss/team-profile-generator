const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//const { createHistogram } = require('perf_hooks');

let employees = [];
let menuOption = "";

//function to start creating the team's roster
function createTeamRoster() {
    addManager().then(() => {
        menu();
    });

}

//function to get manager's info and add it to the employees array
function addManager() {
    // Array of questitons for manager 
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter manager's office number:"
        },
    ];

    return inquirer
        .prompt(questions)
        .then((data) => {
            const { name, id, email, officeNumber } = data;
            const manager = new Manager(name, id, email, officeNumber); 
            const managerInfo = {
                name: manager.getName(),
                id: manager.getId(),
                email: manager.getEmail(),
                role: manager.getRole(),
                officeNumber: manager.getOfficeNumber(),
            };

            employees.push(managerInfo);
    
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment");
            } else {
                console.log(error);
            }
        });

}

//function to loop through the menu options
function menu() {
    getmenuOption().then(() => {
        if (menuOption === "Finish") {
            displayEmployeeArray();
            //writeToFile();
        } else {
            if (menuOption === "Add an engineer") {
                addEngineer().then(() => {
                    menu();
                });

            } else {
                addIntern().then(() => {
                    menu();
                });
            }
        }
    });
}

function getmenuOption() {
    return inquirer
        .prompt([{type: 'list',
            name: 'menuOption',
            message: "Please choose what to do next:",
            choices: ["Add an engineer", "Add an intern", "Finish"]}])
        .then(val => { 
            menuOption = val.menuOption;
        });
    }

//function to get enginner's info and add it to the employees array
function addEngineer() {
    // Array of questions for engineer
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's Email:"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's GitHub:"
        },
    ];

    // inquirer for Engineer
    return inquirer
        .prompt(questions)
        .then((data) => {

            const { name, id, email, github } = data;
            const engineer = new Engineer(name, id, email, github);
            const enginnerInfo = {
                name: engineer.getName(),
                id: engineer.getId(),
                email: engineer.getEmail(),
                role: engineer.getRole(),
                github: engineer.getGithub(),
            }
            employees.push(enginnerInfo);

        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment");
            } else {
                console.log(error);
            }
        });
    
}

//function to get intern's info and add it to the employees array
function addIntern() {
    // Array of questions for intern
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter intern's ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's Email:"
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's School:"
        },
    ];

    // inquirer for intern
    return inquirer
        .prompt(questions)
        .then((data) => {

            const { name, id, email, school } = data;
            const intern = new Intern(name, id, email, school);
            
            const internInfo = {
                name: intern.getName(),
                id: intern.getId(),
                email: intern.getEmail(),
                role: intern.getRole(),
                school: intern.getSchool(),
            }
            employees.push(internInfo);

        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Couldn't be rendered in the current environment");
            } else {
                console.log(error);
            }
        });
    
}

function displayEmployeeArray() {

    console.log("Employees: \n");
    console.log(employees);
}


createTeamRoster();