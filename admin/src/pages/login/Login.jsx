import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-body">
      <div class="login-wrapper">
        <form className="login-form" action="">
          <h1>Admin Login</h1>
          <div class="login-input-box">
            <input type="text" placeholder="Username" required />
            <i class="bx bxs-user"></i>
          </div>
          <div class="login-input-box">
            <input type="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="login-remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" class="btn">
            Login
          </button>
          <div class="login-register-link">
            <p>
              Dont have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
