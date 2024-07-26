// HeightLine.js
import React, { useEffect, useState } from "react";
import "./heightLine.css";

// Callback function to handle visibility changes
let onVisibilityChange = (isVisible) => {};

const HeightLine = () => {
  // VH TO HEIGHT CONVERSIONS
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight -
        0.21 * window.innerHeight;
      const scrollFromBottom = totalHeight - window.scrollY;
      const vh = window.innerHeight;
      const km = (scrollFromBottom / vh) * 10; // Convert vh to kilometers (10 km per vh)
      setHeight(km.toFixed(0)); // Set height in kilometers with 2 decimal places
    };

    // Initial calculation
    handleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // VISIBILITY OF HEIGHT LINE
  const [isVisible, setIsVisible] = useState(false);

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
      setIsVisible(newVisibility);
      onVisibilityChange(newVisibility); // Call the callback function
    };

    window.addEventListener("scroll", handleHeightLineScroll);
    handleHeightLineScroll(); // Check visibility on mount as well

    return () => window.removeEventListener("scroll", handleHeightLineScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="height-line-container">
          <span className="height-line-text">
            {height} {height == 1 ? "KILOMETER" : "KILOMETERS"} HIGH
          </span>
        </div>
      )}
    </>
  );
};

// Function to set the callback
export const setVisibilityCallback = (callback) => {
  onVisibilityChange = callback;
};

export default HeightLine;
