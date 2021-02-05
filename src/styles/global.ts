import { createGlobalStyle } from 'styled-components';
import githubBackgroung from '../assets/github-background.svg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 4px 20px;
  }

  body {
    background: #d9d9d9 url(${githubBackgroung}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
`;
