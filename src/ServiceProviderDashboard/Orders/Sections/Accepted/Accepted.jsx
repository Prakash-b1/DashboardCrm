import styles from "../../Styles/TableCommonCss.module.css";
import "../../../../utils/utilsCss/utilsCss.css";
import acceptedStyle from "./Accepted.module.css";
import React, { useEffect, useState } from "react";

import { dummyData } from "../../dummyData";
import { ICONS } from "../../../../Assets/Icons";
import JobCard from "./Sections/JobCard/JobCard";
import Invoice from "./Sections/Invoice/Invoice";
import Modal from "../../../../utils/modal/Modal";
import Button from "../../../Components/Button/Button";
import VerifiedOtpPopup from "./Sections/OTP/askForOTP/askForOTP";
import RecieveAmount from "./Sections/RecieveAmount/RecieveAmount";
import RejectionPopup from "./Sections/RejectMessage/RejectMessage";
import MessagePopup from "./Sections/ComposeMessage/ComposeMessage";
import VerifiedOTP from "./Sections/OTP/OTPsucessCard/OTPsucessCard";
import PaymentDetails from "./Sections/PaymentDetails/PaymentDetails";
import PaymentSuccessful from "./Sections/PaymentSuccessful/PaymentSuccessful";
import OrderSearchSection from "../../Components/OrderSearchSection/OrderSearchSection";

