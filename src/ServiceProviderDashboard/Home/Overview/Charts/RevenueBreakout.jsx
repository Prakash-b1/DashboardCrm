// import { plugins } from "chart.js";
import React from "react";
// import { Doughnut } from "react-chartjs-2";
import { Chart } from "primereact/chart";

import styles from "../../../../commonCss.module.css";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ICONS } from "../../../../Assets/Icons/index";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenueBreakoutChart = () => {
  const data = {
    labels: [ "Comissions & Others","Total sales",],
    datasets: [
      {
        data: [2500, 7500,],
        backgroundColor: ["#002F77","#36A2EB", ],
      },
    ],
    spacing: 2,
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltip: {
      enabled: true,
    },
    layout: {
      padding: {
        left: 0,
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 1.8,
    responsive: true,
    cutout: "80%",
  };
  return (
    <div className={styles.breakoutChart}>
      <div className={styles.total_revenue}>
        <p className={styles.total_revenue_amount}>
          &#8377; 10000 {ICONS.upsellIcon}
        </p>
        <p className={styles.total_revenue_title}>Total Revenue</p>
      </div>

      <div className={styles.revenue_chart_section}>
        <div className={styles.revenue_breakout_legend1}>
          <p>
            <b>&#8377; {data?.datasets[0]?.data[1]}</b>
          </p>
          <div className={styles.legend_title1}>
            <p>{data?.labels[1]}</p>
            <span
              style={{
                backgroundColor: data?.datasets[0]?.backgroundColor[1],
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
            ></span>
          </div>
        </div>
        <div style={{width:'100%',height:'100%'}}>
        <Chart type="doughnut" data={data} options={options} />
        </div>
       
        <div className={styles.revenue_breakout_legend2}>
          <p>
            <b>&#8377; {data?.datasets[0]?.data[0]}</b>{" "}
          </p>
          <div className={styles.legend_title2}>
            <span
              style={{
                backgroundColor: data?.datasets[0]?.backgroundColor[0],
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
              className={styles.comissions_dot}
            ></span>
            {data?.labels[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueBreakoutChart;
