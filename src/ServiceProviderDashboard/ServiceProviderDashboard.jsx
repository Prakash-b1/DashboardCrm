import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import styles from "./ServiceProviderDashboard.module.css";
import Dashboard from "./Home/Home";
import Orders from "./Orders/Orders";
import Messages from "./Messages/Messages";
import Notifiactions from "./Notifiactions/Notifiactions";
import Settings from "./Profile_Settings/Settings";
import MobileBar from "./NavigationBar/MobileBar/MobileBar";

const ServiceProviderDashboard = () => {

  return (
    <div className={styles.dashboard}>
      <NavigationBar />
      <MobileBar />
      <div className={styles.right_section}>
        <Routes>
          <Route path="/" element={<Navigate to="home" replace />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="order" element={<Orders />} />
          <Route path="message" element={<Messages />} />
          <Route path='notification' element={<Notifiactions/>}/>
          <Route path='settings/*' element={<Settings/>} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};
export default ServiceProviderDashboard;
