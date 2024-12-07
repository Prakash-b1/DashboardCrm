import styles from "../RejectMessage/RejectMessage.module.css";
import Messagestyles from "../ComposeMessage/ComposeMessage.module.css";
import Button from "../../../../../Components/Button/Button";
import { ICONS } from "../../../../../../Assets/Icons";

const MessagePopup = ({ onClose }) => {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popup_header}>
          <span>Compose message</span>
          <span onClick={() => onClose()}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={Messagestyles.popup_message_bar}>
          <span className={Messagestyles.popup_message_bar_label}>to:</span>
          <span className={Messagestyles.popup_message_bar_value}>Akash</span>
        </div>
        <div className={styles.popup_body}>
          <textarea placeholder="Write something here..."></textarea>
          <div className={Messagestyles.footer_btn}>
            <div className={Messagestyles.message_popup_icon}>
              <input
                type="file"
                id="fileUpload"
                accept=".docx"
                className={Messagestyles.file_input}
              />
              <label
                htmlFor="fileUpload"
                className={Messagestyles.file_upload_label}
              >
                <span className={Messagestyles.icon}>{ICONS.attachIcon}</span>
              </label>
              <input
                type="file"
                id="fileUpload"
                accept ='image/*'
                className={Messagestyles.file_input}
              />
              <label
                htmlFor="fileUpload"
                className={Messagestyles.file_upload_label}
              >
                <span className={Messagestyles.icon}>{ICONS.mmsIcon}</span>
              </label>
            </div>
            <div className={Messagestyles.compose_popup_buttons}>
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
                backgroundColor="#FED462"
                color="#0D0D0D"
              >
                {ICONS.sendIcon} Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MessagePopup;
