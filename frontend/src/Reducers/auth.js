import {
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS,
} from "../Constants/auth";

export const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOAD_REQUEST:
      return { ...state, isAuthenticated: false, loading: true, user: null };
    case USER_LOAD_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case USER_LOAD_FAILURE:
      return { ...state, isAuthenticated: false, loading: false, user: null };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return { ...state, isAuthenticated: false, loading: false, user: null };
    default:
      return state;
  }
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Successfully Logged In",
        success: true,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const signupReducer = (state, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Successfully Signed Up",
        success: true,
      };
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
