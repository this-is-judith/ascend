import React from "react";
import "./popup.css"; // Import the CSS file for styling
import Menu from "../photos/ascend-logo.png";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Quick Tutorial</h2>
        <div className="short-description">
          <p>
            <strong>Ascend</strong> is an interactive page that takes you on a
            journey from the Earth's surface to the edge of space, comparing the
            heights of objects along the way.
          </p>
        </div>

        <div className="option option-1">
          <div>
            <p>You can fly automatically with Ace</p>
          </div>
          <div></div>
        </div>

        <div className="option option-2">
          <p>
            Or scroll up yourself without Ace. Get ready for 10,000+ km of
            content though!
          </p>
        </div>

        <div className="option option-3">
          <p>
            Tap the menu button{" "}
            <img src={Menu} alt="Menu Button" className="menu-button" /> to
            reveal some tools you can use.
          </p>
        </div>

        <div className="option menu-tutorial"></div>

        <div className="button-container"></div>

        <button onClick={onClose} className="close-button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
