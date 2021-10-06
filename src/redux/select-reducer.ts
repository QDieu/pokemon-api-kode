import { selectAPI } from "../api/selectAPI";
import { InferActionsTypes, ThunkTypeCreator } from "./redux-store";

const SET_TYPES = "SET_TYPES";
const SET_SUBTYPES = "SET_SUBTYPES";
const SET_SUPERTYPES = "SET_SUPERTYPES";
const SET_RARITIES = "SET_RARITIES";
const SET_SELECT = "SET_SELECT";

export type SelectFilterType = {
  [key : string] : string
}

let initialState = {
  types: [] as Array<string>,
  subtypes: [] as Array<string>,
  supertypes: [] as Array<string>,
  rarities: [] as Array<string>,
  selectFilter: {
    types: "",
    subtypes: "",
    supertypes: "",
    rarities: ""
  } as SelectFilterType
};

type InitialStateSelectType = typeof initialState;

const selectReducer = (state = initialState, action : ActionSelectReducerType): InitialStateSelectType => {
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
      // let selectFilterTemp  = {} as SelectFilterType;
      // for (let key in action.selectFilter) {
      //   selectFilterTemp[key] = action.selectFilter[key];
      // }
      let selectFilterTemp : SelectFilterType = JSON.parse(JSON.stringify(action.selectFilter))
      return { ...state, selectFilter: selectFilterTemp };
    default:
      return state;
  }
};

type ActionSelectReducerType = InferActionsTypes<typeof actionsSelectReducer>

export const actionsSelectReducer = {
  setTypes : (data : Array<string>) => ({ type: SET_TYPES, data } as const),
  setSubTypes : (data : Array<string>) => ({ type: SET_SUBTYPES, data } as const),
  setSuperTypes : (data : Array<string>) => ({ type: SET_SUPERTYPES, data } as const),
  setRarities : (data : Array<string>) => ({ type: SET_RARITIES, data } as const),
  setSelect : (selectFilter : SelectFilterType) => ({
    type: SET_SELECT,
    selectFilter
  } as const),
}

type ThunkTypeSelectReducer = ThunkTypeCreator<ActionSelectReducerType>

//Thunks
export const getTypes = () : ThunkTypeSelectReducer => async (dispatch) => {
  let data = await selectAPI.getTypes();
  dispatch(actionsSelectReducer.setTypes(data));
}

export const getSubTypes = () : ThunkTypeSelectReducer => async (dispatch) => {
  let data = await selectAPI.getSubTypes();
  dispatch(actionsSelectReducer.setSubTypes(data));
}

export const getSuperTypes = () : ThunkTypeSelectReducer => async (dispatch) => {
  let data = await selectAPI.getSuperTypes();
  dispatch(actionsSelectReducer.setSuperTypes(data));
}

export const getRarities = () : ThunkTypeSelectReducer => async (dispatch) => {
  let data = await selectAPI.getRarities();
  dispatch(actionsSelectReducer.setRarities(data));
}

export default selectReducer;
