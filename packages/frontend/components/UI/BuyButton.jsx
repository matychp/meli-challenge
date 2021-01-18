import React from "react";
import styled from "styled-components";
import { colors } from "../../config/constants";

function BuyButton({ children }) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  min-height: 30px;
  width: 100%;
  border: none;
  border-radius: 2px;
  color: ${colors.itemDetails.buy.foreground};
  background-color: ${colors.itemDetails.buy.background};
`;

export default BuyButton;
