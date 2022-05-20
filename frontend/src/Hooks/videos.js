import {
  getHomeVideos,
  getEachVideo,
  uploadVideoReducer,
  getVideoLike,
  getLikedVideos,
  getWatchLater,
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
  createNotes,
  addToWatchLaterAction,
  fetchWatchLater,
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
  const { isAuthenticated, user } = useAuth();
  const initialState = {
    liked: false,
    disLiked: false,
    isSubscribed: false,
    isWatchLatered: false,
    notes: [],
  };
  const [states, dispatch] = useReducer(getVideoLike, initialState);
  useEffect(() => {
    isAuthenticated && fetchVideoLike(dispatch, videoId);
  }, []);
  const handleWatchLater = async () => {
    const status = await addToWatchLaterAction(videoId);
    if (status) {
      dispatch({
        type: "UPDATE_WATCH_LATER",
        payload: true,
      });
    } else {
      dispatch({
        type: "UPDATE_WATCH_LATER",
        payload: false,
      });
    }
  };
  const handleLike = async (setDispatch) => {
    const status = await likeVideo(dispatch, videoId, "like");
    status === true
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
  const handleCreateNotes = async (videoId, notes) => {
    const payload = {
      videoId,
      notes,
      createdAt: new Date(),
    };
    const status = await createNotes(dispatch, payload);
    return status;
  };
  return {
    states,
    handleLike,
    handleDisLike,
    isAuthenticated,
    handleSubscribes,
    userData: user,
    handleCreateNotes,
    handleWatchLater,
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

export const useWatchLater = () => {
  const initialState = {
    loading: true,
    success: false,
    message: "",
    videos: [],
  };
  const [state, dispatch] = useReducer(getWatchLater, initialState);
  useEffect(() => {
    fetchWatchLater(dispatch);
  }, []);

  return { state };
};