const Accepted = () => {
  const OrderListNewData = [...dummyData];

  const [show, setShow] = useState(false);
  const [screen, setScreen] = useState("");
  // const [otpVerified, setOtpVerified] = useState(false);
  const [workInProgress, setWorkInProgress] = useState(false);
  const [verificationPending, setVerificationPending] = useState(false);
  const [jobStarted, setJobStarted] = useState(false);
  // const [paymentDone, setPaymentDone] = useState(false);
  const [modeOfPayment, setModeOfPayment] = useState("online");
  const [paymentRecieved, setPaymentRecieved] = useState(false);

  const components = {
    jobCard: <JobCard onClose={() => setShow(false)} />,
    invoice: <Invoice onClose={() => setShow(false)} />,
    paymentDetails: <PaymentDetails onClose={() => setShow(false)} />,
    paymentSuccessful: <PaymentSuccessful onClose={() => setShow(false)} />,
    recieveAmount: <RecieveAmount onClose={() => setShow(false)} />,
    rejectModal: <RejectionPopup onClose={() => setShow(false)} />,
    messageModal: <MessagePopup onClose={() => setShow(false)} />,
    askForOTP: (
      <VerifiedOtpPopup
        verificationPending={verificationPending}
        setVerificationPending={setVerificationPending}
        setWorkInProgress={setWorkInProgress}
        onClose={() => setShow(false)}
        setShow={setShow}
        setScreen={setScreen}
      />
    ),
    otpSuccessCard: (
      <VerifiedOTP
        setJobStarted={setJobStarted}
        onClose={() => setShow(false)}
      />
    ),
    jobCard: <JobCard setScreen={setScreen} onClose={() => setShow(false)} />,
    paymentDetails: (
      <PaymentDetails
        setScreen={setScreen}
        modeOfPayment={modeOfPayment}
        setModeOfPayment={setModeOfPayment}
        onClose={() => setShow(false)}
      />
    ),
    recieveAmount: (
      <RecieveAmount
        setPaymentRecieved={setPaymentRecieved}
        setWorkInProgress={setWorkInProgress}
        setVerificationPending={setVerificationPending}
        setScreen={setScreen}
        onClose={() => setShow(false)}
      />
    ),
    paymentSuccessful: (
      <PaymentSuccessful setScreen={setScreen} onClose={() => setShow(false)} />
    ),
    invoice: <Invoice onClose={() => setShow(false)} />,
  };

  const handleModal = (value) => {
    setScreen(value);
    setShow(true);
  };

  return (
    <>
      <Modal
        show={show}
        onClose={() => setShow(!show)}
        children={components[screen]}
      />

      <OrderSearchSection />
      <table>
        <thead>
          <tr>
            {/* <th>
              <input type="checkbox" />
            </th> */}
            <th className={styles.job_details}>
              <div className={styles.table_data}>
                <span>Job Details</span>
              </div>
            </th>
            <th>
              <div className={styles.table_data}>
                <span>Description</span>
              </div>
            </th>
            <th>
              <div className={styles.table_data}>
                <span>Amount</span>
              </div>
            </th>
            <th>
              <div className={styles.table_data}>
                <span>Action</span>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {OrderListNewData.map((item) => (
            <tr>
              {/* <td style={{ verticalAlign: "top" }}>
                  <div className={styles.checkbox_data}>
                    <input type="checkbox" />
                  </div>
                </td> */}
              <td className={styles.hideOnMobile}>
                <div className={styles.job_req_header}>
                  <div className={styles.job_req_header_data}>
                    <p className={styles.main_heading}>Software Dev</p>
                    <span className={styles.main_heading_data}>
                      Job ID: {item.Job_ID}
                    </span>
                  </div>
                  {/* <input type="checkbox" /> */}
                </div>
                <React.Fragment key={item.Job_ID}>
                  {workInProgress && (
                    <tr className={acceptedStyle.Progress_bar_data}>
                      <td colSpan="6" className={acceptedStyle.status_td}>
                        <div
                          className={`${acceptedStyle.status_bar} ${acceptedStyle.work_progress}`}
                        >
                          {ICONS.clockUnderProcess} Work in Progress
                        </div>
                      </td>
                    </tr>
                  )}
                  {verificationPending && (
                    <tr className={acceptedStyle.Progress_bar_data}>
                      <td colSpan="6" className={acceptedStyle.status_td}>
                        <div
                          className={`${acceptedStyle.status_bar} ${acceptedStyle.verification_pending}`}
                        >
                          {ICONS.passkeyIcon} Verification Pending
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              </td>
              <td className={styles.job_details}>
                <div
                  className={`${styles.order_card_detail} ${styles.hideOnDesktop}`}
                >
                  <span>Job ID: </span>
                  <span>{item.Job_ID}</span>
                </div>
                <div className={styles.order_card_detail}>
                  <span>Date & Time: </span>
                  <span>{item.Date_Time}</span>
                </div>

                <div
                  className={`${styles.order_card_detail} ${styles.hideOnDesktop}`}
                >
                  <span>Service Category: </span>
                  <span>{item.Service_Category}</span>
                </div>

                <div className={styles.order_card_detail}>
                  <span>Customer Name: </span>
                  <span>{item.Customer_Name}</span>
                </div>

                <div className={styles.order_card_detail}>
                  <span>Address: </span>
                  <span>{item.Address}</span>
                </div>
              </td>
              <td>
                <div className={styles.order_card_detail}>
                  <span>Job Description: </span>
                  <span>{item.Job_Description}</span>
                </div>
                <div className={styles.order_card_detail}>
                  <span>Special Instructions: </span>
                  <span>{item.Special_Instructions}</span>
                </div>
              </td>
              <td>
                <div className={styles.order_card_detail}>
                  <span>Service Charges: </span>
                  <span>{item.Service_Charges}</span>
                </div>
              </td>
              <td className={styles.action_td}>
                <div className={jobStarted ? "hide" : styles.multi_btn}>
                  <div className={styles.table_data_first}>
                    <Button
                      onClick={() => handleModal("askForOTP")}
                      padding="10px 9px"
                      text="Start Work"
                      backgroundColor="rgba(4, 163, 73, 1)"
                      color="#fff"
                      width="100%"
                    />
                  </div>
                  <div className={styles.table_data_second}>
                    <Button
                      onClick={() => handleModal("rejectModal")}
                      padding="9px 22px"
                      text="Cancel"
                      backgroundColor="#fff"
                      color="rgba(228, 50, 50, 1)"
                      borderColor="rgba(228, 50, 50, 1)"
                      width="100%"
                    />
                  </div>
                  <span
                    className={`${acceptedStyle.messageIcon} ${styles.Message_hideOnMobile}`}
                    onClick={() => handleModal("messageModal")}
                  >
                    {ICONS.messageBlackIcon}
                  </span>
                </div>
                <div className={jobStarted ? styles.multi_btn : "hide"}>
                  <Button
                    onClick={
                      verificationPending
                        ? () => handleModal("invoice")
                        : () => handleModal("jobCard")
                    }
                    padding="10px 18px"
                    text="Job Card"
                    backgroundColor="#FED462"
                    color="black"
                    width="100%"
                    minWidth="8rem"
                  />
                  <Button
                    onClick={() => handleModal("askForOTP")}
                    padding="9px 22px"
                    text="Finish Job"
                    backgroundColor={
                      paymentRecieved ? "#04A349" : "rgba(204, 204, 204, 0.50)"
                    }
                    color={paymentRecieved ? "#fff" : "#808080"}
                    disabled={paymentRecieved ? false : true}
                    width="100%"
                    minWidth="8rem"
                  />
                  <span
                    className={`${acceptedStyle.messageIcon} ${styles.Message_hideOnMobile}`}
                    onClick={() => handleModal("messageModal")}
                  >
                    {ICONS.messageBlackIcon}
                  </span>
                </div>
              </td>
              <td>
                <div
                  className={`${styles.order_card_detail} ${styles.hideOnDesktop}`}
                >
                  <span
                    className={acceptedStyle.messageIcon}
                    onClick={() => handleModal("messageModal")}
                  >
                    {ICONS.messageBlackIcon}
                  </span>
                </div>
              </td>
            </tr>
            /* </React.Fragment> */
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Accepted;
