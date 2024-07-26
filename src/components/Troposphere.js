import React, { useState, useEffect } from "react";
import "./troposphere.css";
import HeightLine, { setVisibilityCallback } from "./HeightLine";
import Balloon from "../photos/hot-air-balloon.png"; // Update with the correct path

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

        {/* Hot Air Balloon */}
        {isHeightLineVisible && (
          <>
            <img
              src={Balloon}
              alt="Average Hot Air Balloon Height"
              className="balloon"
            />

            <h3 className="balloon-text balloon-text-1">Average hot air</h3>
            <h3 className="balloon-text balloon-text-2">balloon altitude</h3>
          </>
        )}
      </section>
    </>
  );
}

export default Troposphere;
