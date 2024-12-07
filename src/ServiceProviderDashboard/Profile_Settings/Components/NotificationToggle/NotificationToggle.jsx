import { ICONS } from "../../../../Assets/Icons";
import styles from "./NotificationToggle.module.css";

const NotifiactionToggle = ({ active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        active ? styles.notification_enable : styles.notification_disabled
      }
    >
      {active ? (
        <div className={styles.notification_icon}>
          {ICONS.NotifiactionCheck}
        </div>
      ) : (
        <div className={styles.notification_icon}>
          {ICONS.NotifiactionCross}
        </div>
      )}
    </div>
  );
};
export default NotifiactionToggle;
