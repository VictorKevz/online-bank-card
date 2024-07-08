import React, { useState } from "react";
import completeIcon from "../../assets/images/icon-complete.svg";
import "./css/feedback.css";

function Feedback({ onClose }) {
  
  return (
    <div className="feedback-wrapper form-container">
      <img src={completeIcon} alt="complete icon" className="icon-complete" />
      <div className="feedback-text-container">
        <h3 className="feedback-title">Thank You!</h3>
        <p className="feedback-parag">We've added your card details</p>
      </div>
      <button type="button" className="form-btn" onClick={onClose}>Continue</button>
    </div>
  );
}

export default Feedback;
