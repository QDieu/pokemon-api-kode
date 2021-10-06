import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  actionLoginReducer, LoginReducerType
} from "../../redux/login-reducer";
import { AppStateType } from "../../redux/redux-store";
import Login from "./Login";
import Otp from "./Otp";

type PropsType = {}

const LoginContainer : React.FC<PropsType> = (props) => {
  const dispatch : Dispatch<LoginReducerType> = useDispatch();

  const isAuth = useSelector((state : AppStateType) => state.auth.isAuth);
  const isAuthOTP = useSelector((state : AppStateType )  => state.auth.isAuthOTP);
  const errorOTP = useSelector((state : AppStateType)  => state.auth.errorOTP)
  const errorAuth = useSelector((state : AppStateType) => state.auth.errorAuth)

  useEffect(() => {
    if (errorAuth) {
      setTimeout(() => {
        dispatch(actionLoginReducer.clearErrorAuth());
      }, 3000);
    }
  }, [errorAuth])

  useEffect(() => {
    if (errorOTP) {
      setTimeout(() => {
        dispatch(actionLoginReducer.clearErrorOtp());
      }, 3000);
    }
  }, [errorOTP])

  const checkCodeOtpForm = (codeOTP : string) => {
    dispatch(actionLoginReducer.checkCodeOtp(codeOTP));
  }

  const checkLoginPasswordForm = (login : string, password : string) => {
    dispatch(actionLoginReducer.checkLoginPassword(login, password));
  }

  return <>
    {isAuth && isAuthOTP ? (
      <Redirect to="/" />
    ) : isAuth ? (
      <Otp checkCodeOtp={checkCodeOtpForm} errorOTP={errorOTP} />
    ) : (
      <Login checkLoginPassword={checkLoginPasswordForm} errorAuth={errorAuth} />
    )}
  </>
}

export default LoginContainer;