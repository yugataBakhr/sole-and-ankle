import React from "react";
import styled from "styled-components";
import ShoeCard from "../ShoeCard";

import SHOES from "../../data";

const isStillNew = (dateToCheck) => {
  let deadLine = Date.now() - 1000 * 60 * 60 * 24 * 30;
  return dateToCheck > deadLine ? true : false;
};

const selectedShoes = (filteredBy) => {
  if (filteredBy === "Newest Releases") {
    return SHOES.filter((value) => isStillNew(value.releaseDate));
  } else if (filteredBy === "Discount") {
    return SHOES.filter((value) => value.salePrice);
  } else {
    return SHOES;
  }
};

const Jumbotron = ({ selected }) => {
  return (
    <Wrapper>
      {selectedShoes(selected).map((value) => (
        <ShoeCard
          key={value.name}
          slug={value.slug}
          name={value.name}
          imageSrc={value.imageSrc}
          price={value.price}
          salePrice={value.salePrice}
          releaseDate={value.releaseDate}
          numOfColors={value.numOfColors}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  padding: 32px;
`;

export default Jumbotron;
