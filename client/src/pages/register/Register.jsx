import React, { useRef, useState } from "react";
import "./register.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const usernameRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passRef.current.value);

    axios
      .post(`${import.meta.env.VITE_SERVER}/api/auth/register`, {
        username,
        email,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register">
      <div className="top">
        <div className="reg-wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className="link" to="/login">
            <button className="reg-login-bt">Sign In</button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhre. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button
              className="reg-bt"
              onClick={() => setEmail(emailRef.current.value)}
            >
              Get Started
            </button>
          </div>
        ) : (
          <form action="" className="input">
            <input type="text" placeholder="username" ref={usernameRef} />

            <input type="password" placeholder="password" ref={passRef} />
            <button className="reg-bt" onClick={handleRegister}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
