import React, { useEffect, useState } from "react";
import "./heightLine.css";

const HeightLine = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleHeightLineScroll = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom =
        documentHeight - (scrollPosition + viewportHeight);

      // Set visibility if the distance from the bottom is greater than 80% of the viewport height
      setIsVisible(distanceFromBottom > 0.8 * viewportHeight);
    };

    window.addEventListener("scroll", handleHeightLineScroll);
    handleHeightLineScroll(); // Check visibility on mount as well

    return () => window.removeEventListener("scroll", handleHeightLineScroll);
  }, []);

  return <>{isVisible && <div className="height-line-container"></div>};</>;
};

export default HeightLine;
