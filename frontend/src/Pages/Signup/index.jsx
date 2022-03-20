import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
const Signup = () => {
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
          <Input label="Enter Name*" placeholder="John Doe" />
          <Input label="Enter Email*" placeholder="johndoe@gmail.com" />
          <Input
            placeholder="Enter your Password"
            type="password"
            label="Enter Password*"
          />
          <div className="login-btn">
            <Button name="Create Account" />
            <Link to="/login">Already have account?</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
