import {
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAILURE,
} from "../Constants/subscriptions";

export const getSubscriptions = (state, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_SUBSCRIPTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        subscriptions: action.payload,
        success: true,
      };
    case GET_SUBSCRIPTIONS_FAILURE:
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
