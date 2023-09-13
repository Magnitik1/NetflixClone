import React from 'react';
import './planSelectionInfo.css';
import { useNavigate } from 'react-router-dom';

const PlanSelectionInfo = (props) => {
  let navigate = useNavigate();
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
        <button className="sign-in-button1" onClick={() => navigate('/PlanSelection')}>Next</button>
      </div>
    </div>
  );
};

export default PlanSelectionInfo;