import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passRef = useRef();

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="login-bt">Sign In</button>
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
            <input type="password" placeholder="password" ref={passRef} />
            <button
              className="reg-bt"
              onClick={() => setPassword(passRef.current.value)}
            >
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
