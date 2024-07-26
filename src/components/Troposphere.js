import React, { useState, useEffect } from "react";
import "./troposphere.css";
import HeightLine, { setVisibilityCallback } from "./HeightLine";
import Balloon from "../photos/hot-air-balloon.png";
import Waterfall from "../photos/tallest-waterfall.png";
import Burj from "../photos/burj-khalifa.png";

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
      <section className="troposphere-container main-layer">
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

            {/* Angel Falls */}
            <img
              src={Waterfall}
              alt="Tallest Waterfall, Angel Falls"
              className="waterfall"
            />
            <h3 className="waterfall-text waterfall-text-1">Tallest</h3>
            <h3 className="waterfall-text waterfall-text-2">waterfall</h3>

            {/* Burj Khalifa */}
            <img src={Burj} alt="Burj Khalifa" className="burj" />
            <h3 className="burj-text burj-text-1">Tallest man</h3>
            <h3 className="burj-text burj-text-2">made structure</h3>
          </>
        )}
      </section>
    </>
  );
}

export default Troposphere;
