import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useSignup } from "../../Hooks/auth";
import { loadUser, signupUser } from "../../Actions";
import Toast from "../../Components/Toast";
import { useAuth } from "../../Contexts/auth-context";
const Signup = () => {
  const { dispatch } = useAuth();
  const { loading, message, success, dispatchSignup } = useSignup();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    signupUser(
      {
        channelName: userData.name,
        email: userData.email,
        password: userData.password,
      },
      dispatchSignup
    );
  };
  // Running Verify user after successful signup
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
          <h1>Get Started</h1>
          <p>Share your email, you will be our privileged user.</p>
        </section>
      </div>
      <div className="login-page-right">
        <section>
          <h1>Signup</h1>
          <p>You're one step before, for getting our premium service.</p>
        </section>
        <section>
          <Input
            label="Enter Name*"
            placeholder="John Doe"
            name="name"
            onChange={handleChange}
          />
          <Input
            label="Enter Email*"
            placeholder="johndoe@gmail.com"
            name="email"
            onChange={handleChange}
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
              name="Create Account"
            />
            <Link to="/login">Already have account?</Link>
          </div>
        </section>
      </div>
      {!loading && message && <Toast message={message} success={success} />}
    </div>
  );
};

export default Signup;
