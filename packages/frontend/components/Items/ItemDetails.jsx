import React from "react";
import styled from "styled-components";
import { colors } from "../../config/constants";
import BuyButton from "../UI/BuyButton";
import Price from "../UI/Price";

function ItemDetails({
  item: {
    title = "",
    price: { amount = 0, decimals = 0 } = {},
    condition = "",
    sold_quantity = 0,
    picture = "",
    description = "",
  } = {},
}) {
  return (
    <Container>
      <LeftColumn>
        <Image src={picture} />
        <Description>
          <DescriptionTitle>Descripcion del Producto</DescriptionTitle>
          <DescriptionContent>{description}</DescriptionContent>
        </Description>
      </LeftColumn>
      <RightColumn>
        <ConditionAndSoldQuantity>
          {condition} - {sold_quantity} vendidos
        </ConditionAndSoldQuantity>
        <Title>{title}</Title>
        <Price price={{ amount, decimals }} />
        <BuyContainer>
          <BuyButton>Comprar</BuyButton>
        </BuyContainer>
      </RightColumn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: ${colors.itemDetails.foreground};
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  height: 100%;
`;

const Image = styled.img`
  flex-grow: 1;
  min-height: 50px;
  min-width: 50px;
  width: 680px;
  height: 680px;
  margin-bottom: 50px;
  object-fit: scale-down;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

const DescriptionTitle = styled.label`
  font-size: 28px;
  color: ${colors.itemDetails.description.title.foreground};
`;

const DescriptionContent = styled.p`
  font-size: 16px;
  margin: 32px 0px 32px 0px;
  color: ${colors.itemDetails.description.content.foreground};
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 15px 0px 15px;
  min-width: 25%;
`;

const ConditionAndSoldQuantity = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  color: ${colors.itemDetails.title};
`;

const BuyContainer = styled.div`
  margin-top: 32px;
  margin-right: 32px;
`;

export default ItemDetails;
