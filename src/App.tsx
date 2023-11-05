import styled, { createGlobalStyle } from "styled-components";

import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: SF Pro Display;
  }
`;

const Wrapper = styled.div`
  max-width: 1240px;
  margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Navbar />
      <Home />
    </Wrapper>
  );
}

export default App;
