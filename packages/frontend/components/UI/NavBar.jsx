import React from "react";
import styled from "styled-components";
import { colors } from "../../config/constants";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function NavBar({}) {
  return (
    <Nav>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SearchBar />
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
  width: 100%;
  background-color: ${colors.navbar.background};
`;

const Container = styled.div`
  display: flex;
  width: 80%;
`;

const LogoContainer = styled.div`
  padding-right: 20px;
`;

export default NavBar;
