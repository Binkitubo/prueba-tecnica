import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register-container">
        <form className="register">
          <h1>Register</h1>
          <input type="email" placeholder="Email..." />
          <input type="password" placeholder="Password..." />
          <input type="password" placeholder="Confirm Password..." />
          <input type="submit" value="Register" className="register-btn" />
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <label>Sign In</label>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
