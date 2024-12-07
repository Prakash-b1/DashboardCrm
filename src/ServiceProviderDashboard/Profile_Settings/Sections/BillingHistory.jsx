import styles from "../Styles/ProfileCommonCss.module.css";
import { ICONS } from "../../../Assets/Icons";

const BillingHistory = () => {
  const BillingHistoryData = [
    {
      text: "Software Dev",
    },
    {
      text: "Software Dev",
    },
    {
      text: "Software Dev",
    },
    {
      text: "Software Dev",
    },
    {
      text: "Software Dev",
    },
    {
      text: "Software Dev",
    },
  ];
  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Billing History</p>
        </div>

        <div className={styles.Security_Main_Container}>
          {BillingHistoryData.map((item, index) => (
            <div className={styles.security_form_data} key={index}>
              <div div className={styles.textData}>
                <p className={styles.billing_data}>{item.text}</p>
                <p className={styles.checkbox_data}>
                  <span className={styles.location}>
                    INVOICE# 021345 {ICONS.EllipseIcon} 04/06/24
                  </span>
                </p>
              </div>
              <div className={styles.BillingHistory_footer}>
                <p>{ICONS.VisibilityIcon}</p>
                <p>{ICONS.DownloadIcon}</p>
                <p>{ICONS.DeleteIcon}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BillingHistory;
