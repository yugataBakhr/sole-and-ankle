import React from "react";
import styled from "styled-components";

const crumbs = ["Home", "Sale", "Shoes"];

const Breadcrumbs = () => {
  return (
    <Wrapper>
      {crumbs.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  flex: 0 0 auto;
  display: flex;
  height: 48px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 32px;
  list-style: none;

  & > li {
    &:hover {
      cursor: pointer;
    }
  }

  & > li::before {
    content: "/ ";
    cursor: default;
  }

  & > li:first-child::before {
    content: "";
  }
`;

export default Breadcrumbs;
