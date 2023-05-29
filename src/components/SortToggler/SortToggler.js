import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden";

import { COLORS, WEIGHTS } from "../../constants";
import Icon from "../Icon/Icon";

const selectMenu = ["Newest Releases", "Discount", "All Items"];

const STYLES = {
  on: {
    display: "block",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  off: {
    display: "none",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
};

const SortToggler = ({ selected, setSelected }) => {
  const [dropDownOn, setDropDownOn] = React.useState("off");
  const styles = STYLES[dropDownOn];

  return (
    <Wrapper
      style={{
        "--border-top-right-radius":
          styles.borderTopRightRadius + "px",
        "--border-top-left-radius": styles.borderTopLeftRadius + "px",
        "--border-bottom-right-radius":
          styles.borderBottomRightRadius + "px",
        "--border-bottom-left-radius":
          styles.borderBottomLeftRadius + "px",
      }}
    >
      <VisibleWrapper
        onClick={() => {
          if (dropDownOn === "on") {
            setDropDownOn("off");
          } else {
            setDropDownOn("on");
          }
        }}
      >
        <p>{selected}</p>
        <IconWrapper>
          <Icon
            id={"chevron-down"}
            size={20}
            color={COLORS.gray[500]}
            strokeWidth={3}
          />
        </IconWrapper>
        <VisuallyHidden>Dropdown menu</VisuallyHidden>
      </VisibleWrapper>
      <DropdownWrapper
        style={{
          "--display": styles.display,
        }}
      >
        {selectMenu.map((value) => (
          <li
            key={value}
            onClick={() => {
              setSelected(value);
              if (dropDownOn === "on") {
                setDropDownOn("off"); // close the dropdown after the select
              }
            }}
          >
            {value}
          </li>
        ))}
      </DropdownWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
  background-color: ${COLORS.gray[100]};
  border-top-right-radius: var(--border-top-right-radius);
  border-top-left-radius: var(--border-top-left-radius);
  border-bottom-right-radius: var(--border-bottom-right-radius);
  border-bottom-left-radius: var(--border-bottom-left-radius);
  font-weight: ${WEIGHTS.medium};
`;

const VisibleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  padding-left: 12px;
  padding-right: 20px;
  width: 180px;

  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto 0;
  width: fit-content;
  height: fit-content;
`;

const DropdownWrapper = styled.ul`
  display: var(--display);
  position: absolute;
  top: 32px;
  background-color: inherit;
  list-style: none;
  padding-right: 32px;
  background-color: ${COLORS.gray[100]};
  border-radius: 0 0 4px 4px;
  width: 100%;

  & > li {
    margin-left: -28px;
    border-bottom: 1px solid black;
    line-height: 32px; /* Center the text vertically within each option */
    cursor: pointer;
  }
  & > li:last-of-type {
    border: none;
  }
  & > li:hover {
    color: ${COLORS.secondary};
  }
`;

export default SortToggler;
