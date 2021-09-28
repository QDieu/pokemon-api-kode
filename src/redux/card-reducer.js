import { cardAPI } from "../api/api";

const SET_CARDS = "SET_CARDS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_UNIC_ID_CARD = "SET_UNIC_ID_CARD";
const SET_CARD_INFO = "SET_CARD_INFO";

let initialState = {
  cards: [],
  currentPage: 1,
  totalCount: 100,
  unicIdCard: null,
  cardInfo: [],
};

const cardReducer = (state = initialState, action) => {
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

export const setCards = (cards) => ({ type: SET_CARDS, cards: cards });

export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount: totalCount
});

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
});

export const setUnicIdCard = (unicIdCard) => ({
  type: SET_UNIC_ID_CARD,
  unicIdCard: unicIdCard
})

export const setCardInfo = (cardInfo) => ({
  type: SET_CARD_INFO,
  cardInfo,
})

//thunks

export const getCards = (pageSize, page, filter) => async (dispatch) => {
  let response = await cardAPI.getCard(pageSize, page, filter);
  dispatch(setCards(response.data));
  dispatch(setTotalCount(response.totalCount))
}

export const getCardInfo = (id, unicId = null) => async (dispatch, getState) => {
  
  if (unicId !== null) {
    const card = getState().cardItems.cards[unicId]
    dispatch(setCardInfo(card));
  }
  else {
    let response = await cardAPI.getCardInfo(id);
    dispatch(setCardInfo(response.data));
  }
}

export default cardReducer;
