import { getHomeVideos, getEachVideo, uploadVideoReducer } from "../Reducers";
import { loadEachVideo, loadHomeVideos, uploadVideo } from "../Actions";
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
    message: ''
  };
  const [state, dispatch] = useReducer(uploadVideoReducer, initialState);
  const uploadFunction = (video) => {
    uploadVideo(dispatch, video);
  };
  return { state, upload: uploadFunction };
};
