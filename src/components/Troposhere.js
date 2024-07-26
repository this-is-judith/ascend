import React from "react";
import "./troposhere.css";
import Balloon from "../photos/hot-air-balloon.png";

function Troposphere() {
  return (
    <>
      <section className="troposphere-container">
        <h2>TROPOSPHERE</h2>

        <img
          src={Balloon}
          alt="Averge Hot Air Balloon Height"
          className="balloon"
        />
      </section>
    </>
  );
}

export default Troposphere;
