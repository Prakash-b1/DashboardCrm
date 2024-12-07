import styles from "../RejectMessage/RejectMessage.module.css";
import Button from "../../../../../Components/Button/Button";
import { ICONS } from "../../../../../../Assets/Icons";

const RejectionPopup = ({ onClose }) => {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup_header}>
          <span>Reason for Rejection</span>
          <span onClick={() => onClose()}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={styles.popup_body}>
          <textarea placeholder="Describe your reason here..."></textarea>
          <div className={styles.popup_buttons}>
            <Button
              onClick={() => onClose()}
              padding="10px 18px"
              text="Go back"
              backgroundColor="#FFF"
              color="#0D0D0D"
              borderColor="#CCC"
            />
            <Button
              onClick={() => onClose()}
              padding="10px 18px"
              text="Reject"
              backgroundColor="#E43232"
              color="#FFF"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default RejectionPopup;
