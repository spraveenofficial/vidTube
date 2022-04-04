import { useEffect, useReducer } from "react";
import { fetchHistoryAction } from "../Actions";
import { fetchHistory } from "../Reducers";

export const useHistory = () => {
  const initialState = {
    loading: false,
    error: null,
    history: [],
    success: false,
  };
  const [state, dispatch] = useReducer(fetchHistory, initialState);
  const { loading, error, history, success } = state;
  useEffect(() => {
    fetchHistoryAction(dispatch);
  }, []);
  return { loading, error, history, success };
};
