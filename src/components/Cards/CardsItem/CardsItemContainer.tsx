import React, { Dispatch, useEffect } from "react";
import CardsItems from "./CardsItem";
import {
  getCards,
  actionsCardReducer,
  ThunkTypeCardReducer,
  ActionsCardReducerType
} from "../../../redux/card-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";

type PropsType = {}

const CardItemsContainer : React.FC<PropsType> = (props) => {

  const cards = useSelector((state : AppStateType) => state.cardItems.cards);
  const currentPage = useSelector((state : AppStateType) => state.cardItems.currentPage);
  const totalCount = useSelector((state : AppStateType) => state.cardItems.totalCount);
  const filter = useSelector((state : AppStateType) => state.select.selectFilter)

  const dispatch : Dispatch<ThunkTypeCardReducer | ActionsCardReducerType> = useDispatch();

  useEffect(() => {
    dispatch(actionsCardReducer.setCurrentPage(1));
  },[dispatch, filter])
  
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
  }, [filter, currentPage, dispatch])

  

  const onPageChanged = (pageNumber : number) => {
    dispatch(actionsCardReducer.setCurrentPage(pageNumber));
  };

  const selectCard = (index : number) => {
    dispatch(actionsCardReducer.setUnicIdCard(index));
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
