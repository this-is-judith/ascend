import React from "react";
import "./main.css";
import { FaPerson } from "react-icons/fa6";

function Main() {
  return (
    <>
      <section className="main-section" id="section1">
        <div className="grass-container">
          <div className="grass-left"></div>

          <div className="grass-middle">
            <div className="grass-middle-top"></div>
            <div className="grass-middle-bottom"></div>
          </div>

          <div className="grass-right"></div>
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
              <p>Lift the barrier to fly with Ace</p>
            </div>

            <div className="instruction-2">
              <p>Scroll up to continue without Ace</p>
            </div>

            <div className="instruction-3">
              <p>Click here for a quick tutorial</p>
            </div>
          </div>

          <div className="filler"></div>
        </div>
      </section>
    </>
  );
}

export default Main;
