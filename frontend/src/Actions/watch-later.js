import axios from "axios";
import baseUrl from "../Utils/baseurl";
import {
  FETCH_WATCHLATER_REQUEST,
  FETCH_WATCHLATER_REQUEST_SUCCESS,
  FETCH_WATCHLATER_REQUEST_FAILURE,
  DELETE_FROM_WATCH_LATER,
} from "../Constants/video";
const addToWatchLaterAction = async (videoId) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/watchlater/add`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        videoId,
      },
    });
    if (data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const fetchWatchLater = async (dispatch) => {
  try {
    dispatch({
      type: FETCH_WATCHLATER_REQUEST,
    });
    const { data } = await axios({
      method: "GET",
      url: `${baseUrl}/watchlater`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: FETCH_WATCHLATER_REQUEST_SUCCESS,
      payload: data.videos,
    });
  } catch (err) {
    dispatch({
      type: FETCH_WATCHLATER_REQUEST_FAILURE,
      payload: err,
    });
  }
};

const deleteFromWatchLaterAction = async (videoId) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${baseUrl}/watchlater/delete`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        videoId,
      },
    });
    if (data.success) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
export { addToWatchLaterAction, fetchWatchLater, deleteFromWatchLaterAction };
