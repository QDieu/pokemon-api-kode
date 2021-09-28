import { applyMiddleware, combineReducers, createStore } from "redux";
import cardReducer from "./card-reducer";
import loginReducer from "./login-reducer";
import selectReducer from "./select-reducer";
import thunkMiddleware from 'redux-thunk';
import {save, load, clear} from "redux-localstorage-simple";

let reducers = combineReducers({
  cardItems: cardReducer,
  select: selectReducer,
  auth: loginReducer
}); 

const createStoreWithMiddleWare = applyMiddleware(thunkMiddleware, save({states : ["auth"]}))(createStore);

let store = createStoreWithMiddleWare(reducers, load({states:["auth"]}));

window.clearLocalStorage = () => {
  clear({
    states:["auth"]
  });
}

window.store = store;

export default store;
