import "./style.css";
import { useAuth } from "../../Contexts/auth-context";
import baseUrl from "../../Utils/baseurl";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <NavLink activeclassname="active" to="/">
          <div className="menu-item">
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink activeclassname="active" to="/trending">
          <div className="menu-item">
            <span>Trending</span>
          </div>
        </NavLink>
        <NavLink activeclassname="active" to="/subscriptions">
          <div className="menu-item">
            <span>Subscriptions</span>
          </div>
        </NavLink>
        <NavLink activeclassname="active" to="/playlist">
          <div className="menu-item">
            <span>Playlist</span>
          </div>
        </NavLink>
        <NavLink activeclassname="active" to="/liked-videos">
          <div className="menu-item">
            <span>Liked Videos</span>
          </div>
        </NavLink>
        <NavLink activeclassname="active" to="/history">
          <div className="menu-item">
            <span>History</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
