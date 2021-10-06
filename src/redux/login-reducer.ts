import { InferActionsTypes } from "./redux-store";

let initialState = {
  login: "kode@gmail.com",
  password: "12345678",
  isAuth: false,
  codeOTP: "123456",
  isAuthOTP: false,
  errorOTP: false,
  errorAuth: false,
};

type InitialStateLogin = typeof initialState;

const loginReducer = (state = initialState, action : LoginReducerType) : InitialStateLogin => {
  switch (action.type) {
    case "CHECK_LOGIN_PASSWORD":
      if (action.login === state.login && action.password === state.password)
        return { ...state, isAuth: true, errorAuth: false };
      return { ...state, errorAuth: true };
    case "CHECK_CODE_OTP":
      if (action.code === state.codeOTP) {
        return { ...state, isAuthOTP: true, errorOTP: false }
      };
      return { ...state, errorOTP: true };
    case "CLEAR_ERROR_AUTH":
      return { ...state, errorAuth: false };
    case "CLEAR_ERROR_OTP":
      return { ...state, errorOTP: false };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        isAuthOTP: false
      };
    default:
      return { ...state };
  }
};

export type LoginReducerType = InferActionsTypes<typeof actionLoginReducer>

export const actionLoginReducer = {
  checkLoginPassword : (login : string, password : string) => ({
    type: "CHECK_LOGIN_PASSWORD",
    login,
    password
  } as const),
  clearErrorAuth : () => ({type : "CLEAR_ERROR_AUTH" } as const),
  clearErrorOtp : () => ({type : "CLEAR_ERROR_OTP" } as const),
  checkCodeOtp : (code : string) => ({ type: "CHECK_CODE_OTP", code } as const),
  logout : () => ({ type: "LOGOUT" } as const),
}

export default loginReducer;
