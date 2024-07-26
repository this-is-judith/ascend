import React, { useState } from "react";
import "./main.css";
import { FaPerson } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { GiAirBalloon } from "react-icons/gi";
import Grass from "./Grass";

function Main() {
  const [isScrollUpClicked, setIsScrollUpClicked] = useState(false);
  const [isFlyWithAceClicked, setIsFlyWithAceClicked] = useState(false);

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
        <div className="grass-container">
          <div className="grass-left">
            <Grass />
            <BsHouseFill className="house" />
          </div>

          <div className="grass-middle">
            <div className="grass-middle-top"></div>
            <div
              className={`grass-middle-bottom ${
                isFlyWithAceClicked ? "ace-activated" : ""
              }`}
            ></div>
          </div>

          <div className="grass-right">
            <Grass />
          </div>
        </div>

        <div className="intro crust-gradient">
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
              <p class="enlarge-text">Click here for a quick tutorial</p>
            </div>
          </div>

          <div className="filler"></div>
        </div>
      </section>
    </>
  );
}

export default Main;
