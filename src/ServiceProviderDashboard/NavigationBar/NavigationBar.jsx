import { NavLink } from "react-router-dom";
import { ICONS } from "../../Assets/Icons";

import Styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const isActiveFunc = ({ isActive }) => {
    return isActive
      ? `${Styles.selectedOption} ${Styles.option}`
      : `${Styles.option}`;
  };

  return (
    <div className={Styles.navbar}>
      <NavLink>{ICONS.hamburgerMenuIcon}</NavLink>

      <div className={Styles.navbar_section2}>
        <NavLink to="home" className={isActiveFunc}>
          {ICONS.homeIcon}
        </NavLink>
        <NavLink to="order" className={isActiveFunc}>
          {ICONS.orderIcon}
        </NavLink>
        <NavLink to="message" className={isActiveFunc}>
          {ICONS.messageIcon}
        </NavLink>
      </div>

      <div className={Styles.navbar_section3}>
       
        <NavLink to="settings" className={isActiveFunc}>
          {ICONS.settingsIcon}
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;
