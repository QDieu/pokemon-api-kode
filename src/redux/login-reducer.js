const CHECK_LOGIN_PASSWORD = "CHECK_LOGIN_PASSWORD";
const CHECK_CODE_OTP = "CHECK_CODE_OTP";
const LOGOUT = "LOGOUT";
const CLEAR_ERROR_AUTH = "CLEAR_ERROR_AUTH";
const CLEAR_ERROR_OTP = "CLEAR_ERROR_OTP";

let initialState = {
  login: "kode@gmail.com",
  password: "12345678",
  isAuth: false,
  codeOTP: "123456",
  isAuthOTP: false,
  errorOTP: false,
  errorAuth: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_PASSWORD:
      if (action.login === state.login && action.password === state.password)
        return { ...state, isAuth: true, errorAuth: false };
      return { ...state, errorAuth: true };
    case CHECK_CODE_OTP:
      if (action.code === state.codeOTP) {
        return { ...state, isAuthOTP: true, errorOTP: false }
      };
      return { ...state, errorOTP: true };
    case CLEAR_ERROR_AUTH:
      return { ...state, errorAuth: false };
    case CLEAR_ERROR_OTP:
      return { ...state, errorOTP: false };
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

export const checkLoginPassword = (login, password) => ({
  type: CHECK_LOGIN_PASSWORD,
  login,
  password
});

export const clearErrorAuth = () => ({type : CLEAR_ERROR_AUTH });

export const clearErrorOtp = () => ({type : CLEAR_ERROR_OTP });

export const checkCodeOtp = (code) => ({ type: CHECK_CODE_OTP, code });

export const logout = () => ({ type: LOGOUT });

export default loginReducer;
