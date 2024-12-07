import { useState } from "react";
import Button from "../../../Components/Button/Button";
import OrderSearchSection from "../../Components/OrderSearchSection/OrderSearchSection";
import styles from "../../Styles/TableCommonCss.module.css";
import { dummyData, Accepted, Rejected } from "../../dummyData";
import Modal from "../../../../utils/modal/Modal";
import RejectionPopup from "../Accepted/Sections/RejectMessage/RejectMessage";
import { useNavigation } from "react-router-dom";

const JobRequest = () => {
  const [orderListNewData, setOrderListNewData] = useState([...dummyData]);

  const [show, setShow] = useState(false);
  // const [screen, setScreen] = useState("");

  const navigate = useNavigation;

  // console.log(typeof Accepted,'Accepted' );

  const handleAction = (type, job_id) => {
    const job = dummyData.find((order) => order.Job_ID === job_id);

    console.log(job, "job");
    console.log(type, "type");

    if (type === "accept") {
      // Accepted = [...Accepted, job];
    }

    if (type === "reject") {
      // Rejected = [...Rejected, job];
      setShow(true);
    }
    const filteredOrderListNewData = orderListNewData.filter(
      (order) => order.Job_ID !== job_id
    );
    setOrderListNewData(filteredOrderListNewData);
    // navigate('/accept')
  };

  return (
    <>
      <Modal
        show={show}
        onClose={() => setShow(!show)}
        children={<RejectionPopup onClose={() => setShow(!show)} />}
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
          </tr>
        </thead>
        <tbody>
          {orderListNewData.map((item) => (
            <tr key={item.Job_ID}>
              {/* <td style={{ verticalAlign: "top" }}>
                <div className={styles.checkbox_data}>
                  <input type="checkbox" />
                </div>
              </td> */}
              <td className={styles.hideOnMobile}>
                <div className={styles.job_req_header}>
                  <div className={styles.job_req_header_data}>
                    <p className={styles.main_heading}>Software Dev</p>
                    <span className={styles.main_heading_data}>Job ID: {item.Job_ID}</span>
                  </div>
                  {/* <input type="checkbox" /> */}
                </div>
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
                  <span>Work Location/Area Name: </span>
                  <span>{item.Work_Location}</span>
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
              <td>
                <div className={styles.multi_btn}>
                  <div className={styles.table_data_first}>
                    <Button
                      onClick={() => handleAction("accept", item.Job_ID)}
                      padding="8px 24px"
                      text="Accept"
                      backgroundColor="rgba(4, 163, 73, 1)"
                      color="#fff"
                      width="100%"
                    />
                  </div>
                  <div className={styles.table_data_second}>
                    <Button
                      onClick={() => handleAction("reject", item.Job_ID)}
                      padding="8px 24px"
                      text="Reject"
                      backgroundColor="#fff"
                      color="rgba(228, 50, 50, 1)"
                      borderColor="rgba(228, 50, 50, 1)"
                      width="100%"
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default JobRequest;
