import logo from './logo.svg';
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
        <AppIntro>
          Edit <AppCode>src/App.js</AppCode> and save to reload.
        </AppIntro>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
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
 background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLink = styled.a`
  color: #61dafb;
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
`