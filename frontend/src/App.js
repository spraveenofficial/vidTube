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
              <Route path="/" element={<Home />} />
              <Route path="/video/:id" element={<Video />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/upload" element={<Upload />} />
                <Route path="/channel" element={<Channel />} />
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
