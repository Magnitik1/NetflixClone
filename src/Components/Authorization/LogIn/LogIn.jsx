import React from "react";
import { Form } from "../Form";
import "./logIn.css";
import Footer from "../../Footer/Footer";

const LogIn = (props) => {
  return (
    <>
      <div className="sign-up-container1">
        <div className="sing-in-info">
          <p className="row">Log In</p>
        </div>
        <Form
          title="Log In"
          setEmail={props.setEmail}
          email={props.email}
          setPassword={props.setPassword}
          password={props.password}
          setCurrentAccount={props.setCurrentAccount}
        />
      </div>
      <Footer
        lang={props.lang}
        changeLang={props.changeLang}
        text={props.text}
      />
    </>
  );
};

export default LogIn;
