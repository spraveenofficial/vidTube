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
import Sidebar from "./Components/Sidebar";
import Subscription from "./Pages/Subscription";
import History from "./Pages/History";
import WatchLater from "./Pages/WatchLater";
function App() {
  const { loading } = useAuth();
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="homepage">
                  <Sidebar />
                  <Home />
                </div>
              }
            />
            <Route
              path="/video/:id"
              element={
                <div className="homepage">
                  <Sidebar />
                  <Video />
                </div>
              }
            />
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/liked-videos"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <LikedVideo />
                  </div>
                }
              />
              <Route
                path="/subscriptions"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <Subscription />
                  </div>
                }
              />
              <Route
                path="/upload"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <Upload />
                  </div>
                }
              />
              <Route
                path="/playlist"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <Playlist />
                  </div>
                }
              />
              <Route
                path="/channel"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <Channel />
                  </div>
                }
              />
              <Route
                path="/history"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <History />
                  </div>
                }
              />
              <Route
                path="/watchlater"
                element={
                  <div className="homepage">
                    <Sidebar />
                    <WatchLater />
                  </div>
                }
              />
            </Route>
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
