import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS, WEIGHTS } from "../../constants";

const SearchBar = () => {
  const [items, setItems] = React.useState("");

  return (
    <Wrapper
      onSubmit={(event) => {
        event.preventDefault();
        if (items) {
          console.log(`${items}`);
          setItems("");
        } else {
          console.log("Inputbox seems empty.");
        }
      }}
    >
      <IconWrapper>
        <Icon
          id={"search"}
          size={16}
          color={COLORS.white}
          strokeWidth={1.2}
        />
        <VisuallyHidden>Search Bar</VisuallyHidden>
      </IconWrapper>
      <TextInput
        placeholder="Search..."
        value={items}
        onChange={(event) => {
          setItems(event.target.value);
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  position: relative;
  border: none;
`;

const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background-color: inherit;
  height: 16px;
  width: 148px;
  color: ${COLORS.white};
  padding-left: 20px;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400px;
    color: ${COLORS.gray[500]};
  }

  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  height: 16px;
`;

export default SearchBar;
