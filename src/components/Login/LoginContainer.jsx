import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  checkCodeOtp,
  checkLoginPassword,
  clearErrorAuth,
  clearErrorOtp
} from "../../redux/login-reducer";
import Login from "./Login";
import Otp from "./Otp";

const LoginContainer = () => {
  console.log('Login render');
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.isAuth);
  const isAuthOTP = useSelector(state => state.auth.isAuthOTP);
  const errorOTP = useSelector(state => state.auth.errorOTP)
  const errorAuth = useSelector(state => state.auth.errorAuth)

  useEffect(() => {
    if (errorAuth) {
      setTimeout(() => {
        dispatch(clearErrorAuth());
      }, 3000);
    }
  }, [errorAuth])

  useEffect(() => {
    if (errorOTP) {
      setTimeout(() => {
        dispatch(clearErrorOtp());
      }, 3000);
    }
  }, [errorOTP])

  const checkCodeOtpForm = (codeOTP) => {
    dispatch(checkCodeOtp(codeOTP));
  }

  const checkLoginPasswordForm = (login, password) => {
    dispatch(checkLoginPassword(login, password));
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