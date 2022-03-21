import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducers";
const authContext = createContext();

const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const initialState = {
    isAuthenticated: false,
    loading: localStorage.getItem("token") ? true : false,
    user: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
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
