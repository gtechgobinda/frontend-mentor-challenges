import { useState } from "react";
import "./App.css";
import StarIcon from "./assets/icon-star.svg";
import ThankYou from "./assets/illustration-thank-you.svg";
function App() {
  const [rating, setRating] = useState(0);
  const [showRatingSection, setShowRatingSection] = useState(true);
  const [showCountSection, setShowCountSection] = useState(false);
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const starNumbers = [1, 2, 3, 4, 5];
  const handleRatingClick = (seletedRating) => {
    setRating(seletedRating);
    setIsBtnEnabled(true);
    console.log(seletedRating);
  };
  //primary className for rating
  const star = "star";

  const handleSubmitBtn = () => {
    setShowRatingSection(false);
    setShowCountSection(true);
  };
  return (
    <>
      <div className="main-body">
        {showRatingSection && (
          <>
            <div className="modal-body1">
              <div className="star-body">
                <img src={StarIcon} alt="star" />
              </div>
              <div className="rating-text">
                <p className="heading">How did we do?</p>
                <p className="sub-heading">
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>
              <div className="rating-container">
                {starNumbers.map((icon, index) => (
                  <span
                    key={index + 1}
                    onClick={() => handleRatingClick(index + 1)}
                    className={`${star} ${
                      index + 1 <= rating ? "star-filled" : ""
                    }`}
                  >
                    {icon}
                  </span>
                ))}
              </div>
              <button
                className={`${
                  isBtnEnabled == true ? "submit-btn" : "disabled-btn"
                }`}
                onClick={handleSubmitBtn}
              >
                SUBMIT
              </button>
            </div>
          </>
        )}

        {showCountSection && (
          <>
            <div className="modal-body2">
              <div className="thanks-img">
                <img src={ThankYou} alt="Thank You" />
              </div>
              <div className="rating-count-text">
                <p
                  className="rating-count-text-output"
                  id="rating-count-text-output"
                >
                  You selected {rating} out of 5
                </p>
              </div>
              <div className="thanks-text">
                <p className="thanks-text__heading">Thank you!</p>
                <p className="thanks-text__sub-heading">
                  We appreciate you taking the time to give a rating.If you need
                  more support, don&apos;t hesitate to get in touch!
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
