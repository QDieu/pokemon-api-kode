import { cardAPI, CardType } from "../api/cardAPI";
import { InferActionsTypes, ThunkTypeCreator } from "./redux-store";

const SET_CARDS = "SET_CARDS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_UNIC_ID_CARD = "SET_UNIC_ID_CARD";
const SET_CARD_INFO = "SET_CARD_INFO";

let initialState = {
  cards: [] as Array<CardType>,
  currentPage: 1,
  totalCount: 100,
  unicIdCard: null as number | null,
  cardInfo: [] as unknown as CardType,
};

type InitialStateTypeCard = typeof initialState

const cardReducer = (state = initialState, action : ActionsCardReducerType) : InitialStateTypeCard=> {
  switch (action.type) {
    case SET_CARDS:
      return { ...state, cards: [...action.cards] };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_UNIC_ID_CARD:
      return { ...state, unicIdCard: action.unicIdCard };
    case SET_CARD_INFO:
      return { ...state, unicIdCard: null, cardInfo: action.cardInfo };
    default:
      return state;
  }
};

type ActionsCardReducerType = InferActionsTypes<typeof actionsCardReducer>

export const actionsCardReducer = {
  setCards : (cards : Array<CardType>) => ({ type: SET_CARDS, cards: cards } as const),

  setTotalCount : (totalCount : number) => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
  } as const),

  setCurrentPage : (currentPage : number) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  } as const),

  setUnicIdCard : (unicIdCard: number) => ({
    type: SET_UNIC_ID_CARD,
    unicIdCard: unicIdCard
  } as const),

  setCardInfo : (cardInfo : CardType) => ({
    type: SET_CARD_INFO,
    cardInfo,
  } as const)
}

//thunks

type ThunkTypeCardReducer = ThunkTypeCreator<ActionsCardReducerType>

export const getCards = (pageSize : number, page : number, filter : string) : ThunkTypeCardReducer=> async (dispatch) => {
  let response = await cardAPI.getCard(pageSize, page, filter);
  dispatch(actionsCardReducer.setCards(response.data));
  dispatch(actionsCardReducer.setTotalCount(response.totalCount))
}

export const getCardInfo = (id : number, unicId : number | null = null) : ThunkTypeCardReducer => async (dispatch, getState) => {
  
  if (unicId !== null) {
    const card = getState().cardItems.cards[unicId]
    dispatch(actionsCardReducer.setCardInfo(card));
  }
  else {
    let response = await cardAPI.getCardInfo(id);
    dispatch(actionsCardReducer.setCardInfo(response.data));
  }
}

export default cardReducer;
