import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styled, { createGlobalStyle } from 'styled-components'


// Add global styles
const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }
`

function App() {
  return (
    <>
    <GlobalStyle />
    <AppContainer>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <Counter />
        <AppIntro>
          Edit <AppCode>src/App.js</AppCode> and save to reload.
        </AppIntro>
        <span>
          <span>Learn </span>
          <AppLink
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </AppLink>
          <span>, </span>
          <AppLink
            className="App-link"
            href="https://styled-components.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Styled Components
          </AppLink>
          <span>, </span>
          <AppLink
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </AppLink>
          <span>, </span>
          <AppLink
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </AppLink>
          ,<span> and </span>
          <AppLink
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </AppLink>
        </span>
      </AppHeader>
    </AppContainer>
    </>
  );
}

export default App;

const AppContainer = styled.div`
 text-align: center;
`;

const AppHeader = styled.header`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: calc(10px + 2vmin);
`;

const AppLink = styled.a`
    color: rgb(112, 76, 182);
`;

const AppLogo = styled.img`
 animation: App-logo-spin infinite 20s linear;
 height: 40vmin;
 @keyframes App-logo-spin {
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
 }
`;

const AppIntro = styled.p`
 font-size: large;
`;

const AppCode = styled.code`
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
monospace;
`;