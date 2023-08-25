import React from 'react';
import './PlanSelection.css';

const PlanSelection = () => {
  return (
    <div className="plan-selection-container">
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
    </div>
  );
};

export default PlanSelection;
