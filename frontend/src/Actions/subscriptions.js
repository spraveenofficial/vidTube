import {
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_SUCCESS,
  GET_SUBSCRIPTIONS_FAILURE,
} from "../Constants/subscriptions";
import baseUrl from "../Utils/baseurl";
import axios from "axios";
export const loadSubscriptions = async (dispatch) => {
  try {
    dispatch({ type: GET_SUBSCRIPTIONS });
    const { data } = await axios({
      method: "get",
      url: `${baseUrl}/subscription/channels`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: GET_SUBSCRIPTIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_SUBSCRIPTIONS_FAILURE, payload: error.message });
  }
};

export const subscribeChannel = async (channelId) => {
  try {
    const { data } = await axios({
      method: "post",
      url: `${baseUrl}/subscription`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        channelId,
      },
    });
    return data.subscribed ? true : false;
  } catch (error) {
    console.log(error);
  }
};
