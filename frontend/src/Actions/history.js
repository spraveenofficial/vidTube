import {
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
} from "../Constants/history";
import baseUrl from "../Utils/baseurl";
import axios from "axios";

export const fetchHistoryAction = async (dispatch) => {
  dispatch({ type: FETCH_HISTORY });
  try {
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/history`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(data);
    dispatch({ type: FETCH_HISTORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HISTORY_FAILURE, payload: error.message });
  }
};

export const updateHistoryAction = async (video) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/history`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        video: video,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteHistoryAction = async () => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${baseUrl}/history`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};