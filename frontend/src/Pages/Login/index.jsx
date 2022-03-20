import "./style.css";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLogin } from "../../Hooks/auth";
import { loadUser, loginUser } from "../../Actions";
import { useAuth } from "../../Contexts/auth-context";
import Toast from "../../Components/Toast";
const Login = () => {
  const { dispatch } = useAuth();
  const { loading, success, message, dispatchLogin } = useLogin();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    loginUser(
      {
        email: userData.email,
        password: userData.password,
      },
      dispatchLogin
    );
  };
  // Running Verify user after successful login
  useEffect(() => {
    success === true &&
      setTimeout(() => {
        loadUser(dispatch);
      }, 1000);
  }, [dispatch, success]);
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
          <Input
            label="Enter Email*"
            name="email"
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
          />
          <Input
            placeholder="Enter your Password"
            type="password"
            label="Enter Password*"
            name="password"
            onChange={handleChange}
          />
          <div className="login-btn">
            <Button
              onClick={() => handleSubmit()}
              loading={loading}
              name="Login Now"
            />
            <Link to="/signup">New User?</Link>
          </div>
        </section>
      </div>
      {!loading && message && <Toast message={message} success={success} />}
    </div>
  );
};

export default Login;
