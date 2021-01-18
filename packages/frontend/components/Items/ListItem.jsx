import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { colors } from "../../config/constants";
import { useSelector } from "react-redux";
import { resultsSelector } from "../../store/features/searchSlice";

function ItemsList() {
  const items = useSelector(resultsSelector);

  return (
    <Container>
      {items.length !== 0
        ? items
            .map((item, index) => (
              <div key={index} tabIndex={index + 1}>
                <Item item={item} />
              </div>
            ))
            .reduce((acc, curr) => (
              <>
                {acc} {<Division />} {curr}
              </>
            ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 5px ${colors.listItem.background};
  background-color: ${colors.listItem.foreground};
`;

const Division = styled.hr`
  align-self: center;
  width: 95%;
  border: 1px solid ${colors.listItem.divider};
  background: ${colors.listItem.divider};
  margin: 0px;
`;

export default ItemsList;
