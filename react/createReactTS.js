const createReactTs = async (name) => {
    const { execa } = await import('execa');

    const { stdout } = await execa('npx', ['create-react-app', name, '--template', 'typescript']);
    console.log({ stdout });
};

const reactTsWithRedux = async (name) => {
    const { execa } = await import('execa');

    const { stdout } = await execa('npx', ['create-react-app', name, '--template', 'redux-typescript']);
    console.log({ stdout });
}



export  { createReactTs, reactTsWithRedux };