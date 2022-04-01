import {
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
} from "../Constants/playlist";

export const fetchPlaylist = (state, action) => {
  switch (action.type) {
    case FETCH_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        playlist: action.payload,
        success: true,
      };
    case FETCH_PLAYLIST_FAILURE:
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
