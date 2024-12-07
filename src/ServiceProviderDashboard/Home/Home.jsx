import Styles from "./Home.module.css";
import "../../utils/utilsCss/utilsCss.css";
import styles from '../ServiceProviderDashboard.module.css'
import { useState } from "react";

import NavButton from "../Components/NavButton/NavButton";
import Overview from "./Overview/Overview";
import Header from "../Components/Header/Header";
import OrderManagement from "./Order Management/OrderManagement";
import SalesAnalysis from "./Sales Analysis/SalesAnalysis";
import SortByYear from "./Components/SortByYear/SortByYear";
import { ICONS } from "../../Assets/Icons";




const Dashboard = () => {
  const [show, setShow] = useState("Overview");

  return (
    <div style={{ position: "relative" }}>

      <div className={styles.mobileNavbar}>
        <p className={styles.mobileNavbar_user}>Hi, Prakash</p>
        <span className={styles.filter_icon_mobile}>{ICONS.notificationIconWhite}</span>
      </div>

      <Header title="Dashboard" />
      <NavButton
        show={show}
        setShow={setShow}
        options={["Overview", "Order Management", "Sales Analysis"]}
      />

      <div className={Styles.dashboard_section}>
        <SortByYear />
        <div style={{ display: show === "Overview" ? "block" : "none" }}>
          <Overview />
        </div>

        <div
          style={{ display: show === "Order Management" ? "block" : "none" }}
        >
          <OrderManagement />
        </div>
        <div style={{ display: show === "Sales Analysis" ? "block" : "none" }}>
          <SalesAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
