import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoutes, GuestRoutes } from "./Utils/route";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { useAuth } from "./Contexts/auth-context";
import { loadUser } from "./Actions";
import Video from "./Pages/Video";
import Loader from "./Components/Loader";
function App() {
  const { isAuthenticated, loading, dispatch } = useAuth();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token && !isAuthenticated) {
      loadUser(dispatch);
    }
  }, [token, dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<Video />} />
            <Route element={<GuestRoutes />}>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
