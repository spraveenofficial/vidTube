import {
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
  CLEAR_HISTORY,
  REMOVE_HISTORY_VIDEO,
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
    dispatch({
      type: FETCH_HISTORY_SUCCESS,
      payload: data.data ? data.data?.[0]?.videos : [],
    });
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
  } catch (error) {
    console.log(error);
  }
};

export const deleteHistoryAction = async (dispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${baseUrl}/history`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: CLEAR_HISTORY });
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideoFromHistory = async (videoId, dispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${baseUrl}/history/remove`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        videoId: videoId,
      },
    });
    dispatch({ type: REMOVE_HISTORY_VIDEO, payload: videoId });
  } catch (error) {
    console.log(error);
  }
};
