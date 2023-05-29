import React from "react";
import styled from "styled-components";

import ProductLabel from "../ProductLabel";

import { COLORS, WEIGHTS } from "../../constants";

const isStillNew = (dateToCheck) => {
  let deadLine = Date.now() - 1000 * 60 * 60 * 24 * 30;
  return dateToCheck > deadLine ? true : false;
};

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  return (
    <Wrapper key={slug}>
      {salePrice ? (
        <ProductLabel itemState={"primary"}>sale</ProductLabel>
      ) : null}
      {isStillNew(releaseDate) ? (
        <ProductLabel itemState={"secondary"}>
          Just released!
        </ProductLabel>
      ) : null}
      <ImageWrapper>
        <img src={imageSrc} alt={name} />
      </ImageWrapper>
      <NameAndPrice>
        <p>{name}</p>
        <p>
          {salePrice ? <del>${price / 100}</del> : `$${price / 100}`}
        </p>
      </NameAndPrice>
      <ColorsAndSales>
        <GrayP>
          {numOfColors < 2
            ? `${numOfColors} color`
            : `${numOfColors} colors`}
        </GrayP>
        <RedP>{salePrice ? `$${salePrice / 100}` : ``}</RedP>
      </ColorsAndSales>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1 1 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  font-weight: ${WEIGHTS.medium};

  & > p {
    font-weight: ${WEIGHTS.medium};
  }

  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ColorsAndSales = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GrayP = styled.p`
  color: ${COLORS.gray[500]};
`;

const RedP = styled.p`
  color: ${COLORS.primary};
`;

export default ShoeCard;
