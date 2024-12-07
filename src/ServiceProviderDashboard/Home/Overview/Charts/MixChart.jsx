import React from "react";
import { Chart } from "primereact/chart";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const MyMixedChart = () => {
  const data2 = [
    500, 1000, 2500, 400, 700, 500, 800, 650, 1100, 1700, 1000, 700,
  ];

  const maxDataValue = Math.max(...data2);

  // Calculate a suggested maximum value for the y-axis
  const suggestedMaxY = maxDataValue + 0.2 * maxDataValue;

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#165DC9",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#e0e0e0",
        pointRadius: 4,
        borderWidth: 2,
        fill: false,
        marginTop: 10,
        data: data2,
        order: 1,
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#E8EFFA",
        data: data2,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        hoverBackgroundColor: "#165DC9",
        // barThickness: 45, // Set bar thickness
        // maxBarThickness: 45,
        order: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1.2,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          title: () => "", // Remove the title
          label: function (context) {
            const value = context.raw;
            return `₹${value}`;
          },
        },
        bodyColor: "black",
        backgroundColor: "white",
        borderColor: "#165DC9",
        borderWidth: 0.5,
        displayColors: false, // Remove the color box
        bodyFont: {
          size: 14,
        },
        boxPadding: 10,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
        grid: {
          color: "#CCC",
          display: false,
        },
      },
      y: {
        type: "linear",
        ticks: {
          color: "black",
          callback: function (value) {
            return `₹ ${value}`; // Add ₹ symbol to the tick label
          },
        },
        grid: {
          color: "#CCC",
        },
        beginAtZero: true,
        suggestedMax: suggestedMaxY,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 0,
      },
    },
    barThickness: "flex",
    maxBarThickness: 40,
  };

  return (
    <div>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default MyMixedChart;
