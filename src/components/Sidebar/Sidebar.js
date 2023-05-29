import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const shoeType = [
  "Lifestyle",
  "Jordan",
  "Running",
  "Basketball",
  "Training & Gym",
  "Football",
  "Skateboarding",
  "American Football",
  "Baseball",
  "Golf",
  "Tennis",
  "Athletics",
  "Walking",
];

const Sidebar = ({ title, setTitle }) => {
  return (
    <Wrapper>
      {shoeType.map((value) => (
        <li
          key={value}
          onClick={() => {
            setTitle(value);
          }}
        >
          {value}
        </li>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 16px;
  font-weight: ${WEIGHTS.medium};
  padding: 32px;

  & > li {
    &:hover {
      cursor: pointer;
      color: ${COLORS.primary};
    }
  }
`;

export default Sidebar;
