import React from "react";
import "./grass.css";

const Grass = () => {
  const blades = new Array(100).fill(0); // Create an array to represent multiple blades of grass

  return (
    <>
      {blades.map((_, index) => (
        <div key={index} className="grass-blade"></div>
      ))}
    </>
  );
};

export default Grass;
