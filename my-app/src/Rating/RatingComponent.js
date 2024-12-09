import React, { useState } from "react";
import "./RatingComponent.css";
import ThankYouCard from "./ThankYouCard"; 

const RatingComponent = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const rating = [1, 2, 3, 4, 5];

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    } else {
      alert("Please select a rating before submitting!");
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <ThankYouCard rating={selectedRating} />
      ) : (
        <div className="rating-form">
            <button>
         <img src="/icon-star.svg" alt="Description"/></button>
         

          <h2>How did we do?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve!
          </p>
          <div className="rating-buttons">
            {rating.map((rating) => (
              <button
                key={rating}
                value={rating}
                onClick={() => setSelectedRating(rating)}
                className={`rating-button ${
                  selectedRating === rating ? "selected" : ""
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;
