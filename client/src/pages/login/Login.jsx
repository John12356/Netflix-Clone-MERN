import React, { useContext, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form action="">
          <h1>Sign In</h1>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or phone number"
          />
          <input
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleLogin} className="login-bt">
            Sign In
          </button>
          <span>
            New to Netflix?
            <Link className="link" to="/register">
              <b>Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure your're not a
            bot <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
