import styles from "./NotificationList.module.css";
import { ICONS } from "../../../../Assets/Icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const notificationData = [
  {
    text: "Special Offer! Provide a 10% discount on renovation services this month and boost your client base.",
    time: "2 mins ago",
    status: "read",
  },
  {
    text: "New Booking: You've been booked for a home renovation project starting June 15th at 9:00 AM.",
    time: "Today",
    status: "unread",
  },
  {
    text: "Appointment Reminder: You have a scheduled site visit for a construction project tomorrow at 10:00 AM.",
    time: "Yesterday",
    status: "read",
  },
  {
    text: "Security Alert: A new login to your account was detected from a different device. If this wasn’t you, please secure your account.",
    time: "01-06-24",
    status: "unread",
  },
  {
    text: "Support Update: Your support ticket #4567 has been updated. Please review the latest response.",
    time: "31-05-24",
    status: "unread",
  },
];
const NotifiactionList = ({ small = false }) => {

  const [showId, setShowId] = useState(null);

  const handleNotificationMenu = (index) => {

    index !== showId ? setShowId(index) : setShowId(null)
  }

  return (
    <>
      {notificationData.map((item, index) => (
        <div
          key={index}
          className={small ? styles.notification_small : showId !== null ? styles.notification_open_threedot_menu : styles.notification}
          style={{
            backgroundColor: item.status === "unread" ? "#EBF3FF" : "#fff",
          }}
        >
          <div className={styles.notification_data}>
            <div
              className={small ? styles.status_dot_small : styles.status_dot}
              style={{
                backgroundColor: item.status === "unread" ? "#16C963" : "#fff",
              }}
            ></div>
            <div className={small ? styles.notification_data_child_small : styles.notification_data_child}>
              {item.text}
              <p className={small ? styles.time_small : styles.time}>{item.time}</p>
            </div>
          </div>
          <div className={showId === index ? styles.show_threedot : styles.threedot} onClick={() => handleNotificationMenu(index)}>{ICONS.threeDotsIcon}</div>
          <div className={styles.colon_popup} style={{ display: showId === index ? 'block' : 'none' }}>
            <div className={styles.colon_item}>Mark as unread</div>
            <div className={styles.colon_item}>Delete notification</div>
          </div>
        </div>
      ))}

      {small === true && <div className={styles.footer}>
        <Link to='../notification'>all notifications</Link>
      </div>}


    </>
  );
};
export default NotifiactionList;
