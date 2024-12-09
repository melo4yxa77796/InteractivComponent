import React from "react";
import "./ThankYouCard.css";

const ThankYouCard = ({ rating }) => (
  <div className="thank-you-card">
    <img src="/illustration-thank-you.svg" alt="Description" />

    <h1 className="thank-you-title">Thank you!</h1>
    <p className="selected-rating">You selected {rating} out of 5.</p>
    <p className="thank-you-text">We appreciate you taking the time to give a rating.
    If you ever need more support, don't hesitate to get in touch!</p>
  </div>
);

export default ThankYouCard;
