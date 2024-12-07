import styles from "../Styles/ProfileCommonCss.module.css";
import Button from "../../Components/Button/Button";
import Inputbox from "../Components/Inputbox/Inputbox";
import { ICONS } from "../../../Assets/Icons";

const SecuritySettings = () => {
  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Security Settings</p>
        </div>
        <div className={styles.heading}>Change Password</div>
        <div className={styles.Main_Container}>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>Current Password</label>
            <Inputbox type="password" placeholder="**********" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>New Password</label>
            <Inputbox type="password" placeholder="**********" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>Confirm Password</label>
            <Inputbox type="password" placeholder="**********" />
          </div>
          <div className={styles.SecuritySettings_footer}>
            <Button
              padding="10px 24px"
              text="Update Password"
              backgroundColor="#FED462"
              color="#0D0D0D"
            />
          </div>
        </div>

        <div className={styles.heading}>
          Where you’re logged in
          <p className={styles.security_heading_data}>
            We’ll alert you via
            <span className={styles.callNumber}>*********90</span> if there is
            any unusual activity on your account.
          </p>
        </div>
        <div className={styles.Security_Main_Container}>
          <div className={styles.security_form_data}>
            <div className={styles.textData}>
              <p className={styles.security_Icondata}>
                {ICONS.DesktopIcon} Windows Desktop
              </p>
              <p
                className={styles.checkbox_data}
                style={{ marginLeft: "38px" }}
              >
                <span className={styles.location}>
                  Mumbai, Maharastra {ICONS.EllipseIcon} 14 Jan at 10:40am
                </span>
              </p>
            </div>
            <div className={styles.SecuritySettings_footer}>
              <Button
                borderColor="#CCCCCC"
                padding="10px 18px"
                text="Log out"
                backgroundColor="#FFFFFF"
                color="#0D0D0D"
              />
            </div>
          </div>
          <div className={styles.security_form_data}>
            <div className={styles.textData}>
              <p className={styles.security_Icondata}>
                {ICONS.MobileIcon} Android 14, Samsung s22 ultra
              </p>
              <p
                className={styles.checkbox_data}
                style={{ marginLeft: "38px" }}
              >
                <span className={styles.location}>
                  Mumbai, Maharastra {ICONS.EllipseIcon} 14 Jan at 10:40am
                </span>
              </p>
            </div>
            <div className={styles.SecuritySettings_footer}>
              <Button
                borderColor="#CCCCCC"
                padding="10px 18px"
                text="Log out"
                backgroundColor="#FFFFFF"
                color="#0D0D0D"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecuritySettings;
