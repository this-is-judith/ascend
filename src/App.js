import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Stratosphere from "./components/Stratosphere";

function App() {
  useEffect(() => {
    // Begin page from bottom
    const scrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    scrollToBottom();
  }, []);

  return (
    <div className="App">
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
