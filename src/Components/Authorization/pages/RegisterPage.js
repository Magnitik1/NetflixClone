import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../components/SignUp";
import "./RegisterPage.css";
import flixua from "../image/FLIXUA.png";
import Footer from "../../Footer/Footer";
const RegisterPage = (props) => {
  return (
    <div className="register-page-container">
      <img className="img" src={flixua} alt=""></img>
      <SignUp />
      <Link className="sign-in-link" to="/login">Sign In</Link>

      <Footer lang={props.lang} changeLang={props.changeLang} text={props.text}/>
    </div>
  );
};

export default RegisterPage;
