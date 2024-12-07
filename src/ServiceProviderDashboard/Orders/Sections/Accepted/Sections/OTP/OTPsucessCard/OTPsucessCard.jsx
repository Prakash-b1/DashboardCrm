import styles from "../../RejectMessage/RejectMessage.module.css";
import Button from "../../../../../../Components/Button/Button";
import Verifiedstyles from "./OTPsucessCard.module.css";
import { ICONS } from "../../../../../../../Assets/Icons";

const VerifiedOTP = ({ setJobStarted, onClose }) => {
  const handleOkay = () => {
    setJobStarted(true);
    onClose();
  };

  return (
    <>
      <div className={styles.popup}>
        <div className={Verifiedstyles.VerifiedOTP_header}>
          <span>OTP Verified!</span>
          <span onClick={() => onClose()}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={styles.popup_body}>
          <div className={Verifiedstyles.VerifiedOtp_details}>
            <span>{ICONS.checkIcon}</span>
            <div className={Verifiedstyles.VerifiedOtp_detail_data}>
              <p className={Verifiedstyles.VerifiedOtp_label}>
                OTP Verified Successfully
              </p>
              <span className={Verifiedstyles.VerifiedOtp_value}>
                You can now begin the job. Click 'Job Card' for details or
                'Finish Job' when the task is complete.
              </span>
            </div>
          </div>
          <div className={styles.popup_buttons}>
            <Button
              onClick={() => handleOkay()}
              padding="10px 18px"
              text="Okay"
              backgroundColor="#04A349"
              color="#FFF"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default VerifiedOTP;
