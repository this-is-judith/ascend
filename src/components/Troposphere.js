import React, { useState, useEffect } from "react";
import "./troposphere.css";
import HeightLine, { setVisibilityCallback } from "./HeightLine";
import Balloon from "../photos/hot-air-balloon.png";
import Waterfall from "../photos/tallest-waterfall.png";

function Troposphere() {
  const [isHeightLineVisible, setHeightLineVisibility] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = (isVisible) => {
      setHeightLineVisibility(isVisible);
    };

    // Set the callback for visibility changes
    setVisibilityCallback(handleVisibilityChange);

    // Cleanup the callback on component unmount
    return () => setVisibilityCallback(() => {});
  }, []);

  return (
    <>
      <section className="troposphere-container">
        <h2>TROPOSPHERE</h2>

        {isHeightLineVisible && (
          <>
            {/* Hot Air Balloon */}
            <img
              src={Balloon}
              alt="Average Hot Air Balloon Height"
              className="balloon"
            />

            <h3 className="balloon-text balloon-text-1">Average hot air</h3>
            <h3 className="balloon-text balloon-text-2">balloon altitude</h3>

            {/* Waterfall */}
            <img
              src={Waterfall}
              alt="Tallest Waterfall - Angel Falls"
              className="waterfall"
            />
          </>
        )}
      </section>
    </>
  );
}

export default Troposphere;
