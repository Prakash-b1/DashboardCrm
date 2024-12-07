import styles from "../ProfileExtendedPopup/ProfilePopup.module.css";
import { ICONS } from "../../../assest/Icons";

const ProfilePopup = () => {
  return (
    <>
      <div className={styles.ProfilePopup_Container}>
        <div className={styles.ProfilePopup}>
          <div className={styles.ProfilePopup_data}>
            {ICONS.PersonIcon} <span className={styles.text}>Profile Settings</span>
          </div>
          <div className={styles.ProfilePopup_data}>
            {ICONS.ContactSupportIcon} <span className={styles.text}>Help & Support</span>
          </div>
          <div className={styles.ProfilePopup_data}>
            {ICONS.LogoutIcon} <span className={styles.logout_text}>Logout </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfilePopup;
