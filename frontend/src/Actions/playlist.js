import {
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
  ADD_PLAYLIST_REQUEST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILURE,
  DELETE_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
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

export const addPlaylistAction = async (dispatch, payload) => {
  dispatch({ type: ADD_PLAYLIST_REQUEST });
  try {
    const { data } = await axios({
      url: `${baseurl}/playlist/create`,
      method: "POST",
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: payload,
    });
    dispatch({ type: ADD_PLAYLIST_SUCCESS, payload: data });
    return data;
  } catch (err) {
    dispatch({ type: ADD_PLAYLIST_FAILURE, payload: err.message });
  }
};

export const addVideoToExistingPlaylist = async (playlistId, videoId) => {
  try {
    const { data } = await axios({
      method: "PUT",
      url: `${baseurl}/playlist/addVideo/${playlistId}/${videoId}`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deletePlaylist = async (playlistId, dispatch) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${baseurl}/playlist/delete`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        playlistId,
      },
    });
    dispatch({ type: DELETE_PLAYLIST, payload: playlistId });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteVideoFromPlaylist = async (
  playlistId,
  videoId,
  dispatch
) => {
  try {
    const { data } = await axios({
      method: "DELETE",
      url: `${baseurl}/playlist/delete/${playlistId}/${videoId}`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: REMOVE_VIDEO_FROM_PLAYLIST,
      payload: { playlistId, videoId },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
