const SET_TYPES = "SET_TYPES";
const SET_SUBTYPES = "SET_SUBTYPES";
const SET_SUPERTYPES = "SET_SUPERTYPES";
const SET_RARITIES = "SET_RARITIES";
const SET_SELECT = "SET_SELECT";

let initialState = {
  types: [],
  subtypes: [],
  supertypes: [],
  rarities: [],
  selectFilter: {
    types: "",
    subtypes: "",
    supertypes: "",
    rarities: ""
  }
};

const selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPES:
      return { ...state, types: [...action.data] };
    case SET_SUBTYPES:
      return { ...state, subtypes: [...action.data] };
    case SET_SUPERTYPES:
      return { ...state, supertypes: [...action.data] };
    case SET_RARITIES:
      return { ...state, rarities: [...action.data] };
    case SET_SELECT:
      let selectFilterTemp = {};
      for (let key in action.selectFilter) {
        selectFilterTemp[key] = action.selectFilter[key];
      }
      return { ...state, selectFilter: selectFilterTemp };
    default:
      return state;
  }
};

export const setTypesAc = (data) => ({ type: SET_TYPES, data });
export const setSubTypesAc = (data) => ({ type: SET_SUBTYPES, data });
export const setSuperTypesAc = (data) => ({ type: SET_SUPERTYPES, data });
export const setRaritiesAc = (data) => ({ type: SET_RARITIES, data });
export const setSelectAc = (selectFilter) => ({
  type: SET_SELECT,
  selectFilter
});

export default selectReducer;
