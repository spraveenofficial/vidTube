import {
  getHomeVideos,
  getEachVideo,
  uploadVideoReducer,
  getVideoLike,
  getLikedVideos,
} from "../Reducers";
import {
  fetchLikedVideos,
  fetchVideoLike,
  likeVideo,
  loadEachVideo,
  loadHomeVideos,
  subscribeChannel,
  updateHistoryAction,
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
  const { isAuthenticated } = useAuth();
  const initialState = {
    video: {},
    loading: true,
    error: null,
    success: false,
  };
  const [state, dispatch] = useReducer(getEachVideo, initialState);
  useEffect(() => {
    loadEachVideo(dispatch, videoId);
    return () => {
      console.log(state.success);
      isAuthenticated && updateHistoryAction(videoId);
    };
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
    isSubscribed: false,
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
  const handleSubscribes = async (id) => {
    const status = await subscribeChannel(id);
    if (status) {
      dispatch({ type: "UPDATE_SUBSCRIPTION", isSubscribed: true });
    } else {
      dispatch({ type: "UPDATE_SUBSCRIPTION", isSubscribed: false });
    }
  };
  return {
    states,
    handleLike,
    handleDisLike,
    isAuthenticated,
    handleSubscribes,
  };
};

export const useLikedVideos = () => {
  const initialState = {
    videos: [],
    loading: true,
    error: null,
    success: false,
  };
  const [state, dispatch] = useReducer(getLikedVideos, initialState);
  useEffect(() => {
    fetchLikedVideos(dispatch);
  }, []);
  return { state };
};
