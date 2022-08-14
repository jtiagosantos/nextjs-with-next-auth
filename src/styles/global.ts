import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    letter-spacing: 1px;
  }

  html, body {
    height: 100vh;
  }

  body {
    background-color: #FAFAFA;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }
`;