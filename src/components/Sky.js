import React from "react";
import "./sky.css";
import HeightLine from "./HeightLine";
import Troposphere from "./Troposphere";
import Stratosphere from "./Stratosphere";
import Mesosphere from "./Mesosphere";
import Thermosphere from "./Thermosphere";
import Exosphere from "./Exosphere";
import Space from "./Space";
import BeyondSpace from "./BeyondSpace";

function Sky() {
  return (
    <div className="sky-container sky-gradient">
      {/*  1 vh == 0.1 km*/}

      {/* ?km == 100vh*/}
      <BeyondSpace />

      {/* ?km == 1000vh*/}
      <Space />

      {/* 700km to 10,000km == 93,000 vh*/}
      <Exosphere />

      {/* 80km to 700km == 6200 vh */}
      <Thermosphere />

      {/* 50km to 80km == 300 vh*/}
      <Mesosphere />

      {/* 12km to 50km == 372vh*/}
      <Stratosphere />

      {/* 0km to 12km == 115vh, exception to rule because of grass layer*/}
      <Troposphere />

      <HeightLine />
    </div>
  );
}

export default Sky;
