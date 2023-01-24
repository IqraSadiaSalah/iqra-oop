#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
// import gradient from 'gradient-string';
//import chalkAnimation from 'chalk-animation';
// import figlet from 'figlet';
//import { createSpinner } from 'nanospinner';


class MyCLI {
    run() {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
          },
          {
            type: 'confirm',
            name: 'isStudent',
            message: 'Are you a student?'
          }
        ])
        .then(answers => {
          console.log(`Hello ${answers.name}!`);
          if (answers.isStudent) {
            console.log('You are a student.');
          } else {
            console.log('You are not a student.');
          }
        });
    }
  }

  const cli = new MyCLI();
cli.run();