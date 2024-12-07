//import styles from "../Notifiactions/Notifiactions.module.css";
import styles from './Components/NotificationList/NotificationList.module.css';
import notification_styles from './Notifiactions.module.css'
import Header from "../Components/Header/Header";
import NavButton from "../Components/NavButton/NavButton";
import NotificationList from './Components/NotificationList/NotificationList'
import { useState } from "react";
import { ICONS } from '../../Assets/Icons';

const Notifiactions = () => {

  const [show, setShow] = useState('All')
  const [showOptions, setOptions] = useState(false)

  return (
    <>
      <Header title='Notifications' />
      <NavButton show={show} setShow={setShow} options={['All', 'Promotional', 'Transactional', 'Reminder', 'Security', 'Support']} />
      <div className={showOptions ? `${notification_styles.menu_option} ${notification_styles.menu_option_active}` : notification_styles.menu_option} onClick={() => setOptions(!showOptions)}>{ICONS.threeDotsIcon}</div>
      <div className={notification_styles.colon_popup} style={{ display: showOptions ? 'block' : 'none' }}>
        <div className={styles.colon_item}>Mark all as unread</div>
        <div className={styles.colon_item}>Notification settings</div>
      </div>
      <div style={{ marginTop: '22vh' }}>
        <NotificationList />
      </div>
    </>
  );
};
export default Notifiactions;
