import React from "react";
import { Form } from "../Form";
import "./logIn.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const LogIn = (props) => {
  return (
    <div className="LogInConteiner">
      <div className="form-container">
        <div className="sing-in-info">
          <p className="row">Sign In</p>
        </div>
        <Form
          title="Log In"
          setEmail={props.setEmail}
          email={props.email}
          setPassword={props.setPassword}
          password={props.password}
          setCurrentAccount={props.setCurrentAccount}
        />
        <div className="checkbox-container">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <label className="checkbox-label">
            <input type="checkbox" />
            Login with Facebook
          </label>
        </div>
        <p className="new-to-netflix">
          New to Netflix? <Link to="/SingUp">Sign up now</Link>
        </p>
        <p className="recaptcha-text">
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
          Learn more.
        </p>
        <div className="divider"></div>
        <div className="login-options">
          <span>Need help?</span>
          <span>© 2023 Netflix, Inc.</span>
        </div>
      </div>
      <Footer
        lang={props.lang}
        changeLang={props.changeLang}
        text={props.text}
      />
    </div>
  );
};

export default LogIn;
