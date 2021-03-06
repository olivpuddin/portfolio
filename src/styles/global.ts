import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #9452a5;
    --secondary: #CEF9F2;

    --primary-light: #e4b7e5;
    
    --white: #FFFFFF;
    --dark: #1c1d21;
    --gray: #272727;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;

  }

  // Default font-size: 16px for Desktops
  // REM = 1rem = font-size
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    height: 100vh;
    
    -webkit-font-smoothing: antialiased; //for browsers using webkit: brought details to fonts
  }

  body, input, textarea, button {
    font-family: 'Fira Code', monospace;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
