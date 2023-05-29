import React from "react";
import styled from "styled-components";

import SearchBar from "../SearchBar/SearchBar";
import Icon from "../Icon/Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const SuperHeader = () => {
  return (
    <Wrapper>
      <Paragraph>
        Free shipping on domestic orders over $75!
      </Paragraph>

      <MiniWrapper>
        <SearchBar />
        <p>Help</p>
        <div>
          <Icon
            id={"shopping-bag"}
            size={20}
            color={COLORS.white}
            strokeWidth={1}
          />
          <VisuallyHidden>Shopping Cart</VisuallyHidden>
        </div>
      </MiniWrapper>
    </Wrapper>
  );
};

const Paragraph = styled.p`
  font-size: 0.75rem;
  margin-right: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.white};
  height: 100%;
  width: 100%;
  padding: 4px 32px;
`;

const MiniWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  flex: 1;
  font-size: 0.75rem;

  & > p,
  div:hover {
    cursor: pointer;
  }
`;

export default SuperHeader;
