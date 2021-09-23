import { combineReducers, createStore } from "redux";
import cardReducer from "./card-reducer";
import loginReducer from "./login-reducer";
import selectReducer from "./select-reducer";

let reducers = combineReducers({
  cardItems: cardReducer,
  select: selectReducer,
  auth: loginReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
