import "./style.css";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLogin } from "../../Hooks/auth";
import { loadUser, loginUser } from "../../Actions";
import { useAuth } from "../../Contexts/auth-context";
import Toast from "../../Components/Toast";
import { useFormik } from "formik";
const Login = () => {
  const { dispatch } = useAuth();
  const { loading, success, message, dispatchLogin } = useLogin();
  const [isGuest, setIsGuest] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      loginUser(
        {
          email: values.email,
          password: values.password,
        },
        dispatchLogin
      );
    },
    validate: (values) => {
      const regularExpression = new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      );
      let errors = {};
      if (!values.email) {
        errors.email = "Valid email is required";
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Valid password is required";
      } else if (!regularExpression.test(values.password)) {
        errors.password =
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
      }
      return errors;
    },
  });

  // Handle Guest Login
  const handleGuestLogin = () => {
    formik.setFieldValue("email", "spraveen593@gmail.com");
    formik.setFieldValue("password", "Praveen8874@");
    setIsGuest(true);
    formik.handleSubmit();
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
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <section>
            <Input
              label="Enter Email*"
              name="email"
              onChange={formik.handleChange}
              placeholder="johndoe@gmail.com"
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
            <Input
              placeholder="Enter your Password"
              type="password"
              label="Enter Password*"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
            <div className="login-btn mb-10">
              <Button
                loading={!isGuest && loading}
                name="Login Now to Vidtube"
                type="submit"
              />
              <Link to="/signup">New User?</Link>
            </div>
            <div className="guest-user w-full">
              <Button
                loading={isGuest}
                name="Guest Login to Vidtube"
                onClick={handleGuestLogin}
              />
            </div>
          </section>
        </form>
      </div>
      {!loading && message && <Toast message={message} success={success} />}
    </div>
  );
};

export default Login;
