import React from "react";
import { Chart } from "primereact/chart";

import Styles from "../../../../commonCss.module.css";

const OrdersBreakoutChart = () => {
  const data = {
    labels: ["Accepted", "Rejected", "Completed"],
    datasets: [
      {
        data: [25, 25, 50],
        backgroundColor: ["#FFCE56", "#FF6384", "#36A2EB"],
        borderColor: ["#FFCE56", "#FF6384", "#36A2EB"],
        borderWidth: 1,
        spacing: 3,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
        position: "right",
        labels: {
          usePointStyle: true,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const ds = data.datasets[0];
                const fill = ds.backgroundColor[i];
                const stroke = ds.borderColor[i];
                const value = ds.data[i];

                return {
                  text: `${label} ---------------------------- ${value}`,
                  fillStyle: fill,
                  strokeStyle: stroke,
                  lineWidth: 1,
                  hidden: isNaN(value) || meta.data[i].hidden,

                  // Extra data used for toggling the correct item
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
    },
    layout: {
      padding: {
        right: 0,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    cutout: "60%",
  };

  return (
    <div className={Styles.orderBreakoutChart}>
      <div style={{ width: "60%", minWidth: "200px" ,position:"relative"}}>
        <Chart type="doughnut" data={data} options={options} />
        <div className={Styles.breakout_center_text}>
        <h1>100</h1>
        <p>All Orders</p>
      </div>
      </div>

     
      <div className={Styles.legend_list}>
        <p className={Styles.breakout_legend}>
          <span
            style={{ backgroundColor: "#FFCE56" }}
            className={Styles.legend_color}
          ></span>{" "}
          Accepted <span className={Styles.space}></span> <b>25</b>
        </p>
        <p className={Styles.breakout_legend}>
          <span
            style={{ backgroundColor: "#FF6384" }}
            className={Styles.legend_color}
          ></span>{" "}
          Rejected <span className={Styles.space}></span>
          <b>25</b>
        </p>
        <p className={Styles.breakout_legend}>
          <span
            style={{ backgroundColor: "#36A2EB" }}
            className={Styles.legend_color}
          ></span>{" "}
          Completed <span className={Styles.space}></span> <b>50</b>
        </p>
      </div>
    </div>
  );
};

export default OrdersBreakoutChart;
