import "./style.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/auth-context";
import { useRef } from "react";
import { useDetectOutsideClick } from "../../Utils/useDetectOutsideClick";
import baseurl from "../../Utils/baseurl";
const Navbar = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, dispatch } = useAuth();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };
  return (
    <nav className="navbar ">
      <div onClick={() => navigate("/")} className="logo pointer">
        <h2>VidTube</h2>
      </div>
      <div className="flex md:order-2">
        {isAuthenticated ? (
          <div className="navbar__left flex dash-container">
            <div className="user-menu-container">
              <button onClick={onClick} className="user-menu-trigger">
                <span>Welcome, {user.channelName}</span>
                <img src={`${baseurl}/${user.photoUrl}`} alt="User" />
              </button>
              <div
                ref={dropdownRef}
                className={`user-menu ${isActive ? "active" : "inactive"}`}
              >
                <ul>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="px-2">My Channel</span>
                  </div>
                  <div onClick={() => handleLogout()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="px-2">Log out</span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            id="navbar-btn"
            name="Login"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
