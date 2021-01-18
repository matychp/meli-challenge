import React, { useEffect } from "react";
import PageWithNavBar from "../../components/UI/PageWithNavBar";
import ItemDetails from "../../components/Items/ItemDetails";
import CategoriesBadge from "../../components/UI/CategoriesBadge";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getItemById, itemSelector } from "../../store/features/itemSlice";

function ItemById({ id = null }) {
  const dispatch = useDispatch();
  const item = useSelector(itemSelector);

  useEffect(() => {
    if (id !== null) {
      dispatch(getItemById(id));
    }
  }, []);

  return (
    <PageWithNavBar>
      <Container>
        <CategoriesBadge />
        <MainContent>
          {item !== null ? <ItemDetails item={item} /> : null}
        </MainContent>
      </Container>
    </PageWithNavBar>
  );
}

export async function getServerSideProps(context) {
  const { id = null } = context.params;
  return {
    props: { id },
  };
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default ItemById;
