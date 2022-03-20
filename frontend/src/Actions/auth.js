import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOAD_REQUEST,
  USER_LOAD_SUCCESS,
  USER_LOAD_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
} from "../Constants/auth";
import axios from "axios";
import baseUrl from "../Utils/baseurl";
export const loginUser = async (payload, dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/auth/login`,
      data: payload,
    });
    localStorage.setItem("token", data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signupUser = async (payload, dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/auth/signup`,
      data: payload,
    });
    localStorage.setItem("token", data.token);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loadUser = async (dispatch) => {
  try {
    dispatch({ type: USER_LOAD_REQUEST });
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/auth/verify`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!data.success) {
      localStorage.removeItem("token");
      dispatch({ type: USER_LOAD_FAILURE });
    } else {
      dispatch({
        type: USER_LOAD_SUCCESS,
        payload: data.data,
      });
    }
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({ type: USER_LOAD_FAILURE });
  }
};

export const nullUser = async (dispatch) => {
  dispatch({ type: USER_LOAD_FAILURE });
};
