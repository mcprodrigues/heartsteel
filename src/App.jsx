import { ThemeProvider } from "styled-components";
import theme from './utils/theme'

import { Main } from "./components/Main/index";
import { Footer } from "./components/Footer/index"

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Main>
          <Outlet/>
        </Main>
        <Footer/>
    </ThemeProvider>
  );
};

export default App;
