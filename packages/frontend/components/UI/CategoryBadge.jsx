import React from "react";
import styled from "styled-components";
import { colors } from "../../config/constants";

function CategoryBadge({ category: { text } }) {
  return <Text>{text}</Text>;
}

const Text = styled.label`
  font-size: 14px;
  color: ${colors.categories.foreground};
`;

export default CategoryBadge;
