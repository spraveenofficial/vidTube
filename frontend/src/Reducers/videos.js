import {
  LOAD_HOME_VIDEOS,
  LOAD_HOME_VIDEOS_SUCCESS,
  LOAD_HOME_VIDEOS_FAILURE,
  LOAD_EACH_VIDEO,
  LOAD_EACH_VIDEO_SUCCESS,
  LOAD_EACH_VIDEO_FAILURE,
} from "../Constants/video";

export const getHomeVideos = (state, action) => {
  switch (action.type) {
    case LOAD_HOME_VIDEOS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: action.payload,
        success: true,
      };
    case LOAD_HOME_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getEachVideo = (state, action) => {
  switch (action.type) {
    case LOAD_EACH_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case LOAD_EACH_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        video: action.payload,
        success: true,
      };
    case LOAD_EACH_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
