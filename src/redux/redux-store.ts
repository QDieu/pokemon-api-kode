import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import cardReducer from "./card-reducer";
import loginReducer from "./login-reducer";
import selectReducer from "./select-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {save, load, clear} from "redux-localstorage-simple";

let reducers = combineReducers({
  cardItems: cardReducer,
  select: selectReducer,
  auth: loginReducer
}); 

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

//Actions create types
type PropertiesTypes<T> = T extends {[key : string]: infer U} ? U : never;
export type InferActionsTypes<T extends  {[key : string]: (...args : any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type ThunkTypeCreator<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

const createStoreWithMiddleWare = applyMiddleware(thunkMiddleware, save({states : ["auth"]}))(createStore);

let store = createStoreWithMiddleWare(reducers, load({states:["auth"]}));

//@ts-ignore
window.clearLocalStorage = () => {
  clear({
    //@ts-ignore
    states:["auth"]
  });
}

//@ts-ignore
window.store = store;

export default store;
