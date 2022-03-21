import {
  LOAD_HOME_VIDEOS,
  LOAD_HOME_VIDEOS_SUCCESS,
  LOAD_HOME_VIDEOS_FAILURE,
  LOAD_EACH_VIDEO,
  LOAD_EACH_VIDEO_SUCCESS,
  LOAD_EACH_VIDEO_FAILURE,
  LIKE_VIDEO,
  LIKE_VIDEO_SUCCESS,
  LIKE_VIDEO_FAILURE,
  UPLOAD_VIDEO,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAILURE,
} from "../Constants/video";
import axios from "axios";
import baseUrl from "../Utils/baseurl";
export const loadHomeVideos = async (dispatch) => {
  try {
    dispatch({ type: LOAD_HOME_VIDEOS });
    const { data } = await axios({
      url: `${baseUrl}/video`,
      method: "GET",
    });
    dispatch({ type: LOAD_HOME_VIDEOS_SUCCESS, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: LOAD_HOME_VIDEOS_FAILURE, payload: err });
  }
};

export const loadEachVideo = async (dispatch, videoId) => {
  try {
    dispatch({ type: LOAD_EACH_VIDEO });
    const { data } = await axios({
      url: `${baseUrl}/video/${videoId}`,
      method: "GET",
    });
    dispatch({ type: LOAD_EACH_VIDEO_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: LOAD_EACH_VIDEO_FAILURE, payload: err });
  }
};

export const likeVideo = async (dispatch, videoId) => {
  try {
    dispatch({ type: LIKE_VIDEO });
    const { data } = await axios({
      url: `${baseUrl}/feelings/like`,
      method: "POST",
      data: {
        videoId,
        type: "like",
      },
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: LIKE_VIDEO_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LIKE_VIDEO_FAILURE, payload: error });
  }
};

export const uploadVideo = async (dispatch, formData) => {
  try {
    dispatch({ type: UPLOAD_VIDEO });
    const { data } = await axios({
      url: `${baseUrl}/video/upload`,
      method: "POST",
      data: formData,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: UPLOAD_VIDEO_SUCCESS });
  } catch (error) {
    console.log(error);
    dispatch({ type: UPLOAD_VIDEO_FAILURE });
  }
};
