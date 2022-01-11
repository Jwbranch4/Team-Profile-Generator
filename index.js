const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function CreateEmployee() {
  this.team = [];
  this.employee;
  this.finishedTeam = false;
}

const promptTeamInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter the name.",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the name.");
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
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number?",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please enter the office number.");
          return false;
        }
      },
    },
    {
      name: "team",
      type: "list",
      message: "Please create your team.",
      choices: ["Add Engineer", "Add Intern", "Complete Team"],
    },
  ]);
};

promptTeamInfo().then(function (answers) {
  const employeeName = answers.name;
  const employeeId = answers.id;
  const employeeEmail = answers.email;
  console.log(employeeName + employeeId + employeeEmail);

  new Employee(employeeName, employeeId, employeeEmail);
});
