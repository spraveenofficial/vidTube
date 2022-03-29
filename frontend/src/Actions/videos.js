import {
  LOAD_HOME_VIDEOS,
  LOAD_HOME_VIDEOS_SUCCESS,
  LOAD_HOME_VIDEOS_FAILURE,
  LOAD_EACH_VIDEO,
  LOAD_EACH_VIDEO_SUCCESS,
  LOAD_EACH_VIDEO_FAILURE,
  UPLOAD_VIDEO,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAILURE,
  FETCH_VIDEO_LIKE,
  FETCH_VIDEO_LIKE_SUCCESS,
  FETCH_VIDEO_LIKE_FAILURE,
  FETCH_LIKED_VIDEOS,
  FETCH_LIKED_VIDEOS_SUCCESS,
  FETCH_LIKED_VIDEOS_FAILURE,
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

export const fetchVideoLike = async (dispatch, videoId) => {
  try {
    dispatch({ type: FETCH_VIDEO_LIKE });
    const { data } = await axios({
      url: `${baseUrl}/feelings/check`,
      method: "POST",
      data: { videoId },
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: FETCH_VIDEO_LIKE_SUCCESS,
      isLiked: data.data.liked,
      isDisliked: data.data.disliked,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_VIDEO_LIKE_FAILURE, payload: error });
  }
};

export const likeVideo = async (dispatch, videoId, type) => {
  try {
    dispatch({ type: FETCH_VIDEO_LIKE });
    const { data } = await axios({
      url: `${baseUrl}/feelings/like`,
      method: "POST",
      data: {
        videoId,
        type,
      },
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({
      type: FETCH_VIDEO_LIKE_SUCCESS,
      isLiked: data.data.liked,
      isDisliked: data.data.disliked,
    });
    return data.data.liked ? true : data.data.disliked ? true : false;
  } catch (error) {
    dispatch({ type: FETCH_VIDEO_LIKE_FAILURE, payload: error });
  }
};

export const fetchLikedVideos = async (dispatch) => {
  try {
    dispatch({ type: FETCH_LIKED_VIDEOS });
    const { data } = await axios({
      url: `${baseUrl}/feelings/videos`,
      method: "GET",
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: FETCH_LIKED_VIDEOS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_LIKED_VIDEOS_FAILURE, payload: error });
  }
};
