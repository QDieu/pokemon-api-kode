import React, { Dispatch, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import CardItemInfo from "./CardItemInfo";
import {getCardInfo, ThunkTypeCardReducer} from '../../../../redux/card-reducer'
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
  const linkId = isNaN(+props.match.params.cardId) ? props.match.params.cardId : +props.match.params.cardId;

  const card = useSelector((state : AppStateType) => state.cardItems.cardInfo);
  const unicId = useSelector((state : AppStateType) => state.cardItems.unicIdCard);

  const dispatch : Dispatch<ThunkTypeCardReducer>= useDispatch();

  useEffect(() => {
    const id : number | string = linkId;
    dispatch(getCardInfo(id, unicId))
  }, [dispatch, linkId, unicId])

  if (typeof card === "object" && Object.keys(card).length !== 0) 
      return <CardItemInfo card = {card}/>;
    return <div>Loading...</div>
} 

export default withRouter(CardItemInfoContainer)
