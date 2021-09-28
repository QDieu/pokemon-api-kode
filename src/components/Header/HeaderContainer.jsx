import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../redux/login-reducer";
import Header from "./Header";

const HeaderContainer = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuth);
  const isAuthOTP = useSelector(state => state.auth.isAuthOTP);

  const logoutHandler = () => {
    dispatch(logout())
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