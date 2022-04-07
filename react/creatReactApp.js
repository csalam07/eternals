import generate from "../utils/generate.js";
import ora from 'ora'
import chalk from 'chalk';


const { green: g, yellow: y, dim: d , blue: b} = chalk;

const spinner = ora({ text: '' });
// plain react
const createReactApp = async (name) => {
    
    console.log(`creating react app:`, name);
    spinner.start(
        `${y(`DEPENDENCIES`)} installing…\n\n${d(`It may take moment…`)}`
    );
    const { execa } = await import("execa");
    const { stdout } = await execa('npx', ['create-react-app', name]);
    console.log(`${b(stdout)}`);
    spinner.succeed(`${g(`DEPENDENCIES`)} installed!`);
    
}

// with redux
const reactWithRedux = async (name) => {
    console.log(`creating react app with redux inside ${name} directory`);
    spinner.start(
        `${y(`DEPENDENCIES`)} installing…\n\n${d(`It may take moment…`)}`
    );
    const { execa } = await import("execa");
    const { stdout } = await execa('npx', ['create-react-app', name, '--template', 'redux']);
    console.log(`${b(stdout)}`);
    spinner.succeed(`${g(`DEPENDENCIES`)} installed!`);
    
}

// with tailwind
const reactTailwind = async (name) => {
    console.log(`creating react app with tailwind css inside ${name} directory`);
    const pkgs = [
        `@testing-library/jest-dom`,
        `@testing-library/react`,
        `@testing-library/user-event`,
        `react`,
        `react-dom`,
        `react-scripts`,
        `web-vitals`
    ];
    const devPkgs = [
        `autoprefixer`,
        `postcss`,
        `tailwindcss`
    ]
    const src_path = `react-tailwind`;
    await generate(name, src_path, pkgs, devPkgs);
}

//  with tailwindcss and redux
const reactTailwindRedux = async (name) => {
    console.log(`creating react app with tailwind css and redux inside ${name} directory`);

    const pkgs = [
        `@reduxjs/toolkit`,
        `@testing-library/jest-dom`,
        `@testing-library/react`,
        `@testing-library/user-event`,
        `react`,
        `react-dom`,
        `react-redux`,
        `react-scripts`,
        `web-vitals`,
    ];
    const devPkgs = [
        `autoprefixer`,
        `postcss`,
        `tailwindcss`
    ];

    const src_path = `react-tailwind-redux`;
    await generate(name, src_path, pkgs, devPkgs);
}

//  with tailwindcss and redux
const reactBootstrap = async (name) => {
    console.log(`creating react app with tailwind css and redux inside ${name} directory`);

    const pkgs = [
        `@testing-library/jest-dom`,
        `@testing-library/react`,
        `@testing-library/user-event`,
        `react`,
        `react-dom`,
        `react-scripts`,
        `web-vitals`,
        `bootstrap`,
        `jquery`,
        `popper.js`
    ];

    const src_path = `react-bootstrap`;
    await generate(name, src_path, pkgs);
}

// with bootstrap and redux
const reactBootstrapRedux = async (name) => {
    console.log(`creating react app with tailwind css and redux inside ${name} directory`);

    const pkgs = [
        `@reduxjs/toolkit`,
        `@testing-library/jest-dom`,
        `@testing-library/react`,
        `@testing-library/user-event`,
        `react`,
        `react-dom`,
        `react-redux`,
        `react-scripts`,
        `web-vitals`,
        `bootstrap`,
        `jquery`,
        `popper.js`
    ];

    const src_path = `react-bootstrap-redux`;
    await generate(name, src_path, pkgs);
}

// with styled-components
const reactWithStyleComponent = async (name) => {
    console.log(`creating react app with styled components inside ${name} directory`);

    const pkgs = [
        `@testing-library/jest-dom`,
        `@testing-library/react`,
        `@testing-library/user-event`,
        `react`,
        `react-dom`,
        `react-scripts`,
        `web-vitals`,
        `styled-components`,
    ];

    const src_path = `react-styled-component`;
    await generate(name, src_path, pkgs);
}

// with styled-components and redux
const reactWithStyleComponentRedux = async (name) => {
    console.log(`creating react app with styled components and redux inside ${name} directory`);

    const pkgs = [
        `@reduxjs/toolkit`,
        `@testing-library/jest-dom`,
        `@testing-library/react`,
        `@testing-library/user-event`,
        `react`,
        `react-dom`,
        `react-redux`,
        `react-scripts`,
        `web-vitals`,
        `styled-components`,
    ];

    const src_path = `react-styled-components-redux`;
    await generate(name, src_path, pkgs);
}

export { createReactApp, reactWithRedux ,reactTailwind, reactTailwindRedux, reactBootstrap, reactBootstrapRedux, reactWithStyleComponent,reactWithStyleComponentRedux};