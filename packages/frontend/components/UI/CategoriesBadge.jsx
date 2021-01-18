import React from "react";
import CategoryBadge from "./CategoryBadge";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../config/constants";
import { useSelector } from "react-redux";
import { categoriesSelector } from "../../store/features/searchSlice";

function CategoriesBadge() {
  const categories = useSelector(categoriesSelector);

  return (
    <Container>
      {categories.length !== 0
        ? categories
            .map((category) => <CategoryBadge category={category} />)
            .reduce((acc, curr) => (
              <>
                {acc} {<ChevronRight />} {curr}
              </>
            ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ChevronRight = styled(FaChevronRight)`
  margin-right: 8px;
  margin-left: 8px;
  font-size: 14px;
  color: ${colors.categories.foreground};
`;

export default CategoriesBadge;
