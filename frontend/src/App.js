import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoutes, GuestRoutes } from "./Utils/route";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import { useAuth } from "./Contexts/auth-context";
import Video from "./Pages/Video";
import Loader from "./Components/Loader";
import Upload from "./Pages/Upload";
import Channel from "./Pages/Channel";
import Playlist from "./Pages/Playlist";
import LikedVideo from "./Pages/LikedVideo";
import { Fragment } from "react";
import Sidebar from "./Components/Sidebar";
function App() {
  const { loading } = useAuth();
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="homepage">
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Sidebar />
                    <Home />
                  </Fragment>
                }
              />
              <Route
                path="/video/:id"
                element={
                  <Fragment>
                    <Sidebar />
                    <Video />
                  </Fragment>
                }
              />
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/liked-videos"
                  element={
                    <Fragment>
                      <Sidebar />
                      <LikedVideo />
                    </Fragment>
                  }
                />
                <Route
                  path="/upload"
                  element={
                    <Fragment>
                      <Sidebar />
                      <Upload />
                    </Fragment>
                  }
                />
                <Route
                  path="/playlist"
                  element={
                    <Fragment>
                      <Sidebar />
                      <Playlist />
                    </Fragment>
                  }
                />
                <Route
                  path="/channel"
                  element={
                    <Fragment>
                      <Sidebar />
                      <Channel />
                    </Fragment>
                  }
                />
              </Route>
              <Route element={<GuestRoutes />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
