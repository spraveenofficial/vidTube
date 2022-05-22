import {
  FETCH_PLAYLIST_REQUEST,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_FAILURE,
  ADD_PLAYLIST_REQUEST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILURE,
  ADD_NEW_PLAYLIST,
  DELETE_PLAYLIST,
  REMOVE_VIDEO_FROM_PLAYLIST,
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
    case ADD_NEW_PLAYLIST:
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
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          data: state.playlist.data.filter(
            (playlist) => playlist._id !== action.payload
          ),
        },
      };
    case REMOVE_VIDEO_FROM_PLAYLIST:
      return {
        ...state,
        playlist: {
          ...state.playlist,
          data: state.playlist.data.map((playlist) => {
            if (playlist._id === action.payload.playlistId) {
              return {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video._id !== action.payload.videoId
                ),
              };
            }
            return playlist;
          }),
        },
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
