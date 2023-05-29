import React from "react";
import styled from "styled-components";

import SortToggler from "../SortToggler";

const MainUpper = ({ title, selected, setSelected }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <p>Sort</p>
      <SortToggler selected={selected} setSelected={setSelected} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 32px;
  gap: 8px;

  & > p {
    margin-left: auto;
  }
`;

export default MainUpper;
