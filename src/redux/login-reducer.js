const CHECK_LOGIN_PASSWORD = "CHECK_LOGIN_PASSWORD";
const CHECK_CODE_OTP = "CHECK_CODE_OTP";
const LOGOUT = "LOGOUT";

let initialState = {
  login: "qdieu",
  password: "123",
  isAuth: false,
  codeOTP: "123456",
  isAuthOTP: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_PASSWORD:
      if (action.login === state.login && action.password === state.password)
        return { ...state, isAuth: true };
      return { ...state };
    case CHECK_CODE_OTP:
      if (action.code === state.codeOTP) return { ...state, isAuthOTP: true };
      return { ...state };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        isAuthOTP: false
      };
    default:
      return { ...state };
  }
};

export const checkLoginPasswordAc = (login, password) => ({
  type: CHECK_LOGIN_PASSWORD,
  login,
  password
});

export const checkCodeOtpAc = (code) => ({ type: CHECK_CODE_OTP, code });

export const logoutAc = () => ({ type: LOGOUT });

export default loginReducer;
