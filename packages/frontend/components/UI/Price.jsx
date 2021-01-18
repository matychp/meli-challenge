import React from "react";
import styled from "styled-components";
import { colors } from "../../config/constants";

function Price({
  price: { currency = "$", amount = "-", decimals = "--" } = {},
}) {
  return (
    <Container>
      <Currency>{currency}</Currency>
      <Amount>{amount}</Amount>
      <Decimals>{String(decimals).padStart(2, "0")}</Decimals>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Currency = styled.label`
  font-size: 46px;
  font-weight: 600;
  padding-right: 10px;
  color: ${colors.itemDetails.currency};
`;

const Amount = styled.label`
  font-size: 42px;
  font-weight: 600;
  color: ${colors.itemDetails.currency};
`;

const Decimals = styled.sup`
  font-size: 23px;
  font-weight: 600;
  color: ${colors.itemDetails.currency};
`;

export default Price;
