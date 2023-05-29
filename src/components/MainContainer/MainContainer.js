import React from "react";
import styled from "styled-components";

import Shell from "../Shell";
import SideContainer from "../SideContainer";

const MainContainer = ({ title, setTitle }) => {
  return (
    <Wrapper>
      <SideContainer title={title} setTitle={setTitle} />
      <Shell title={title} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 80px;
`;

export default MainContainer;
