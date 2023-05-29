import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const STYLES = {
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
  },
};

const ProductLabel = ({ itemState, children }) => {
  const styles = STYLES[itemState];
  return (
    <Wrapper
      style={{
        "--background-color": styles.backgroundColor,
      }}
    >
      <p>{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 8px;
  right: -4px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: var(--background-color);
  color: ${COLORS.white};
`;

export default ProductLabel;
