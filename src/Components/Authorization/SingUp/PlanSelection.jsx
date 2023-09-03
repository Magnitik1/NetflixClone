import React, { useState } from "react";
import "./planSelectionInfo.css";
import { Link } from "react-router-dom";
import { Radio } from "@mui/material";

const PlanSelection = (props) => {
  let [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="plan-selection-container">
      <div className="plan-selection-header">
        <p className="step-text">Step 3 of 3</p>
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
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "C" }}
      />
      <Link to={selectedValue==''?"":"/LogIn"}>
        <button
          onClick={async () => {
            if (
              props.email == "" ||
              props.password == "" ||
              selectedValue == ""
            )
              return;
            props.setEmail("");
            props.setPassword("");
            await fetch("http://localhost:3000/process_post", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: props.email,
                email: props.email,
                password: props.password,
                plan: selectedValue,
                myList: [],
              }),
            });
          }}
          className="sign-in-button1">
          Finish
        </button>
      </Link>
    </div>
  );
};

export default PlanSelection;
