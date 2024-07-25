import React from "react";
import "./grass.css";

const Grass = () => {
  const blades = new Array(100).fill(0); // Create an array to represent multiple blades of grass

  return (
    <>
      {blades.map((_, index) => {
        let className = "grass-blade";

        // Add classes based on the index
        if (index % 2 === 0) {
          className += " divisible-by-2";
        }
        if (index % 3 === 0) {
          className += " divisible-by-3";
        }
        if (index % 5 === 0) {
          className += " divisible-by-5";
        }
        if (index % 7 === 0) {
          className += " divisible-by-7";
        }

        return <div key={index} className={className}></div>;
      })}
    </>
  );
};

export default Grass;
