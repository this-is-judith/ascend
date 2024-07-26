import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import BeyondSpace from "./components/BeyondSpace";
import Sky from "./components/Sky";

function App() {
  const [isAceFree, setIsAceFree] = useState(false);

  useEffect(() => {
    // Begin page from bottom
    const scrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    scrollToBottom();
  }, []);

  useEffect(() => {
    let scrollInterval;

    // Function to scroll up the page automatically
    const automaticScrollUp = () => {
      const scrollStep = -2; // Change this value to adjust the speed
      const intervalTime = 10; // Adjust the interval time for smoother scrolling

      const scrollInterval = setInterval(() => {
        if (window.scrollY > 0) {
          window.scrollBy(0, scrollStep);
        } else {
          clearInterval(scrollInterval);
        }
      }, intervalTime);
    };

    // Start scrolling up when the component mounts
    // automaticScrollUp();

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="App">
      {/* <BeyondSpace /> */}
      <Sky />
      <Main />
    </div>
  );
}

export default App;
