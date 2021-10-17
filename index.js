const inquirer = require("inquirer");
//const Employee = require("./Employee");
//const Engineer = require("./Engineer");
//const Intern = require("./Intern");
//const Manager = require("./Manager");

const promptTeamInfo = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Employee name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee id number?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the Employee id number.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the e-mail address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the Employee email.");
            return false;
          }
        },
      },
    ])
    .then((answers) => console.log(answers));
};

promptTeamInfo();
