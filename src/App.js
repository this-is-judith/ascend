import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Stratosphere from "./components/Stratosphere";
import BeyondSpace from "./components/BeyondSpace";

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
    const scrollUp = () => {
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
    // scrollUp();

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="App">
      <BeyondSpace />
      <Stratosphere />
      <Stratosphere />
      <Stratosphere />
      <Stratosphere />
      <Stratosphere />
      <Main />
      <Navbar />
    </div>
  );
}

export default App;
