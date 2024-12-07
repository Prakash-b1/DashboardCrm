import React from "react";
import { Chart } from "primereact/chart";

import Styles from "../../../commonCss.module.css";

const SalesAnalysisChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.analysis_name),
    datasets: [
      {
        data: data.map((item) => item.analysis_price),
        backgroundColor: data.map(
          (_, index) => `hsl(${(index * 360) / data.length}, 83%, 65%)`
        ),
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          boxWidth: 8, // Adjust the width of the color point
          boxHeight: 8,
        },
      },
    },
    layout: {
      padding: {
        top: 0,
        bottom: 0, // Adjust the space between the chart and the legends
        left: 0,
        right: 0,
      },
    },
    maintainAspectRatio: false,
    // aspectRatio: 2,
    responsive: true,
    cutout: "60%",
  };

  return (
    <div style={{ width: "100%", height: "100%",position:'relative' }}>
      <Chart type="doughnut" data={chartData} options={options} />
      <div className={Styles.salesAnalysisChart_center_text}>
        <h1>₹60000</h1>
        <p>Total Sales</p>
      </div>
    </div>
  );
};

export default SalesAnalysisChart;
