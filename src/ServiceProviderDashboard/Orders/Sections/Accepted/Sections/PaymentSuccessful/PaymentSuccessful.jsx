import styles from "../PaymentDetails/PaymentDetails.module.css";
import Paymentstyles from "../PaymentSuccessful/PaymentSuccessful.module.css";
import JobCardStyles from "../JobCard/JobCard.module.css";
import Button from "../../../../../Components/Button/Button";
import { ICONS } from "../../../../../../Assets/Icons";

const PaymentSuccessful = ({ setScreen, onClose }) => {
  const handleGenerateBtn = () => {
    setScreen("invoice");
  };

  return (
    <>
      <div className={JobCardStyles.main_body}>
        <div
          className={`${styles.modelBox_header} ${Paymentstyles.model_header}`}
        >
          <span>Payment Successful</span>
          <span onClick={onClose}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={JobCardStyles.modelBox}>
          <div className={Paymentstyles.modelBox_body_payment}>
            <div className={Paymentstyles.payment_detail}>
              <div className={Paymentstyles.payment_detail_data_first}>
                {ICONS.checkIcon}
              </div>
              <div className={Paymentstyles.payment_detail_data}>
                <span className={Paymentstyles.payment_label}>
                  You have received your amount Successfully!
                </span>
                <span className={Paymentstyles.payment_value}>
                  If it isn't credited to your bank within 1-2 days, please
                  create a support ticket for assistance.
                </span>
              </div>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Job ID:</span>
              <span className={styles.value}>mu11062401BA0001</span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Date & Time:</span>
              <span className={styles.value}>28/05, 05:00 PM</span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Service Category:</span>
              <span className={styles.value}>Software Dev</span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Customer Name:</span>
              <span className={styles.value}>Akash kumar</span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Amount:</span>
              <span className={styles.value}>₹ 5,000</span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Payment Mode:</span>
              <div className={styles.radioData}>
                <label className={styles.value}>
                  {ICONS.radiobuttonGrey} Online
                </label>
              </div>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Transaction ID:</span>
              <span className={styles.value}>#4518212813231</span>
            </div>
          </div>
        </div>
        <div className={JobCardStyles.modelBox_footer}>
          <Button
            onClick={() => handleGenerateBtn()}
            padding="10px 18px"
            text="Generate an Invoice"
            backgroundColor="rgba(4, 163, 73, 1)"
            color="rgba(255, 255, 255, 1)"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
