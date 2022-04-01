import {
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
  ADD_PLAYLIST_REQUEST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILURE,
  ADD_NEW_PLAYLIST,
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
    case "ADD_NEW_PLAYLIST":
      return {
        ...state,
        playlist: {
          ...state.playlist,
          data: state.playlist.data.concat(action.payload),
        },
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

export const addPlaylist = (state, action) => {
  switch (action.type) {
    case ADD_PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PLAYLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        playlist: action.payload,
        success: true,
      };
    case ADD_PLAYLIST_FAILURE:
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
