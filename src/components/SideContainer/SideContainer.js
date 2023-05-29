import React from "react";
import styled from "styled-components";

import Breadcrumbs from "../Breadcrumbs";
import Sidebar from "../Sidebar";

const SideContainer = ({ title, setTitle }) => {
  return (
    <Wrapper>
      <Breadcrumbs />
      <Sidebar title={title} setTitle={setTitle} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  padding-right: 72px;
`;

export default SideContainer;
