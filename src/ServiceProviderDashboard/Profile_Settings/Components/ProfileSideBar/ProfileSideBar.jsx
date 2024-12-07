import { NavLink } from "react-router-dom";
import { ICONS } from "../../../../Assets/Icons";

import styles from './ProfileSideBar.module.css';
import { useState } from "react";

const ProfileSideBar = ({setShow}) => {
    const [active, setActive] = useState('profile setting');

    const [dropDown, setDropDown] = useState(true);

    const handleProfileDropDown = (value) => {
        setDropDown(!dropDown);
        setActive(value);
    }

    const handleSideOption = (value) => {
        setDropDown(false);
        setActive(value);
    }

    const isActiveSubOptionFunc = ({ isActive }) => {
        return isActive
            ? ` ${styles.sub_option} ${styles.active_sub_option}`
            : `${styles.sub_option}`;
    };


    return (
        <div className={styles.settings_page}>
            <div >
                <div onClick={() => handleProfileDropDown('profile setting')} className={active === 'profile setting' ? `${styles.active_option} ${styles.option}` : styles.option}>
                    <span>{active === 'profile setting' ? ICONS.profileSettingsIconBlue : ICONS.profileSettingsIcon}</span> Profile Settings <span className={dropDown ? styles.downCursor : styles.cursor}>{active === 'profile setting' ? ICONS.blueCursonUp : ICONS.blackCursorDown}</span>
                </div>
                <div className={dropDown ? styles.sub_option_list : styles.hide}>
                    <NavLink to='personal' className={isActiveSubOptionFunc}>Personal Details</NavLink>
                    <NavLink to='professional' className={isActiveSubOptionFunc}>Professional Details</NavLink>
                    <NavLink to='educational' className={isActiveSubOptionFunc}>Educational Details</NavLink>
                    <NavLink to='financial' className={isActiveSubOptionFunc}>Financial Details</NavLink>
                </div>
            </div>
            <NavLink onClick={() => handleSideOption('security')} to='security' className={active === 'security'
                ? ` ${styles.option} ${styles.active_option}`
                : `${styles.option}`}>
                <span className={styles.icon}>{active === 'security' ? ICONS.encryptedIconBlue : ICONS.encryptedIcon}</span> Security Settings
            </NavLink>
            <NavLink onClick={() => handleSideOption('notification')} to='notification' className={active === 'notification'
                ? ` ${styles.option} ${styles.active_option}`
                : `${styles.option}`}>
                <span>{active === 'notification' ? ICONS.editNotificationIconBlue : ICONS.editNotificationIcon}</span> Notification Settings
            </NavLink>
            <NavLink onClick={() => handleSideOption('invoice')} to='invoiceHistory' className={active === 'invoice'
                ? ` ${styles.option} ${styles.active_option}`
                : `${styles.option}`}>
                <span>{active === 'invoice' ? ICONS.invoiceIconBlue : ICONS.invoiceIcon}</span> Invoice
            </NavLink>
            <div onClick={()=>setShow(true)}className={styles.option}>
                <span>{ICONS.logoutIcon}</span> Logout
            </div>
        </div>
    )
}

export default ProfileSideBar;