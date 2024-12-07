// import {Line,Bar}

import React from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";

// Register the components for Chart.js
Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AverageOrderMixChart = () => {
  // Define the dataset
  const data2 = [500, 1000, 2500, 400, 700, 500, 800, 650, 1100, 1700, 1000, 700]
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
        label: "Line Dataset",
        data: data2,
        borderColor: "#165DC9",
        borderWidth: 2,
        fill: false,
      },
      {
        type: "bar",
        label: "Bar Dataset",
        data: [500, 1000, 2500, 400, 700, 500, 800, 650, 1100, 1700, 1000, 700],
        backgroundColor: "#E8EFFA",
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  // Define the options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: "category",
        title: {
          display: false,
          text: "Months",
        },
      },
      y: {
        type: "linear",
        title: {
          display: false,
          text: "Value",
        },
      },
    },
    // Change bar color on hover
    hover: {
      onHover: (event, chartElement) => {
        if (chartElement.length) {
          const element = chartElement[0];
          if (element.element instanceof BarElement) {
            element.element.options.backgroundColor = "#165DC9";
          }
        }
      },
    },
    animation: {
      onComplete: () => {
        const chartInstance = Chart?.getChart("mixed-chart");
        chartInstance.data.datasets[1].backgroundColor = "#165DC9";
      },
    },
  };

  return (
    <div >
      <Bar id="mixed-chart" data={data} options={options} />
    </div>
  );
};

export default AverageOrderMixChart;
