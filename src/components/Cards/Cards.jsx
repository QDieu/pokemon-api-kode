import React from "react";
import style from "./Cards.module.css";
import CardsItemsContainer from "./CardsItem/CardsItemContainer";
import SelectContainer from "./Select/SelectContainer";

const Cards = () => {
  return (
    <div className={style.mainContainer}>
      <SelectContainer />
      <CardsItemsContainer />
    </div>
  );
};

export default Cards;
