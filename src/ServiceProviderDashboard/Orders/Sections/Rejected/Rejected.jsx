import Button from "../../../Components/Button/Button";
import OrderSearchSection from "../../Components/OrderSearchSection/OrderSearchSection";
import styles from "../../Styles/TableCommonCss.module.css";
import { dummyData } from "../../dummyData";

const Rejected = () => {
  const OrderListNewData = [...dummyData];
  return (
    <>
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
                <span>Reason for Rejection</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {OrderListNewData.map((item) => (
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
                <div className={`${styles.order_card_detail} ${styles.hideOnDesktop}`}>
                  <span>Job ID: </span>
                  <span>{item.Job_ID}</span>
                </div>
                <div className={styles.order_card_detail}>
                  <span>Date & Time: </span>
                  <span>{item.Date_Time}</span>
                </div>
                <div className={`${styles.order_card_detail} ${styles.hideOnDesktop}`}>
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
                <div
                  className={`${styles.reason_for_reject} ${styles.hideOnDesktop}`}
                >
                  <span>
                    The requested service date and time do not align with our
                    current schedule. Please select an alternate time or contact
                    support for further assistance.
                  </span>
                </div>
                <div
                  className={`${styles.reason_for_reject_onMobile} ${styles.hideOnMobile1}`}
                >
                  <p>Reason for Rejection:</p>
                  <span>
                    The requested service date and time do not align with our
                    current schedule. Please select an alternate time or contact
                    support for further assistance.
                  </span>
                </div>
              </td>
              {/* <td>
                <div className={styles.reason_for_reject}>
                  <span>
                    The requested service date and time do not align with our
                    current schedule. Please select an alternate time or contact
                    support for further assistance.
                  </span>
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Rejected;
