import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  checkCodeOtpAc,
  checkLoginPasswordAc
} from "../../redux/login-reducer";
import Login from "./Login";
import Otp from "./Otp";

class LoginContainer extends React.Component {
  render() {
    console.log(this.props.isAuth);
    return (
      <>
        {this.props.isAuth && this.props.isAuthOTP ? (
          <Redirect to="/" />
        ) : this.props.isAuth ? (
          <Otp checkCodeOtp={this.props.checkCodeOtp} />
        ) : (
          <Login checkLoginPassword={this.props.checkLoginPassword} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isAuthOTP: state.auth.isAuthOTP
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkLoginPassword: (login, password) => {
      dispatch(checkLoginPasswordAc(login, password));
    },
    checkCodeOtp: (code) => {
      dispatch(checkCodeOtpAc(code));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
