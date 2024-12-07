import styles from "../Logout/Logout.module.css";
import { ICONS } from "../../../../Assets/Icons";
import Button from "../../../Components/Button/Button";

const Logout = ({ setShow }) => {

  const handleLogout = () => {
    setShow(false);
  }

  return (
    <>
      <div className={styles.logout_Container}>
        <div className={styles.logout_popup}>
          <div className={styles.logout_heading}>
            Logout
            <p className={styles.logout_text}>
              Are you sure you want to log out?
            </p>
          </div>
          <div onClick={() => setShow(false)} className={styles.logout_icon}>{ICONS.logoutCloseIcon}</div>
        </div>
        <div className={styles.footer_logout_btn}>
          <Button
            width="100%"
            borderColor="#CCCCCC"
            padding="14px 18px"
            text="Cancel"
            backgroundColor="#FFFFFF"
            color="#0D0D0D"
            onClick={() => setShow(false)}
          />
          <Button
            width="100%"
            padding="14px 18px"
            text="Log Out"
            backgroundColor="#E43232"
            color="#FFFFFF"
            onClick={() => handleLogout()}
          />
        </div>
      </div>
    </>
  );
};
export default Logout;
