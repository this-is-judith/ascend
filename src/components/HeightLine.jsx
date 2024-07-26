import React, { useEffect, useState } from "react";
import "./heightLine.css";

const HeightLine = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleHeightLineScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleHeightLineScroll);
    return () => window.removeEventListener("scroll", handleHeightLineScroll);
  }, []);

  return (
    <div className="height-line-container">
      <div
        className="height-line"
        style={{ height: `${scrollY + window.innerHeight}px` }}
      >
        <div className="height-marker" style={{ top: "50vh" }}></div>
        <div className="height-marker" style={{ top: "100vh" }}></div>
        {/* Add more markers if needed */}
      </div>
    </div>
  );
};

export default HeightLine;
