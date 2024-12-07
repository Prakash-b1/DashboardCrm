import styles from "../Styles/ProfileCommonCss.module.css";
import Button from "../../Components/Button/Button";
import Inputbox from "../Components/Inputbox/Inputbox";
import DropdownList from "../Components/DropdownList/DropdownList";
import { ICONS } from "../../../Assets/Icons";

const ProfessionalDetails = () => {
  const DropdownListData = [
    "Option A",
    "Option B",
    "Option C",
    "Option D",
    "Option E",
    "Option F",
  ];

  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Professional Details</p>
          <p className={styles.mandatory_data}>
            (* Indicates required question)
          </p>
        </div>
        <div className={styles.heading}>Specializations & Services</div>
        <div className={styles.Main_Container}>
          <div className={styles.main_container_form}>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Work Type <span className={styles.star_mark}>*</span>
              </label>
              {/* <Inputbox placeholder="choose an option" /> */}
              <DropdownList options={DropdownListData} />
            </div>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Alternate Works <span className={styles.star_mark}>*</span>
              </label>
              <Inputbox placeholder="Any Other Random Works like Plumbing, Painting" />
            </div>
          </div>
        </div>

        <div className={styles.heading}>Experience</div>
        <div className={styles.Main_Container}>
          <div className={styles.main_container_form}>
            <div className={styles.Profile_heading}>
              <p className={styles.professional_text}>Past Projects</p>
              <p className={styles.professional_textlink}>
                Upload Portfolio/ Samples
              </p>
            </div>
          </div>
          <div className={styles.dropfile_container}>
            <span className={styles.dropfile_Icon}>
              {ICONS.CloudUploadIcon}
            </span>
            <div className={styles.dropfile_container_data}>
              {/* <p>
                Drop your file here or 
                <span className={styles.browseData}>Browse</span>
              </p> */}
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
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Total years in industry
              <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox placeholder="2" />
          </div>
          <div className={styles.professional_form_data}>
            <label className={styles.form_label}>
              Comments <span className={styles.star_mark}>*</span>
            </label>
            <Inputbox placeholder="Figma ipsum component variant main layer. Figma ipsum component variant main layer. Figma ipsum component variant main layer. Subtract link project image figma hand..." />
          </div>
        </div>

        <div className={styles.heading}>Preferences & Locations</div>
        <div className={styles.Main_Container}>
          <div className={styles.main_container_form}>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Preferred Work Type <span className={styles.star_mark}>*</span>
              </label>
              <DropdownList options={DropdownListData} />
            </div>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Preferred Location <span className={styles.star_mark}>*</span>
              </label>
              <DropdownList options={DropdownListData} />
            </div>
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

export default ProfessionalDetails;
