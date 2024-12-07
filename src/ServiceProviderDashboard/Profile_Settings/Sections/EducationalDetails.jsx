import styles from "../Styles/ProfileCommonCss.module.css";
import Button from "../../Components/Button/Button";
import Inputbox from "../Components/Inputbox/Inputbox";

const EducationalDetails = () => {
  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Educational Details</p>
          <p className={styles.mandatory_data}>
            (* Indicates required question)
          </p>
        </div>
        <div className={styles.heading}>Academic Background</div>
        <div className={styles.Main_Container}>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              College name
              <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox
              type="text"
              placeholder="College name (if applicable) or type “None”"
            />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Degree <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox placeholder="Highest qualification or certification (e.g., Diploma, Training)" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Year of completion <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox placeholder="Year of completion (e.g., 2005, 2018)" />
          </div>
        </div>

        <div className={styles.heading}>Additional Qualifications</div>
        <div className={styles.Main_Container}>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>Other Certifications</label>
            <Inputbox
              type="text"
              placeholder="Additional certifications or qualifications"
            />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>Achievements</label>
            <Inputbox
              type="text"
              placeholder="List any relevant achievements or recognitions"
            />
          </div>
        </div>

        <div className={styles.footer_data}>
          <Button
            padding="10px 18px"
            text="Next >"
            backgroundColor="#FED462"
            color="#0D0D0D"
          />
        </div>
      </div>
    </>
  );
};

export default EducationalDetails;
