import {
  getHomeVideos,
  getEachVideo,
  uploadVideoReducer,
  getVideoLike,
} from "../Reducers";
import {
  fetchVideoLike,
  likeVideo,
  loadEachVideo,
  loadHomeVideos,
  uploadVideo,
} from "../Actions";
import { useAuth } from "../Contexts/auth-context";
import { useReducer, useEffect } from "react";

export const useHomePageVideos = () => {
  const initialState = {
    videos: [],
    loading: true,
    error: null,
    success: false,
  };
  const [state, dispatch] = useReducer(getHomeVideos, initialState);
  useEffect(() => {
    loadHomeVideos(dispatch);
  }, []);
  return { state };
};

export const useEachVideo = (videoId) => {
  const initialState = {
    video: {},
    loading: true,
    error: null,
    success: false,
  };
  const [state, dispatch] = useReducer(getEachVideo, initialState);
  useEffect(() => {
    loadEachVideo(dispatch, videoId);
  }, []);
  return { state, dispatch };
};

export const useVideoUpload = () => {
  const initialState = {
    loading: false,
    error: null,
    success: false,
    message: "",
  };
  const [state, dispatch] = useReducer(uploadVideoReducer, initialState);
  const uploadFunction = (video) => {
    uploadVideo(dispatch, video);
  };
  return { state, upload: uploadFunction };
};

export const useVideoLike = (videoId) => {
  const { isAuthenticated } = useAuth();
  const initialState = {
    liked: false,
    disLiked: false,
  };
  const [states, dispatch] = useReducer(getVideoLike, initialState);
  useEffect(() => {
    isAuthenticated && fetchVideoLike(dispatch, videoId);
  }, []);
  const handleLike = async (setDispatch) => {
    const status = await likeVideo(dispatch, videoId, "like");
    status == true
      ? setDispatch({ type: "INCREASELIKE" })
      : setDispatch({ type: "DECREASELIKE" });
  };
  const handleDisLike = async (setDispatch) => {
    const status = await likeVideo(dispatch, videoId, "dislike");
    if (status) {
      setDispatch({ type: "INCREASEDISLIKE" });
    } else {
      setDispatch({ type: "DECREASEDISLIKE" });
    }
  };
  return { states, handleLike, handleDisLike, isAuthenticated };
};
