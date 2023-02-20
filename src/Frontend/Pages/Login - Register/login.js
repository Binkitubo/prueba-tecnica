import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="register-section">
        <h1>Sign In</h1>
        <form className="register-form">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
          <button>Sign In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <label className="account-btn">Sign Up</label>
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
