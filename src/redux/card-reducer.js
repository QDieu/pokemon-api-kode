const SET_CARDS = "SET_CARDS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_UNIC_ID_CARD = "SET_UNIC_ID_CARD";

let initialState = {
  cards: [],
  currentPage: 1,
  totalCount: 100,
  unicIdCard : null,
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
      return {...state, unicIdCard : action.unicIdCard};
    default:
      return state;
  }
};

export const setCardsAC = (cards) => ({ type: SET_CARDS, cards: cards });

export const setTotalCountAC = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount: totalCount
});

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage
});

export const setUnicIdCardAc = (unicIdCard) => ({
  type : SET_UNIC_ID_CARD,
  unicIdCard : unicIdCard
})

export default cardReducer;
