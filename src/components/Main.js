import React, { useState, useEffect } from "react";
import "./main.css";
import { FaPerson } from "react-icons/fa6";
import Grass from "./Grass";
import Popup from "./Popup";
import Navbar from "./Navbar";

function Main() {
  // Tutorial Popup
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Check visibiity of height line
  const [isHeightLineVisible, setisHeightLineVisible] = useState(false);

  useEffect(() => {
    const handleHeightLineScroll = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom =
        documentHeight - (scrollPosition + viewportHeight);

      // Set visibility if the distance from the bottom is greater than 24% of the viewport height
      const newVisibility = distanceFromBottom > 0.24 * viewportHeight;
      setisHeightLineVisible(newVisibility);
    };

    window.addEventListener("scroll", handleHeightLineScroll);
    handleHeightLineScroll(); // Check visibility on mount as well

    return () => window.removeEventListener("scroll", handleHeightLineScroll);
  }, []);

  // Check if Scroll Up Clicked
  const [isScrollUpClicked, setIsScrollUpClicked] = useState(false);
  const [isFlyWithAceClicked, setIsFlyWithAceClicked] = useState(false);

  // Check if Fly With Ace clicked
  const handleScrollUp = () => {
    setIsScrollUpClicked(true);

    window.scrollTo({
      top: window.scrollY - 0.8 * window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleFlyWithAce = () => {
    setIsFlyWithAceClicked(true);
  };

  return (
    <>
      <section className="main-section" id="section1">
        <div
          className={`grass-container ${
            isFlyWithAceClicked ? "ace-activated" : ""
          } ${isHeightLineVisible ? "main-hidden" : ""}`}
        >
          <div className="grass-left">
            <Grass />
          </div>

          <div className="grass-middle">
            <div className="grass-middle-top"></div>
            <div
              className={`grass-middle-bottom ${
                isFlyWithAceClicked ? "ace-activated" : ""
              } ${isHeightLineVisible ? "main-hidden" : ""}`}
            ></div>
          </div>

          <div className="grass-right">
            <Grass />
          </div>
        </div>

        <div className="intro crust-gradient">
          {!isHeightLineVisible && (
            <>
              <div className="ace-container">
                <div className="ace-left"></div>
                <div className="ace-cage">
                  <FaPerson className="ace" />
                </div>
                <div className="ace-right"></div>
              </div>

              <div className="title">
                <h1>ASCEND</h1>
              </div>

              <div className="subtitle">
                <h2>made by Judith Osei-Tete</h2>
              </div>

              <div className="instructions">
                <div className="instruction-1">
                  <p class="enlarge-text" onClick={handleFlyWithAce}>
                    Click here to fly with Ace
                  </p>
                </div>

                <div className="instruction-2">
                  <p class="enlarge-text" onClick={handleScrollUp}>
                    Scroll up to continue without Ace
                  </p>
                </div>

                <div className="instruction-3">
                  <p class="enlarge-text" onClick={handlePopupToggle}>
                    Click here for a quick tutorial
                  </p>
                </div>
              </div>

              <div className="filler"></div>
            </>
          )}

          {isPopupVisible && <Popup onClose={handlePopupToggle} />}
        </div>

        <Navbar
          isPopupVisible={isPopupVisible}
          onTogglePopup={handlePopupToggle}
        />
      </section>
    </>
  );
}

export default Main;
