#!/usr/bin/env node

import inquirer from 'inquirer';
import path from 'path';
import {createReactApp, reactBootstrap, reactBootstrapRedux, reactTailwind, reactTailwindRedux, reactWithRedux, reactWithStyleComponent, reactWithStyleComponentRedux} from '../react/creatReactApp.js';
import unhandledError from 'customize-unhandled-error'
import welcome from 'welcome-for-cli';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url)));


function app() {

  unhandledError();
  welcome({
    title:  pkg.name,
    tagLine: `by ${pkg.author?.name}`,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
    description: pkg.description,
    version: pkg.version,
  });

  inquirer
  .prompt([{
    type: 'text',
    name: 'name',
    message: 'What is your project name?',
    default: path.basename(process.cwd()),
  },
  {
    type: 'list',
    name: 'type',
    message: 'What is your project type?',
    choices: ['react', 'next', 'react-typescript', 'next-typescript'],
  },
]).then(answers => {
    const projectName = answers.name
    if(answers.type === 'react') {
       inquirer
       .prompt([{
        type: 'list',
        name: 'template',
        message: 'choose a template',
        choices: ['react', 'react with tailwind', 'react with bootstrap', 'react with styled component', 'react with readux toolkit', 'react with tailwind and redux', 'react with bootstrap and redux', 'react with styled component and redux'],
       }]).then(answers => {
        if(answers.template === 'react') {
           createReactApp(projectName);
        }
        else if(answers.template === 'react with tailwind') {
           reactTailwind(projectName);
        }
        else if(answers.template === 'react with bootstrap') {
          reactBootstrap(projectName);
        }
        else if(answers.template === 'react with styled component') {
          reactWithStyleComponent(projectName);
        }
        else if(answers.template === 'react with readux toolkit') {
          reactWithRedux(projectName);
        }
        else if(answers.template === 'react with tailwind and redux') {
          reactTailwindRedux(projectName);
        }
        else if(answers.template === 'react with bootstrap and redux') {
          reactBootstrapRedux(projectName);
        }
        else if(answers.template === 'react with styled component and redux') {
          reactWithStyleComponentRedux(projectName);
        }
       })
    }
    if(answers.type === 'next') {
      console.log(`We are currently working on this feature`);
    }
    if(answers.type === 'react-typescript') {
      console.log(`We are currently working on this feature`);
    }
    if(answers.type === 'next-typescript') {
        console.log(`We are currently working on this feature`);
    }
});
}

app()
