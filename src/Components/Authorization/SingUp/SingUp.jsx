import React from "react";
import { Form } from "../Form";
import "./singUp.css";
import Footer from "../../Footer/Footer";

const SingUp = (props) => {
  return (
    <>
      <div className="sign-up-container">
        <div className="registration-info">
          <p className="row1">Step 1 of 3</p>
          <p className="row2">Create a password to start your membership</p>
          <p className="row3">Just a few more steps and you’re done!</p>
          <p className="row4">We hate paperwork, too.</p>
        </div>
        <Form
          title="Next"
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

export default SingUp;
