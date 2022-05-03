import { linearGradient } from "polished";
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

        background: ${linearGradient({
          colorStops: ["#00FFFF 0%", "rgba(0, 0, 255, 0) 50%", "#0000FF 95%"],
          toDirection: "0deg",
          fallback: "#FFF",
        })};
        background-repeat: no-repeat;
        background-size: cover; 

        -webkit-font-smoothing: antialiased; //for browsers using webkit: brought details to fonts
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--white);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;
