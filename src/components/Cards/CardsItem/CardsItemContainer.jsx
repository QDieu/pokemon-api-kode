import React, { useEffect } from "react";
import CardsItems from "./CardsItem";
import {
  setCurrentPage,
  setUnicIdCard,
  getCards
} from "./../../../redux/card-reducer";
import { useDispatch, useSelector } from "react-redux";

const CardItemsContainer = () => {

  const cards = useSelector(state => state.cardItems.cards);
  const currentPage = useSelector(state => state.cardItems.currentPage);
  const totalCount = useSelector(state => state.cardItems.totalCount);
  const filter = useSelector(state => state.select.selectFilter)

  const dispatch = useDispatch();

  useEffect(() => {
    let filterTemp = "";
    for (let key in filter) {
      if (filter[key])
        filterTemp =
          filterTemp +
          key +
          ":" +
          filter[key].split(" ").join("") +
          " ";
    }

    dispatch(getCards(20, currentPage, filterTemp))
  }, [filter, currentPage])

  useEffect(() => {
    dispatch(setCurrentPage(1));
  },[filter])

  const onPageChanged = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const selectCard = (index) => {
    dispatch(setUnicIdCard(index));
  }
  return <>
    <CardsItems
      cards={cards}
      totalCount={totalCount}
      onPageChanged={onPageChanged}
      currentPage={currentPage}
      setUnicIdCard={selectCard}
    />
  </>
}


export default CardItemsContainer;
