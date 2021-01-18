import React from "react";
import PageWithNavBar from "../../components/UI/PageWithNavBar";
import CategoriesBadge from "../../components/UI/CategoriesBadge";
import ListItem from "../../components/Items/ListItem";

function Items({ search = "" }) {
  return (
    <>
      <PageWithNavBar>
        <CategoriesBadge />
        <ListItem />
      </PageWithNavBar>
    </>
  );
}

export async function getServerSideProps(context) {
  const { search = "" } = context.query;
  return {
    props: { search },
  };
}

export default Items;
