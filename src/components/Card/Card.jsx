import React, { useState } from "react";
import logo from "../../assets/images/card-logo.svg";
import "./card.css";

function Card({ results, isActive }) {
  const { fullName, cardNumber, month, year, cvc } = results;
  return (
    <div className="card-wrapper">
      <div className="card-front-container">
        <img src={logo} alt="card logo" className="card-logo" />

        <h1 className="card-number">{`${
          isActive.cardNumber ? cardNumber : "0000 0000 0000 0000"
        }`}</h1>
        <div className="card-front-bottom">
          <h2 className="card-name">{`${
            isActive.fullName ? fullName : "Jane Appleseed"
          }`}</h2>
          <p className="card-date">{isActive.month || isActive.year ? `${month}/${year}` : "00/00"}</p>
        </div>
      </div>
      <div className="card-back-container">
        <p className="CVC">{`${isActive.cvc ? cvc : "000"}`}</p>
      </div>
    </div>
  );
}

export default Card;
