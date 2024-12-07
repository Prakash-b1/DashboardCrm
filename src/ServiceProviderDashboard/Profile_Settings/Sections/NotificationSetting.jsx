import { useState } from "react";
import NotifiactionToggle from "../Components/NotificationToggle/NotificationToggle";
import styles from "../Styles/ProfileCommonCss.module.css";
import DropdownList from "../Components/DropdownList/DropdownList";

const NotificationSetting = () => {
  const NotificationSettingData = [
    {
      id: 1,
      notification_type: "Promotional Notifications",
      notification_value: "Exclusive deals and offers.",
      active: false,
    },
    {
      id: 2,
      notification_type: "Transactional Notifications",
      notification_value: "Order confirmations and receipts.",
      active: true,
    },
    {
      id: 3,
      notification_type: "Reminder Notifications",
      notification_value: "Appointment and event reminders.",
      active: false,
    },
    {
      id: 4,
      notification_type: "Security Notifications",
      notification_value: "Alerts for logins and security.",
      active: true,
    },
    {
      id: 5,
      notification_type: "Support Notifications",
      notification_value: "Updates on support requests.",
      active: true,
    },
  ];

  const OtherNotificationData = [
    {
      id: 1,
      notification_type: "Push Notifications",
      notification_value: "Real-time updates and alerts.",
      active: false,
    },
    {
      id: 2,
      notification_type: "In-App Notifications",
      notification_value: "Messages and activity updates.",
      active: true,
    },
    {
      id: 3,
      notification_type: "Email Notifications",
      notification_value: "Newsletters and account updates.",
      active: false,
    },
    {
      id: 4,
      notification_type: "SMS Notifications",
      notification_value: "Quick alerts via SMS.",
      active: true,
    },
  ];

  const [displaydata, setDisplayData] = useState(NotificationSettingData);
  const [otherdisplaydata, setOtherDisplayData] = useState(
    OtherNotificationData
  );
  const [silence, setSilence] = useState(false);

  const handleToggle = (itemId) => {
    let data = [...displaydata];
    let updatedData = data.map((notify) =>
      itemId === notify.id
        ? {
            ...notify,
            active: !notify.active,
          }
        : notify
    );
    setDisplayData(updatedData);
  };

  const handleOtherToggle = (itemID) => {
    let otherdata = [...otherdisplaydata];
    let updateOtherData = otherdata.map((notify) =>
      itemID === notify.id
        ? {
            ...notify,
            active: !notify.active,
          }
        : notify
    );
    setOtherDisplayData(updateOtherData);
  };

  const handleSilenceToggle = () => {
    setSilence(!silence);
  };

  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Notification Settings</p>
        </div>
        <div className={styles.heading}>Customization</div>
        <div className={styles.notification_Main_Container}>
          {displaydata.map((item, index) => (
            <div className={styles.notification_form_data} key={index}>
              <div div className={styles.textData}>
                <p className={styles.billing_data}>{item.notification_type}</p>
                <p className={styles.checkbox_data}>
                  <span className={styles.location}>
                    {item.notification_value}
                  </span>
                </p>
              </div>
              <NotifiactionToggle
                active={item.active}
                onClick={() => handleToggle(item.id)}
              />
            </div>
          ))}
        </div>

        <div className={styles.heading}>Do not disturb mode</div>
        <div className={styles.notification_Main_Container}>
          <div className={styles.notification_form_data}>
            <div div className={styles.textData}>
              <p className={styles.billing_data}>Schedule Time</p>
            </div>
            <div className={styles.notification_time_container}>
              <div className={styles.notification_time}>
                <input type="time" max={'12:59'} min={'01:00'} className={styles.time} />
                {/* <select className={styles.time_option}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select> */}
                {/* <DropdownList options={["AM","PM"]}/> */}
                <div className={styles.dropdown_container}>
                  <DropdownList
                    options={["AM", "PM"]}
                    defaultValue="AM"
                    from="DND"
                  />
                </div>
              </div>
              <span>-</span>
              <div className={styles.notification_time}>
                <input type="time" className={styles.time} />
                <div className={styles.dropdown_container}>
                  <DropdownList
                    options={["AM", "PM"]}
                    defaultValue="PM"
                    from="DND"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.notification_form_data}>
            <div div className={styles.textData}>
              <p className={styles.billing_data}>Silence Mode</p>
            </div>
            <div>
              <NotifiactionToggle
                active={silence}
                onClick={() => handleSilenceToggle()}
              />
            </div>
          </div>
        </div>

        <div className={styles.heading}>Other Notifications</div>
        <div className={styles.notification_Main_Container}>
          <div className={styles.heading}>Other Notifications</div>
          {otherdisplaydata.map((item, index) => (
            <div className={styles.notification_form_data} key={index}>
              <div div className={styles.textData}>
                <p className={styles.billing_data}>{item.notification_type}</p>
                <p className={styles.checkbox_data}>
                  <span className={styles.location}>
                    {item.notification_value}
                  </span>
                </p>
              </div>
              <NotifiactionToggle
                active={item.active}
                onClick={() => handleOtherToggle(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationSetting;
