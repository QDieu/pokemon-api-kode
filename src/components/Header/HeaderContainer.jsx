import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logoutAc } from "../../redux/login-reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <>
        {this.props.isAuth && this.props.isAuthOTP ? (
          <Header logout={this.props.logout} />
        ) : (
          <Redirect to="/login" />
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
    logout: () => {
      dispatch(logoutAc());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
