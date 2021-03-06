import {
  FETCH_HISTORY,
  FETCH_HISTORY_SUCCESS,
  FETCH_HISTORY_FAILURE,
  CLEAR_HISTORY,
  REMOVE_HISTORY_VIDEO,
} from "../Constants/history";

export const fetchHistory = (state, action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return {
        ...state,
        loading: true,
      };
    case FETCH_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        history: action.payload,
      };
    case FETCH_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
        history: [],
      };
    case REMOVE_HISTORY_VIDEO:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
        history: state.history.filter((video) => video.id !== action.payload),
      };
    default:
      return state;
  }
};
