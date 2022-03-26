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
  console.log(action.type);
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
    case "INCREASELIKE":
      return {
        ...state,
        ...(state.video.data.likes = state.video.data.likes + 1),
      };
    case "DECREASELIKE":
      return {
        ...state,
        ...(state.video.data.likes = state.video.data.likes - 1),
      };
    default:
      return state;
  }
};

export const uploadVideoReducer = (state, action) => {
  switch (action.type) {
    case UPLOAD_VIDEO:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Video uploaded successfully",
      };
    case UPLOAD_VIDEO_FAILURE:
      return {
        ...state,
        loading: false,
        message: "Video upload failed",
        success: false,
      };
    default:
      return state;
  }
};

export const getVideoLike = (state, action) => {
  switch (action.type) {
    case FETCH_VIDEO_LIKE:
      return {
        ...state,
      };
    case FETCH_VIDEO_LIKE_SUCCESS:
      return {
        ...state,
        liked: action.isLiked,
        disLiked: action.isDisliked,
      };
    case FETCH_VIDEO_LIKE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
  }
};
