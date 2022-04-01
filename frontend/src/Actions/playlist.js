import {
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
} from "../Constants/playlist";
import axios from "axios";
import baseurl from "../Utils/baseurl";

export const fetchPlaylistAction = async (dispatch) => {
  dispatch({ type: FETCH_PLAYLIST_REQUEST });
  try {
    const { data } = await axios({
      url: `${baseurl}/playlist`,
      method: "GET",
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: FETCH_PLAYLIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PLAYLIST_FAILURE, payload: error.message });
  }
};
