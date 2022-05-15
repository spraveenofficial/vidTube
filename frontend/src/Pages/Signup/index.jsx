import "./style.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { useSignup } from "../../Hooks/auth";
import { loadUser, signupUser } from "../../Actions";
import Toast from "../../Components/Toast";
import { useAuth } from "../../Contexts/auth-context";
import { useFormik } from "formik";
const Signup = () => {
  const { dispatch } = useAuth();
  const { loading, message, success, dispatchSignup } = useSignup();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      signupUser(
        {
          channelName: values.name,
          email: values.email,
          password: values.password,
        },
        dispatchSignup
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
      if (!values.name) {
        errors.name = "Valid name is required";
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

        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <section>
            <Input
              label="Enter Name*"
              placeholder="John Doe"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
            <Input
              label="Enter Email*"
              placeholder="johndoe@gmail.com"
              name="email"
              onChange={formik.handleChange}
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
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
            <div className="login-btn">
              <Button loading={loading} name="Create Account" type="submit" />
              <Link to="/login">Already have account?</Link>
            </div>
          </section>
        </form>
      </div>
      {!loading && message && <Toast message={message} success={success} />}
    </div>
  );
};

export default Signup;
