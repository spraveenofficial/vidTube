import "./style.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/auth-context";
import { useDetectOutsideClick } from "../../Utils/useDetectOutsideClick";
import Button from "../Button";
import baseurl from "../../Utils/baseurl";
import { UploadIcon } from "../Icons";
const Navbar = () => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, dispatch } = useAuth();
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [deviceType, setDeviceType] = useState("desktop");
  const handleLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  useEffect(() => {
    updateDeviceType(window.innerWidth);
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      updateDeviceType(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        updateDeviceType(window.innerWidth);
      });
    };
  });
  const [showNav, setNav] = useState(false);
  const hideNav = () => {
    setNav(false);
  };
  const updateDeviceType = (width) => {
    if (width >= 900) {
      setDeviceType("desktop");
      hideNav();
      return;
    }
    setDeviceType("mobile");
  };
  return (
    <>
      {deviceType === "desktop" ? (
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
                    className={`user-menu ${isActive ? "actives" : "inactive"}`}
                  >
                    <ul>
                      <div
                        onClick={() =>
                          navigate("/channel") || setIsActive(false)
                        }
                      >
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
                      <div
                        onClick={() =>
                          navigate("/upload") || setIsActive(false)
                        }
                      >
                        <UploadIcon />
                        <span className="px-2">Upload</span>
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
      ) : (
        <div className="mobile-menu">
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
                      className={`user-menu ${
                        isActive ? "actives" : "inactive"
                      }`}
                    >
                      <ul>
                        <div
                          onClick={() =>
                            navigate("/channel") || setIsActive(false)
                          }
                        >
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
                        <div
                          onClick={() =>
                            navigate("/upload") || setIsActive(false)
                          }
                        >
                          <UploadIcon />
                          <span className="px-2">Upload</span>
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
            <svg
              className="pointer"
              onClick={() => {
                setNav(!showNav);
              }}
              width="26px"
              height="26px"
              fill="#111"
              viewBox="0 0 24 24"
            >
              <path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path>
            </svg>
          </nav>
        </div>
      )}
      <AnimatePresence>
        {showNav ? (
          <motion.div
            className="mobile-nav-container"
            initial={{
              x: "100%",
            }}
            animate={{
              x: "calc(100vw - 50%)",
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "tween",
              // ease: [0.87, 0.07, 0.37, 0.97],
              duration: 0.3,
            }}
          >
            <motion.div className="mobnavitems">
              <svg
                onClick={() => {
                  setNav(!showNav);
                }}
                className="pointer"
                fill="#111"
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
              >
                <path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path>
              </svg>
              <div className="mobile-nav-items">
                <p onClick={() => navigate("/") || setNav(!setNav)}>Home</p>
                <p
                  onClick={() => navigate("/subscriptions") || setNav(!setNav)}
                >
                  Subscriptions
                </p>
                <p onClick={() => navigate("/playlist") || setNav(!setNav)}>
                  Playlists
                </p>
                <p onClick={() => navigate("/liked-videos") || setNav(!setNav)}>
                  Liked Videos
                </p>
                <p onClick={() => navigate("/history") || setNav(!setNav)}>
                  History
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
