import styles from "../PaymentDetails/PaymentDetails.module.css";
import jobcardstyle from "../JobCard/JobCard.module.css";
import Invoicestyles from "./Invoice.module.css";
import Button from "../../../../../Components/Button/Button";
import { ICONS } from "../../../../../../Assets/Icons";

const Invoice = ({ onClose }) => {
  return (
    <>
      <div className={jobcardstyle.main_body}>
        <div className={styles.modelBox_header}>
          <span>Invoice</span>
          <span onClick={onClose}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={jobcardstyle.modelBox}>
          <div className={styles.modelBox_body}>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Job ID:</span>
              <span className={styles.value}>mu11062401BA0001</span>
            </div>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Date & Time:</span>
              <span className={styles.value}>28/05, 05:00 PM</span>
            </div>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Service Category:</span>
              <span className={styles.value}>Software Dev</span>
            </div>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Customer Name:</span>
              <span className={styles.value}>Akash kumar</span>
            </div>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Address:</span>
              <span className={styles.value}>
                Lal bagh, Mumbai Road no. 2, Maharastra
              </span>
            </div>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Job Description:</span>
              <span className={styles.value}>
                Description of the job requirements
              </span>
            </div>
            <div className={`${styles.details}`}>
              <span className={styles.label}>Special Instructions:</span>
              <span className={styles.value}>Any specific instructions</span>
            </div>
          </div>

          <div className={Invoicestyles.modelBox_body}>
            <div className={Invoicestyles.details}>
              <span className={Invoicestyles.label}>Work done:</span>
              <span className={Invoicestyles.value}>Software Dev</span>
            </div>
            <div className={Invoicestyles.JobCardData}>
              <div className={Invoicestyles.left_JobCardData}>
                <span className={Invoicestyles.label}>Charges:</span>
              </div>
              <div className={Invoicestyles.right_JobCardData}>
                <div className={Invoicestyles.right_JobCardData_first}>
                  <span>Base Price</span>
                  <span className={Invoicestyles.Data}>₹ 5,000</span>
                  <div className={Invoicestyles.line_div}>
                    <span className={Invoicestyles.line}></span>
                  </div>
                </div>
                <div className={Invoicestyles.right_JobCardData_first}>
                  <span>Service Charges</span>
                  <div className={Invoicestyles.right_input_data}>
                    <span className={Invoicestyles.Data}>₹ 250</span>
                    <div className={Invoicestyles.line_div}>
                      <span className={Invoicestyles.line}></span>
                    </div>
                  </div>
                </div>
                <div className={Invoicestyles.right_JobCardData_first}>
                  <span>Material</span>
                  <div className={Invoicestyles.right_input_data}>
                    <span className={Invoicestyles.Data}>₹ 1,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={Invoicestyles.details}>
              <div className={Invoicestyles.upload_container}>
                <label htmlFor="fileUpload" className={Invoicestyles.label}>
                  Upload Bill:
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  className={Invoicestyles.file_input}
                />
                <label
                  htmlFor="fileUpload"
                  className={Invoicestyles.invoice_file_upload_label}
                >
                  {ICONS.pageIcon}

                  <div className={Invoicestyles.pdf_values}>
                    <span className={Invoicestyles.first_value}>
                      Bill Of Plumber.Pdf
                    </span>
                    <span className={Invoicestyles.last_value}>200 KB</span>
                  </div>
                </label>
              </div>
            </div>
            <div className={Invoicestyles.details}>
              <span className={Invoicestyles.label}>Payment Mode:</span>
              <div className={Invoicestyles.radioData}>
                <label className={Invoicestyles.value}>
                  {ICONS.radiobuttonicon}Online
                </label>
              </div>
            </div>
            <div className={Invoicestyles.details}>
              <span className={Invoicestyles.label}>Transaction ID:</span>
              <span className={Invoicestyles.value}>#4518212813231</span>
            </div>
          </div>
        </div>
        <div className={jobcardstyle.modelBox_footer}>
          <Button
            padding="5px 18px"
            text="Download"
            backgroundColor="#FED462"
            color="#0D0D0D"
            fontSize="15px"
          />
        </div>
      </div>
    </>
  );
};
export default Invoice;
