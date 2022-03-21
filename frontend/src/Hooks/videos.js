import { getHomeVideos, getEachVideo } from "../Reducers";
import { loadEachVideo, loadHomeVideos } from "../Actions";
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
