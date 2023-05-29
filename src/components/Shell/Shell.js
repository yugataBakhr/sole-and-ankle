import React from "react";
import styled from "styled-components";
import MainUpper from "../MainUpper";
import Jumbotron from "../Jumbotron";

const Shell = ({ title }) => {
  const [selected, setSelected] = React.useState("Newest Releases");

  return (
    <Wrapper>
      <MainUpper
        title={title}
        selected={selected}
        setSelected={setSelected}
      />
      <Jumbotron selected={selected} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default Shell;
