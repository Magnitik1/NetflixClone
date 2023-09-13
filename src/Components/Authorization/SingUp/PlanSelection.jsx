import React, {useState} from 'react';
import './planSelectionInfo.css';
import { Link } from "react-router-dom";
import { Radio } from "@mui/material";

const PlanSelectionInfo = (props) => {
  let [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="centered-container">
      <a className="header-title">FLIXUA</a>
      <div className="plan-selection-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M6.875 21.875L15.625 30.625L33.125 11.875" stroke="#FFC107" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="plan-selection-header">
          <p className="step-text">Step 2 of 3</p>
          <p className="plan-title">Choose your plan</p>
        </div>
        <ul className="plan-list">
          <li className="plan-item">
            <span className="checkmark">&#10003;</span>
            <span className="plan-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </span>
          </li>
          <li className="plan-item">
            <span className="checkmark">&#10003;</span>
            <span className="plan-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </span>
          </li>
          <li className="plan-item">
            <span className="checkmark">&#10003;</span>
            <span className="plan-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </span>
          </li>
        </ul>
        1
      <Radio
        checked={selectedValue === "a"}
        onChange={() => {
          setSelectedValue("a");
        }}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      2
      <Radio
        checked={selectedValue === "b"}
        onChange={() => {
          setSelectedValue("b");
        }}
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
      />
      3
      <Radio
        checked={selectedValue === "c"}
        onChange={() => {
          setSelectedValue("c");
        }}
        value="c"
        name="radio-buttons"
        inputProps={{ "aria-label": "C" }}
      />
      4
      <Radio
        checked={selectedValue === "d"}
        onChange={() => {
          setSelectedValue("d");
        }}
        value="d"
        name="radio-buttons"
        inputProps={{ "aria-label": "D" }}
      />
      <Link to={selectedValue==''?"":"/LogIn"}>
        <button
          onClick={async () => {
            if (
              props.email == "" ||
              props.password == "" ||
              selectedValue == ""
            ) return;
            props.setEmail("");
            props.setPassword("");
            let data11 = await fetch("http://localhost:3000/process_post", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: props.email,
                password: props.password,
                plan: selectedValue,
                users: [],
              }),
            });
            props.setCurrentAccount(data11.json());
          }}
          
          className="sign-in-button1">
          Next
        </button>
      </Link>
      </div>
    </div>
  );
};

export default PlanSelectionInfo;