import React from "react";
import "./popup.css"; // Import the CSS file for styling
import Menu from "../photos/ascend-logo.png";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2 className="content-item">Tutorial</h2>
        <div className="content-item short-description">
          <p>
            <strong>Ascend</strong> is an interactive page that takes you on a
            journey from the Earth's surface to the edge of space, comparing the
            heights of objects along the way.
          </p>
        </div>

        <div className="content-item option option-1">
          <div className="option-1-1">1</div>
          <div className="option-1-2">
            <p>You can fly automatically with Ace</p>
          </div>
        </div>

        <div className="content-item option option-2">
          <div className="option-2-1">2</div>
          <div className="option-2-2">
            <p>
              Or scroll up yourself without Ace. Get ready for 10,000+ km of
              content though!
            </p>
          </div>
        </div>

        <p className="features">
          Tap the menu button{" "}
          <img src={Menu} alt="Menu Button" className="menu-button" /> to reveal
          some features you can use.
        </p>

        <div className="content-item option menu-tutorial">
          <div className="menu-item">
            <div className="left">L</div>
            <div className="middle">M</div>
            <div className="right">R</div>
          </div>

          <div className="menu-item">
            <div className="left">L</div>
            <div className="middle">M</div>
            <div className="right">R</div>
          </div>

          <div className="menu-item">
            <div className="left">L</div>
            <div className="middle">M</div>
            <div className="right">R</div>
          </div>

          <div className="menu-item">
            <div className="left">L</div>
            <div className="middle">M</div>
            <div className="right">R</div>
          </div>

          <div className="menu-item">
            <div className="left">L</div>
            <div className="middle">M</div>
            <div className="right">R</div>
          </div>
        </div>

        <div className="content-item button-container">
          <button onClick={onClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
