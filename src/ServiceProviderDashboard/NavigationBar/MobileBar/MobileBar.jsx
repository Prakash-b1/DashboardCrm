import { NavLink } from "react-router-dom";
import { ICONS } from "../../../Assets/Icons";

import Styles from "./MobileBar.module.css";
import { useState } from "react";

const MobileBar = () => {

  const [active, setActive] = useState('home');

  return (
    <div className={`${Styles.navbar} ${Styles.display}`}>

      <NavLink to="home" className={Styles.option} onClick={() => setActive('home')} >
        <span className={active === 'home' ? Styles.selectedOptionIcon : Styles.optionIcon}> {active === 'home' ? ICONS.homeFillBlue : ICONS.homeIconOutline} </span>
        <p>Home</p>
      </NavLink>
      <NavLink to="order" className={Styles.option} onClick={() => setActive('order')}>
        <span className={active === 'order' ? Styles.selectedOptionIcon : Styles.optionIcon}> {active === 'order' ? ICONS.orderFillBlue : ICONS.orderIconOutline} </span>
        <p>Order</p>
      </NavLink>
      <NavLink to="message" className={Styles.option} onClick={() => setActive('message')} >
        <span className={active === 'message' ? Styles.selectedOptionIcon : Styles.optionIcon}>   {active === 'message' ? ICONS.messageFillBlue : ICONS.messageIconOutline} </span>
        <p>Message</p>
      </NavLink>
      <NavLink to="settings" className={Styles.option} onClick={() => setActive('settings')}>
        <span className={active === 'settings' ? Styles.selectedOptionIcon : Styles.optionIcon}>  {active === 'settings' ? ICONS.profileFillBlue : ICONS.profileIconOutline} </span>
        <p>Profile</p>
      </NavLink>

    </div>
  );
};

export default MobileBar;
