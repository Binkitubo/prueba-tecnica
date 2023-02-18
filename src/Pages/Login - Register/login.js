import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <form className="login">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <input type="submit" value="Sign In" className="login-btn" />
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <label>Sign Up</label>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
