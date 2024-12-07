import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Styles from "../Styles/ChartCss.module.css";

const SalesProgressBar = ({ percentage }) => {
  return (
    <div className={Styles.salesProgressBar}>
      <span className={Styles.zero}>0%</span>
      <span className={Styles.hundred}>100%</span>

      <CircularProgressbar
        value={35}
        maxValue={100}
        strokeWidth={6}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: "round", // Rounded end for the progress bar
          trailColor: "#d6d6d6", // Grey trail color
          pathColor: "#18CE98", // Green color for progress bar
          pathTransitionDuration: 0.5, // Duration for path transition
        })}
        circleRatio={0.5} // Adjusts the ratio to create a semi-circle
      />
      <div className={Styles.salesProgressBarText}>
        <p className={Styles.salesProgressBarAmount}>₹10000</p>
        <p className={Styles.salesProgressBarSubText}>
          35% more than last month
        </p>
      </div>
    </div>
  );
};

export default SalesProgressBar;
