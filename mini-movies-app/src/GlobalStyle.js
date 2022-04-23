import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #f1f5f8;
    --lightGrey: #E50914;
    --medGrey: #6c6d7f;
    --darkGrey: #040320;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Bebas Neue', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--darkGrey);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--darkGrey);
    }
  }
`;
