import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchCleaned } from "../../store/features/searchSlice";
import { homeClicked } from "../../store/features/browserSlice";

function Logo() {
  const dispatch = useDispatch();
  const router = useRouter();

  const goToHomeHandler = () => {
    dispatch(homeClicked());
    dispatch(searchCleaned());
    router.push("/");
  };

  return (
    <Container onClick={goToHomeHandler}>
      <LogoImg src="/assets/Logo_ML@2x.png" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 32px;
  width: 44px;
`;

export default Logo;
