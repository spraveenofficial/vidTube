import { useEffect } from "react";
import { loadSubscriptions, subscribeChannel } from "../Actions";
import { getSubscriptions } from "../Reducers";
import { useReducer } from "react";
export const useSubscriptions = () => {
  const initialState = {
    loading: false,
    error: null,
    subscriptions: [],
    success: false,
  };
  const [state, dispatch] = useReducer(getSubscriptions, initialState);
  useEffect(() => {
    loadSubscriptions(dispatch);
  }, []);

  return { loading: state.loading, error: state.error, subscriptions: state.subscriptions, success: state.success };
};

export const useSubscribe = () => {
  const subscribe = async (channelId) => {
    subscribeChannel(channelId);
  };
  return { subscribe };
};
