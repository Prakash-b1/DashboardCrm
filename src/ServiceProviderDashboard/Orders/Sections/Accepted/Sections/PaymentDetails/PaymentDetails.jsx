import styles from "../PaymentDetails/PaymentDetails.module.css";
import jobCardStyles from "../../Sections/JobCard/JobCard.module.css";

import Button from "../../../../../Components/Button/Button";
import { ICONS } from "../../../../../../Assets/Icons";
const PaymentDetails = ({
  setScreen,
  modeOfPayment,
  setModeOfPayment,
  onClose,
}) => {
  const handleConfirm = () => {
    if (modeOfPayment === "cash") {
      setScreen("invoice");
    } else {
      setScreen("recieveAmount");
    }
  };

  const handleModeOfPayment = (e) => {
    setModeOfPayment(e.target.value);
  };

  return (
    <>
      <div className={jobCardStyles.main_body}>
        <div className={styles.modelBox_header}>
          <span>Payment Details</span>
          <span onClick={onClose}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={jobCardStyles.modelBox}>
          <div className={styles.modelBox_body}>
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
                  <input
                    onChange={(e) => handleModeOfPayment(e)}
                    value="online"
                    type="radio"
                    name="payment-mode"
                    checked
                  />
                  Online
                </label>
                <label className={styles.value}>
                  <input
                    onChange={(e) => handleModeOfPayment(e)}
                    value="cash"
                    type="radio"
                    name="payment-mode"
                  />
                  Cash
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={jobCardStyles.modelBox_footer}>
          <Button
            onClick={(e) => handleConfirm(e)}
            padding="10px 18px"
            text="Confirm"
            backgroundColor="#FED462"
            color="rgba(13, 13, 13, 1)"
          />
        </div>
        {/* // <div className={styles.modelBox_footer_mobileview}>
        //   <Button
        //     width="100%"
        //     padding="10px 18px"
        //     text="Confirm"
        //     backgroundColor="#FED462"
        //     color="rgba(13, 13, 13, 1)"
        //   />
        // </div> */}
      </div>
    </>
  );
};
export default PaymentDetails;
