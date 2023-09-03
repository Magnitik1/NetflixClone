import { useEffect, useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  let email1 = "",
    pass1 = "";
  let navigate = useNavigate();
  let hendleSingIn = async () => {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    email1 = document.getElementById("em").value;
    pass1 = document.getElementById("pa").value;
    let prap = true;
    if (props.title === "Log In") {
      data.map((e) => {
        if (e.email == email1 && e.password == pass1) {
          console.log(e);
          alert("success");
          prap = false;
          navigate("/Home");
        }
      });
      if (prap) {
        alert("Wrong email or password");
      }
    } else {
      if (email1.trim() == "" || pass1.trim() == "") return;
      data.map((e) => {
        if (e.email == email1) {
          alert("not success");
          prap=false
          return;
        }
      });
      if(!prap){return}
      navigate("/PlanSelectionInfo");
    }
  };

  useEffect(() => {
    props.setEmail("");
    props.setPassword("");
  }, []);

  return (
    <div className="form-container">
      <Link to={props.title === "Log In" ? "/SingUp" : "/LogIn"}>
        <a className="SingUp-or-LogIn">
          {props.title === "Log In" ? "Sing Up" : "Log In"}
        </a>
      </Link>
      <div className="input-container">
        <input
          id="em"
          className="email"
          type="email"
          onChange={(e) => ((email1 = e.target.value), props.setEmail(email1))}
          placeholder="Email"
        />
        <input
          id="pa"
          className="password"
          type="password"
          onChange={(e) => ((pass1 = e.target.value), props.setPassword(pass1))}
          placeholder="Password"
        />
      </div>
      <button className="sign-in-button1" onClick={hendleSingIn}>
        {props.title}
      </button>
    </div>
  );
};

export { Form };
