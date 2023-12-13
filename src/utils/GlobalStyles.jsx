import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {

    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', 'Koulen', 'VT323', sans-serif;
    background: linear-gradient(180deg, #000 6.31%, #181818 88.32%);
  }
`;
