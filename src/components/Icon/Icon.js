import React from "react";
import styled from "styled-components";

import {
  Search,
  Menu,
  ShoppingBag,
  ChevronDown,
} from "react-feather";

const icons = {
  search: Search,
  menu: Menu,
  "shopping-bag": ShoppingBag,
  "chevron-down": ChevronDown,
};

const Icon = ({ id, color, size, strokeWidth }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }
  return (
    <Wrapper>
      <Component
        color={color}
        size={--size}
        strokeWidth={strokeWidth}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);
  & > svg {
    display: block;
    stroke-width: ${(p) => p.strokeWidth}px;
  }
`;

export default Icon;
