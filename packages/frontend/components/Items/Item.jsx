import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { titleUpdated } from "../../store/features/browserSlice";
import { colors } from "../../config/constants";

function Item({
  item: {
    id,
    picture = "",
    price: { amount = 0, decimals = 0 } = {},
    title = "No title",
    location = "Unknown",
    free_shipping = false,
  },
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickItemHandler = () => {
    dispatch(titleUpdated({ value: title }));
    router.push(`/items/${id}`);
  };

  return (
    <Container onClick={onClickItemHandler}>
      <Image src={picture} />
      <MainContainer>
        <PriceContainer>
          <Price>$ {Math.round(amount)}</Price>
          {free_shipping ? (
            <FreeShipping src="/assets/ic_shipping.png" />
          ) : null}
        </PriceContainer>
        <Title>{title}</Title>
      </MainContainer>
      <Location>{location}</Location>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 0px 16px 16px;
`;

const Image = styled.img`
  min-height: 180px;
  min-width: 180px;
  max-height: 180px;
  max-width: 180px;
  align-self: center;
  border-radius: 4px;
  object-fit: contain;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  margin-left: 16px;
`;

const Price = styled.span`
  font-size: 24px;
  color: ${colors.listItem.item.price.foreground};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const FreeShipping = styled.img`
  margin-left: 10px;
`;

const Title = styled.span`
  max-width: 80%;
  font-size: 18px;
  text-overflow: ellipsis;
  color: ${colors.listItem.item.title.foreground};
`;

const Location = styled.span`
  min-width: 20%;
  padding-top: 30px;
  font-size: 12px;
  opacity: 50%;
  font-weight: 500;
`;

export default Item;
