import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionLoginReducer} from "../../redux/login-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header from "./Header";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state : AppStateType) => state.auth.isAuth);
  const isAuthOTP = useSelector((state : AppStateType) => state.auth.isAuthOTP);

  const logoutHandler = () => {
    dispatch(actionLoginReducer.logout())
  }

  return <>
    {isAuth && isAuthOTP ? (
          <Header logout={logoutHandler} />
        ) : (
          <Redirect to="/login" />
        )}
  </>
}

export default HeaderContainer;