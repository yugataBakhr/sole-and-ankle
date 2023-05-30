import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS } from "../../constants";

const contents = [
  "SALE",
  "NEW RELEASE",
  "MEN",
  "WOMEN",
  "KIDS",
  "COLLECTIONS",
];

const Header = () => {
  return (
    <Wrapper>
      <SideWrapper>
        <h2>Sole & Ankle</h2>
      </SideWrapper>
      <ListWrapper>
        {contents.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ListWrapper>
      <SideWrapper></SideWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  border-bottom: 2px solid ${COLORS.gray[300]};
`;

const ListWrapper = styled.ul`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  list-style: none;
  padding: 16px;
  gap: 50px;
  color: black;
  font-weight: 700;

  & > li {
    &:hover {
      color: ${COLORS.secondary};
      cursor: pointer;
    }
  }
`;

const SideWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 32px;

  &:first-of-type {
    min-width: fit-content;
  }

  & > h2 {
    font-weight: ${WEIGHTS.bold};
  }
`;

export default Header;
