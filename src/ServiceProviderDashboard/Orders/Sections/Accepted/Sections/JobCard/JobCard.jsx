import styles from "../PaymentDetails/PaymentDetails.module.css";
import jobcardstyle from "../JobCard/JobCard.module.css";
import Button from "../../../../../Components/Button/Button";
import { ICONS } from "../../../../../../Assets/Icons";
import { useEffect, useState } from "react";
import UploadFile from "../../../../../Components/UploadFile/UploadFile";

const JobCard = ({ setScreen, onClose }) => {
  const [bill,setBill] = useState(null);
  const [required1, setRequired1] = useState(false);
  const [required2, setRequired2] = useState(false);
  const [required3, setRequired3] = useState(false);
  const [collectCash, setCollectCash] = useState(false);
  const [workDetail, setWorkDetail] = useState({
    workDone: "",
    serviceCharge: "",
    material: "",
  });


  const handleSubmit = () => {
    if (workDetail.workDone === "") {
      setRequired1(true);
    } else {
      setRequired1(false);
    }

    if (workDetail.serviceCharge === "") {
      setRequired2(true);
    } else {
      setRequired2(false);
    }

    if (workDetail.material === "") {
      setRequired3(true);
    } else {
      setRequired3(false);
    }

    if (!Object.values(workDetail).includes("")) {
      //a fetch call will be called
      setCollectCash(true);
    }
  };


  return (
    <>
      <div className={jobcardstyle.main_body}>
        <div className={styles.modelBox_header}>
          <span>Job Card</span>
          <span onClick={onClose}>{ICONS.closeWhiteIcon}</span>
        </div>
        <div className={jobcardstyle.modelBox}>
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
              <span className={styles.label}>Address:</span>
              <span className={styles.value}>
                Lal bagh, Mumbai Road no. 2, Maharastra
              </span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Job Description:</span>
              <span className={styles.value}>
                Description of the job requirements
              </span>
            </div>
            <div className={styles.details}>
              <span className={styles.label}>Special Instructions:</span>
              <span className={styles.value}>Any specific instructions</span>
            </div>
          </div>

          <div className={jobcardstyle.modelBox_body}>
            <div className={jobcardstyle.details}>
              <span className={jobcardstyle.label}>Work done:</span>
              <span className={jobcardstyle.value}>
                <textarea
                  readOnly={collectCash ? true : false}
                  className={jobcardstyle.textarea}
                  placeholder="Type the works you have done..."
                  onChange={(e) =>
                    setWorkDetail({ ...workDetail, workDone: e.target.value })
                  }
                ></textarea>
                {required1 && (
                  <p className={jobcardstyle.requiredMsg}>*required</p>
                )}
              </span>
            </div>
            <div className={jobcardstyle.JobCardData}>
              <div className={jobcardstyle.left_JobCardData}>Charges:</div>
              <div className={jobcardstyle.right_JobCardData}>
                <div className={jobcardstyle.right_JobCardData_first}>
                  <span>Base Price</span>
                  <span className={jobcardstyle.Data}>₹ 1,000</span>
                </div>
                <div className={jobcardstyle.right_JobCardData_first}>
                  <span>Service Charges</span>
                  <div className={jobcardstyle.right_input_data}>
                    <span>
                      <span className={jobcardstyle.rupeeIcon}>₹</span>
                      <input
                        readOnly={collectCash ? true : false}
                        onChange={(e) =>
                          setWorkDetail({
                            ...workDetail,
                            serviceCharge: e.target.value,
                          })
                        }
                        value={workDetail.serviceCharge}
                        type="number"
                        placeholder="250"
                      />
                      {ICONS.minusIcon}
                      &nbsp;
                      {ICONS.plusIcon}
                    </span>
                    {required2 && (
                      <p className={jobcardstyle.requiredMsg1}>*required</p>
                    )}
                  </div>
                </div>
                <div className={jobcardstyle.right_JobCardData_first}>
                  <span>Material</span>
                  <div className={jobcardstyle.right_input_data}>
                    <span>
                      <span className={jobcardstyle.rupeeIcon}>₹</span>
                      <input
                        readOnly={collectCash ? true : false}
                        onChange={(e) =>
                          setWorkDetail({
                            ...workDetail,
                            material: e.target.value,
                          })
                        }
                        value={workDetail.material}
                        type="number"
                        placeholder="1000"
                      />
                      {ICONS.minusIcon}
                      &nbsp;
                      {ICONS.plusIcon}
                    </span>
                    {required3 && (
                      <p className={jobcardstyle.requiredMsg1}>*required</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={jobcardstyle.details}>
              <label className={jobcardstyle.label}>
                <span>Upload Bill:</span>
              </label>
              <UploadFile file={bill} setFile={setBill} inputId='billCopy' disabledValue={collectCash} />
            </div>
          </div>
        </div>
        <div className={jobcardstyle.modelBox_footer}>
          <Button
            onClick={() => handleSubmit()}
            padding="10px 18px"
            text={collectCash ? "Submitted" : "Submit"}
            backgroundColor={
              collectCash ? "rgba(204, 204, 204, 0.50)" : "#FED462"
            }
            color={collectCash ? "#808080" : "rgba(13, 13, 13, 1)"}
          />
          <Button
            onClick={() => setScreen("paymentDetails")}
            padding="10px 18px"
            text="Collect Cash"
            backgroundColor={
              collectCash ? "#FED462" : "rgba(204, 204, 204, 0.50)"
            }
            color={collectCash ? "rgba(13, 13, 13, 1)" : "#808080"}
            disabled={collectCash ? false : true}
          />
        </div>
      </div>
    </>
  );
};
export default JobCard;
