import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { itemSelector } from "../../store/features/browserSlice";

function Header({ title = "Mercado libre" }) {
  const selectedTitle = useSelector(itemSelector);

  return (
    <Container>
      <Head>
        <title>{selectedTitle ? selectedTitle : title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

export default Header;
