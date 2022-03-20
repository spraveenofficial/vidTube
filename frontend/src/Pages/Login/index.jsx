import "./style.css";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-page">
      <div
        style={{ backgroundImage: `url(/images/cc.jpg)` }}
        className="login-page-left"
      >
        <section>
          <h1>Login Now</h1>
          <p>Access the Video Arena Now. In your Fingertip.</p>
        </section>
      </div>
      <div className="login-page-right">
        <section>
          <h1>Login</h1>
          <p>Log in and explore all of your VidTube Feature.</p>
        </section>
        <section>
          <Input label="Enter Email*" placeholder="johndoe@gmail.com" />
          <Input
            placeholder="Enter your Password"
            type="password"
            label="Enter Password*"
          />
          <div className="login-btn">
            <Button name="Login Now" />
            <Link to="/signup">New User?</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
