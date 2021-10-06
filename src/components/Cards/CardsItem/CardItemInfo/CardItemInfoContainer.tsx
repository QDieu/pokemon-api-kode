import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import CardItemInfo from "./CardItemInfo";
import {getCardInfo} from '../../../../redux/card-reducer'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";  
import { AppStateType } from "../../../../redux/redux-store";

type PathParamType = {
  cardId : string
}

//Some props 
type OwnPropsType = {}

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

const CardItemInfoContainer : React.FC<PropsType> = (props) => {
  console.log('Card item Info container render')
  const linkId = +props.match.params.cardId;

  const card = useSelector((state : AppStateType) => state.cardItems.cardInfo);
  const unicId = useSelector((state : AppStateType) => state.cardItems.unicIdCard);

  const dispatch = useDispatch();

  useEffect(() => {
    const id : number = linkId;
    dispatch(getCardInfo(id, unicId))
  }, [linkId])

  if (typeof card === "object" && Object.keys(card).length !== 0) 
      return <CardItemInfo card = {card}/>;
    return <div>Loading...</div>
} 

export default withRouter(CardItemInfoContainer)
