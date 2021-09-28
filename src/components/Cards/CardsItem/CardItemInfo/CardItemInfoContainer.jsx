import React, { useEffect } from "react";
import { withRouter } from "react-router";
import CardItemInfo from "./CardItemInfo";
import {getCardInfo} from './../../../../redux/card-reducer'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";  

const CardItemInfoContainer = (props) => {
  console.log('Card item Info container render')
  const linkId = props.match.params.cardId;

  const card = useSelector(state => state.cardItems.cardInfo);
  const unicId = useSelector(state => state.cardItems.unicIdCard);

  const dispatch = useDispatch();

  useEffect(() => {
    const id = linkId;
    dispatch(getCardInfo(id, unicId))
  }, [linkId])

  if (typeof card === "object" && Object.keys(card).length !== 0) 
      return <CardItemInfo card = {card}/>;
    return <div>Loading...</div>
} 

export default withRouter(CardItemInfoContainer)
