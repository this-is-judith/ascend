import React from "react";
import "./main.css";
import { FaPerson } from "react-icons/fa6";

function Main() {
  return (
    <>
      <section className="main-section" id="section1">
        <div className="earths-surface">
          <h1>EARTH'S SURFACE</h1>
        </div>

        <div className="intro">
          <div className="ace-animation">
            <div className="ace-left"></div>
            <div className="ace-cage">
              <FaPerson className="ace" />
            </div>
            <div className="ace-right"></div>
          </div>

          <div className="title">
            <h1>Ascend</h1>
          </div>

          <div className="subtitle">
            <h2>Made by Judith Osei-Tete</h2>
          </div>

          <div className="welcome">
            <p>
              Welcome! This is an interactive page showing the journey from
              Earth's surface to the edge of space (and beyond!), revealing the
              heights of objects and phenomena along the way.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
