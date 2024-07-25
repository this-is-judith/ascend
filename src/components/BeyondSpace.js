import React from "react";
import "./beyondSpace.css";

function BeyondSpace() {
  return (
    <>
      <section className="outro-section">
        <div className="topmost">
          <div className="acknowledgements">
            <p>
              Inspired by Neal Agrawal's website,{" "}
              <a
                href="https://neal.fun/deep-sea/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Deep Sea
              </a>
            </p>

            <p>
              Special thanks to Oak Habor Web Design's{" "}
              <a
                href="https://www.youtube.com/@oakharborwebdesigns5169"
                target="_blank"
                rel="noopener noreferrer"
              >
                youtube channel
              </a>{" "}
              for helping me understand web-responsive design and love web dev
              more
            </p>
          </div>

          <div className="poem">
            <p>The journey starts below the ground</p>
            <p>Where wonders lie, yet to be found</p>
            <p>
              Ascend with <strong>faith</strong> and you will see
            </p>
            <p>
              The heights of <strong>grace</strong> and{" "}
              <strong>eternity</strong>
            </p>
          </div>

          <div className="aka">
            <p>(aka, scroll all the way to the bottom to begin)</p>
          </div>

          <div className="scroll-down"></div>
        </div>

        <div className="question">
          <h1>What is beyond Space?</h1>
        </div>
      </section>
    </>
  );
}

export default BeyondSpace;
