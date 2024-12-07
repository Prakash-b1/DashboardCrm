import styles from "../Styles/ProfileCommonCss.module.css";
import Inputbox from "../Components/Inputbox/Inputbox";
import { ICONS } from "../../../Assets/Icons";

const FinancialDetails = () => {
  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Financial Details</p>
          <p className={styles.mandatory_data}>
            (* Indicates required question)
          </p>
        </div>
        <div className={styles.heading}>Bank Details</div>
        <div className={styles.Main_Container}>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Bank Name
              <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox type="text" placeholder="HDFC Bank" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              IFSC Code <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox type="text" placeholder="HDFC000452" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Account Number <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox type="text" placeholder="121212121212121212" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              UPI ID <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox type="text" placeholder="0123456789@ybl" />
            <p className={styles.financial_upi_data}>
              <span>{ICONS.AddIconBlue}</span> ADD UPI ID
            </p>
          </div>
        </div>

        <div className={styles.heading}>Other Important Details</div>
        <div className={styles.Main_Container}>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Cancelled Cheque <span className={styles.star_mark}>*</span>
            </label>
            <div className={styles.dropfile_container}>
              <span className={styles.dropfile_Icon}>
                {ICONS.CloudUploadIcon}
              </span>
              <div className={styles.dropfile_container_data}>
                <p>
                  Drop your file here or
                  <span className={styles.browseData}>
                    <input
                      type="file"
                      accept="image/*"
                      id="fileUpload"
                      className={styles.file_input}
                    />
                    <label htmlFor="fileUpload">Browse</label>
                  </span>
                </p>
                <div className={styles.dropfileValues}>
                  <p>MAX file size: 500MB</p>
                  <p>Supported file types: JPG, PNG, GIF, PDF, SVG, XML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialDetails;
