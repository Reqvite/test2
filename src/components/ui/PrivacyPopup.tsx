import React from "react";
import "../../app/styles/popup.css";
import { useStateContext } from "@/context/StateContext";

const PrivacyPopup = () => {
  const { privacy, setPrivacy } = useStateContext();

  if (privacy) {
    return null;
  }
  return (
    <div className="popup-box">
      <div>
        <h3>We Care About Your Privacy</h3>
        <p className="popup-box__privacy-text">
          We and our partners use cookies to store and access personal data such
          as browsing data for purposes such as serving and personalizing
          content and advertising and analyzing site traffic.We work in
          coordination with an industry framework, signaling your preferences
          globally for all participating websites.
        </p>
        <div className="buttons popup-buttons">
          <button
            type="button"
            className="add-to-cart"
            onClick={() => setPrivacy(true)}
          >
            Accept
          </button>
          <button
            type="button"
            className="buy-now"
            onClick={() => setPrivacy(true)}
          >
            Decline
          </button>
        </div>
      </div>
      <div className="process-box">
        {/* <h3>We and our partners process data</h3> */}
        <p className="popup-box__process">
          {/* Personalised ads. Personalised content. Ad and content measurement,
          audience insights, and product development. */}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPopup;
