import React, { useState } from "react";
import "./css/form.css";
import Card from "../Card/Card";
import Feedback from "./Feedback";

function Form() {
  const [formData, setForm] = useState({
    fullName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [formValid, setFormValid] = useState({
    fullName: true,
    cardNumber: true,
    month: true,
    year: true,
    cvc: true,
  });
  const [showFeedback, setShowFeedback] = useState(false);

  const closeFeedback = ()=>{
    setShowFeedback(false)
    handleReset();
  }
  const [isActive, setActive] = useState({
    fullName: false,
    cardNumber: false,
    month: false,
    year: false,
    cvc: false,
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm((preVal) => ({
      ...preVal,
      [name]: value,
    }));
    setActive((prevActive)=>({
      ...prevActive,
      [name]:true
    }));

    setFormValid((prevValid) => ({
      ...prevValid,
      [name]: true,
    }));
  };

  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const validateForm = () => {
    let newFormValid = { ...formValid };
    let valid = true;
    let numberPattern = /^\d+$/; // checks if it is a number
    let cvcPattern = /^\d{3}$/; // checks if it is a 3 digit number
    let cardPattern = /^\d{16}$/; // checks if it is a 16 digit number

    if (!formData.fullName) {
      newFormValid.fullName = false;
      valid = false;
    }
    if (!cardPattern.test(formData.cardNumber) || !luhnCheck(formData.cardNumber)) {
      newFormValid.cardNumber = false;
      valid = false;
    }
    if (
      !numberPattern.test(formData.month) ||
      formData.month < 1 ||
      formData.month > 12
    ) {
      newFormValid.month = false;
      valid = false;
    }
    if (!numberPattern.test(formData.year) || formData.year < 20) {
      newFormValid.year = false;
      valid = false;
    }
    if (!cvcPattern.test(formData.cvc)) {
      newFormValid.cvc = false;
      valid = false;
    }
    setFormValid(newFormValid);
    // setShowFeedback(valid);
    return valid; // Ensure the return statement
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowFeedback(true);

    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
    setActive(false);
    setFormValid({
      fullName: true,
      cardNumber: true,
      month: true,
      year: true,
      cvc: true,
    });
    setShowFeedback(false);
  };

  return (
    <div className="form-card-container">
      <Card results={formData} showFeedback={showFeedback} formValid={formValid} isActive={isActive} />
     { showFeedback ? <Feedback onClose={closeFeedback}/> : <form className="form-container" onSubmit={handleSubmission}>
        {/* First Fieldset */}
        <fieldset className="field first">
          <legend className="first-legend">CARDHOLDER NAME</legend>
          <label htmlFor="userName">
            <input
              type="text"
              name="fullName"
              id="userName"
              placeholder="e.g. Jane Appleseed"
              className={`${!formValid.fullName && 'error-border'}`}
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>
          {!formValid.fullName && <span className="error">Can't be blank</span>}

        </fieldset>
        {/* Second Fieldset */}
        <fieldset className={`field second`}>
          <legend className={`second-legend ${!formValid.cardNumber ? 'error-margin': ''}`}>CARD NUMBER</legend>
          <label htmlFor="cardNum">
            <input
              type="text" // Changed to "text" to allow for spaces and formatting
              name="cardNumber"
              id="cardNum"
              placeholder="e.g. 1234 5678 9123 0000"
              className={`${!formValid.cardNumber && 'error-border'}`}
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </label>
          {!formValid.cardNumber && <span className="error">Please only enter a real 16-digit card number!</span>}

        </fieldset>
        {/* Third Grouped Fields */}
        <fieldset className="field third">
          <legend className={`third-legend ${!formValid.cardNumber ? 'error-margin': ''}`}>EXP. DATE (MM/YY)</legend>
          <div className="third-main-wrapper">
            <div className="third-field-wrapper">
              <label htmlFor="monthNum" className="label month">
                <input
                  type="text" // Changed to "text" for better control over input
                  name="month"
                  id="monthNum"
                  placeholder="MM"
                  className={`third-input first ${!(formValid.month || formValid.year) && 'error-border'}`}
                  value={formData.month}
                  onChange={handleChange}
                />
              </label>
              {!(formValid.month || formValid.year) && <span className="error">Can't be blank</span>}

            </div>
            <div className="third-field-wrapper">
              <label htmlFor="yearNum" className="label year">
                <input
                  type="text" 
                  name="year"
                  id="yearNum"
                  placeholder="YY"
                  className={`third-input second ${!(formValid.month || formValid.year) && 'error-border'}`}
                  value={formData.year}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="third-field-wrapper">
              <legend className="fourth-legend">CVC</legend>
              <label htmlFor="CVCnum" className="label year">
                <input
                  type="text" 
                  name="cvc"
                  id="CVCnum"
                  placeholder="e.g. 123"
                  className={`third-input third ${!formValid.cvc && 'error-border'}`}
                  value={formData.cvc}
                  onChange={handleChange}
                />
              </label>
              {!formValid.cvc && <span className="error">Can't be blank</span>}

            </div>
          </div>
        </fieldset>
        {/* Buttons Field */}
        <fieldset>
          <button type="submit" className="form-btn submit-btn">
            Confirm
          </button>
        </fieldset>
        <button type="button" className="reset-btn" onClick={handleReset}>
          Clear All
        </button>
      </form>}
    </div>
  );
}

export default Form;