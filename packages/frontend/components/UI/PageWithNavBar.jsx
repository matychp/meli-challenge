import React from "react";
import Header from "./Header";
import styled from "styled-components";

function PageWithNavBar({ children }) {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 92vh;
  width: 80%;
  padding-bottom: 12vh;
`;

export default PageWithNavBar;
