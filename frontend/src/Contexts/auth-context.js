import { createContext, useContext, useEffect, useReducer } from "react";
import { loadUser } from "../Actions";
import { authReducer } from "../Reducers";
const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const initialState = {
    isAuthenticated: false,
    loading: localStorage.getItem("token") ? true : false,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (token && !state.isAuthenticated) {
      loadUser(dispatch);
    }
  }, [token, dispatch]);

  return (
    <authContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthContextProvider, useAuth };
