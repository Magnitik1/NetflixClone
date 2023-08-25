import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../store/slices/usersSlice";
// import './Login.css'
const Login = (props) => {
  const {
    container,
    formWrapper,
    loginTitle,
    checkboxContainer,
    checkboxLabel,
    newToNetflix,
    recaptchaText,
    divider,
    loginOptions,
    inputContainer,
    email, 
    password, 
  } = props.login_style; 
  console.log(props.login_style);

  const dispatch = useDispatch();
  const { push } = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/HP");
      })
      .catch(() => alert("Invalid user!"));
  };

  
  return (
    <div
      className="login-container"
      style={{
        container
      }}
    >
      <div className="login-form" style={{formWrapper}}>
        <h2 className="login-title" style={{loginTitle}}>
          Sign in
        </h2>
        <Form style={{inputContainer,email, password}} title="Sign in" handleClick={handleLogin} />
        <div className="checkbox-container" style={{checkboxContainer}}>
          <label style={{checkboxLabel}}>
            <input type="checkbox" />
            Remember me
          </label>
          <label className="checkbox-label">
            <input type="checkbox" />
            Login with Facebook
          </label>
        </div>
        <p className="new-to-netflix" style={{newToNetflix}}>
          New to Netflix? Sign up now
        </p>
        <p className="recaptcha-text" style={{recaptchaText}}>
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
          Learn more.
        </p>
        <div className="divider" style={{divider}}></div>
        <div className="login-options" style={{loginOptions}}>
          <span>Need help?</span>
          <span>© 2023 Netflix, Inc.</span>
        </div>
      </div>
    </div>
  );
};

export { Login };
