import "./style.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar ">
      <div onClick={() => navigate("/")} className="logo pointer">
        <h2>VidTube</h2>
      </div>
      <Button
        onClick={() => navigate("/login")}
        id="navbar-btn"
        name="Login"
      />
    </nav>
  );
};

export default Navbar;
