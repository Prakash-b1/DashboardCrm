import styles from "../../RejectMessage/RejectMessage.module.css";
import Button from "../../../../../../Components/Button/Button";
import OtpPopupstyles from "./askForOTP.module.css";
import { ICONS } from "../../../../../../../Assets/Icons";
import { useEffect, useState } from "react";

const VerifiedOtpPopup = ({
  setScreen,
  setWorkInProgress,
  verificationPending,
  setVerificationPending,
  onClose,
}) => {
  // const otp = [1, 2, 3, 4];

  // const [enteredOtp, setEnteredOtp] = useState({
  //   a: 0,
  //   b: 0,
  //   c: 0,
  //   d: 0,
  // });

  const preSetOtp = "1234";

  const [otp, setOtp] = useState({ otp1: "", otp2: "", otp3: "", otp4: "" });

  const [invalidOtp, setInvalidOtp] = useState(false);
  const [missingOtp, setMissingOtp] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleOtp = (e) => {
    e.preventDefault();

    const allFilled = Object.values(otp).every((value) => value !== "");
    // onOtpComplete(allFilled);

    if (allFilled) {
      if (Object.values(otp).join("") === preSetOtp) {
        setInvalidOtp(false);
        if (!verificationPending) {
          setWorkInProgress(true);
        }
        setVerificationPending(false);
        setScreen("otpSuccessCard");
        // onClose();
      } else {
        setInvalidOtp(true);
        setMissingOtp(false);
      }
      // verifyOtp();
    } else {
      setMissingOtp(true);
      setInvalidOtp(false);
    }
  };

  const handleChange = (name, event) => {
    const value = event.target.value;
    if (value.length <= 1) {
      setOtp({ ...otp, [name]: value });
    }
  };

  const inputFocus = (elmnt) => {
    // console.log(elmnt, "elmnt");
    if (elmnt.key === "Backspace") {
      const prev = elmnt.target.tabIndex - 2;
      if (prev > -1) {
        elmnt.target.form.elements[prev].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  return (
    <>
      <form>
        <div className={styles.popup}>
          <div className={styles.popup_header}>
            <span>Enter the OTP</span>
            <span onClick={() => onClose()}>{ICONS.closeWhiteIcon}</span>
          </div>
          <div className={OtpPopupstyles.VerifiedOtpPopup_body}>
            <div className={OtpPopupstyles.VerifiedOtpPopup_details}>
              <span>{ICONS.infoIcon}</span>
              <p className={OtpPopupstyles.VerifiedOtpPopup_value}>
                An OTP has been sent to your registered mobile number ending
                with
                <span className={OtpPopupstyles.phone_no}> *********90. </span>
                Please check your messages.
              </p>
            </div>
            <div className={OtpPopupstyles.Otp_input_data}>
              <p className={OtpPopupstyles.Otp_input_text}>Enter the OTP</p>

              <div className={OtpPopupstyles.otpContainer}>
                {[1, 2, 3, 4].map((i) => (
                  <input
                    key={i}
                    name={`otp${i}`}
                    type="text"
                    placeholder="_"
                    autoComplete="off"
                    className={OtpPopupstyles.otpInput}
                    value={otp[`otp${i}`]}
                    onChange={(e) => handleChange(`otp${i}`, e)}
                    tabIndex={i}
                    maxLength="1"
                    onKeyUp={inputFocus}
                  />
                ))}
              </div>
              {invalidOtp && (
                <p className={OtpPopupstyles.invalidMsg}>OTP is invalid !</p>
              )}
              {missingOtp && (
                <p className={OtpPopupstyles.invalidMsg}>
                  Please enter all 4 digits !
                </p>
              )}
            </div>
            <p className={OtpPopupstyles.resend}>
              Didn't receive a code? <a href="#">Send again</a>
            </p>
            <hr className={OtpPopupstyles.line} />
            <div className={OtpPopupstyles.footer_btn}>
              <Button
                onClick={(e) => handleClose(e)}
                padding="10px 18px"
                text="Go back"
                backgroundColor="#FFF"
                color="#0D0D0D"
                borderColor="#CCC"
              />
              <Button
                type="submit"
                onClick={(e) => handleOtp(e)}
                padding="10px 18px"
                text="Verify OTP"
                backgroundColor="#FED462"
                color="#0D0D0D"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default VerifiedOtpPopup;
