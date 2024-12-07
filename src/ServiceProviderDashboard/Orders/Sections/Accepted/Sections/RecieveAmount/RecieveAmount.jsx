import { ICONS } from "../../../../../../Assets/Icons";
import styles from "../PaymentDetails/PaymentDetails.module.css";
import jobCardStyles from "../JobCard/JobCard.module.css";
import ScanQRstyles from "./RecieveAmount.module.css";

const RecieveAmount = ({setPaymentRecieved,setWorkInProgress, setVerificationPending, setScreen, onClose }) => {
  const handleClick = () => {
    setWorkInProgress(false);
    setScreen("paymentSuccessful");
    setPaymentRecieved(true);
    setVerificationPending(true);
  };

  return (
    <>
      <div className={jobCardStyles.main_body}>
        <div className={styles.modelBox_header}>
          <span>Receive an Amount</span>
          <span onClick={onClose}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={ScanQRstyles.modelBox}>
          <div className={ScanQRstyles.modelBox_body_ScanQR}>
            <div className={styles.details}>
              <span className={`${styles.label} ${ScanQRstyles.label}`}>
                Job ID:
              </span>
              <span className={styles.value}>mu11062401BA0001</span>
            </div>
            <div className={styles.details}>
              <span className={`${styles.label} ${ScanQRstyles.label}`}>
                Date & Time:
              </span>
              <span className={styles.value}>28/05, 05:00 PM</span>
            </div>
            <div className={styles.details}>
              <span className={`${styles.label} ${ScanQRstyles.label}`}>
                Service Category:
              </span>
              <span className={styles.value}>Software Dev</span>
            </div>
            <div className={styles.details}>
              <span className={`${styles.label} ${ScanQRstyles.label}`}>
                Customer Name:
              </span>
              <span className={styles.value}>Akash kumar</span>
            </div>
            <div className={styles.details}>
              <span className={`${styles.label} ${ScanQRstyles.label}`}>
                Amount:
              </span>
              <span className={styles.value}>₹ 5,000</span>
            </div>
            <div className={styles.details}>
              <span className={`${styles.label} ${ScanQRstyles.label}`}>
                Payment Mode:
              </span>
              <div className={styles.radioData}>
                <label className={styles.value}>
                  {ICONS.radiobuttonicon}Online
                </label>
              </div>
            </div>
          </div>

          <div
            className={`${ScanQRstyles.modelBox_body} ${ScanQRstyles.ScanQR_order}`}
          >
            <div className={ScanQRstyles.detail_ScanQR}>
              <span>Scan the QR code to receive an amount</span>
              <span onClick={() => handleClick()}>{ICONS.qrScanner}</span>
              <div className={ScanQRstyles.Scanner_amount}>
                <span className={ScanQRstyles.label}>Amount:</span>
                <span className={ScanQRstyles.value}>₹ 5,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecieveAmount;
