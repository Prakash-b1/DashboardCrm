import { useState } from "react";
import Header from "../Components/Header/Header";
import NavButton from "../Components/NavButton/NavButton";
import JobRequest from "./Sections/JobRequest/JobRequest";
import Accepted from "./Sections/Accepted/Accepted";
import Rejected from "./Sections/Rejected/Rejected";
import Completed from "./Sections/Completed/Completed";

import styles from '../ServiceProviderDashboard.module.css'
import Styles from './Orders.module.css'
import SearchBar from "../Components/SearchBar/SearchBar";
import { ICONS } from "../../Assets/Icons";

const Orders = () => {
  const [show, setShow] = useState("Job Request");

  return (
    <div>
      <Header title="Order Management" />

      <div className={styles.mobileNavbar}>
        <SearchBar placeholder='Search by order no...' />
        <span className={styles.filter_icon_mobile}>{ICONS.filterIconMobileWhite}</span>
      </div>

      <NavButton
        show={show}
        setShow={setShow}
        options={["Job Request", "Accepted", "Rejected", "Completed"]}
      />
      <div className={Styles.dashboard_section}>
        <div style={{ display: show === "Job Request" ? "block" : "none" }}>
          <JobRequest />
        </div>

        <div style={{ display: show === "Accepted" ? "block" : "none" }}>
          <Accepted />
        </div>
        <div style={{ display: show === "Rejected" ? "block" : "none" }}>
          <Rejected />
        </div>
        <div style={{ display: show === "Completed" ? "block" : "none" }}>
          <Completed />
        </div>
      </div>
    </div>
  );
};

export default Orders;
