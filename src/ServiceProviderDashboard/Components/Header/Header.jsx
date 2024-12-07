import Styles from './Header.module.css';
import { ICONS } from "../../../Assets/Icons";
import "../../../utils/utilsCss/utilsCss.css";
import { useState } from 'react';
import NotifiactionList from '../../Notifiactions/Components/NotificationList/NotificationList';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {

  const navigate = useNavigate()
  const [show, setShow] = useState(null);

  const handleToggle = (value) => {
    navigate('/settings/personal')
    if (show === value) {
      setShow(null);
    } else {
      setShow(value);
    }
  }

  return (
    <div>
      <header className={Styles.header}>
        <h2>{title}</h2>
        <div className={`space_between ${Styles.header_right_section}`}>
          <div style={{ position: 'relative' }}>
            <span onClick={() => handleToggle('notification')} className={show === 'notification' ? Styles.bell_icon_active : Styles.bell_icon}>{ICONS.notificationIcon}</span>
            <div className={Styles.notificationList} style={{ display: show === 'notification' ? 'block' : 'none' }}>
              <NotifiactionList small={true} />
            </div>
          </div>

          <div onClick={() => handleToggle('profile')} className={show === 'profile' ? `space_between ${Styles.profile_section_active}` : `space_between ${Styles.profile_section}`}>
            <img className={Styles.profile_img} src="/Assets/ServiceProviderDashboard/ProfileSetting/ProfileImages/prakash.jpg" alt="" />
            <p className={Styles.profile_name}>Hi, Prakash</p>
            <span className={Styles.cursor}>{ICONS.cursorDown}</span>
          </div>

        </div>
      </header>
    </div>
  );
};

export default Header;
