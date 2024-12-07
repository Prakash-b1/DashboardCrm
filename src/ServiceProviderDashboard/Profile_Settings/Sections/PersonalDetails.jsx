import styles from "../Styles/ProfileCommonCss.module.css";
import Button from "../../Components/Button/Button";
import Inputbox from "../Components/Inputbox/Inputbox";
import { useState } from "react";
import UploadFile from "../../Components/UploadFile/UploadFile";

const PersonalDetails = () => {
  const [adharCard, setAdharCard] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [profilePic, setProfilePic] = useState("/Assets/ServiceProviderDashboard/ProfileSetting/ProfileImages/prakash.jpg");

  const handleProfilePic = (e) => {
    if (e.target.files.length === 0) return;
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
      <div className={styles.Profile_Container}>
        <div className={styles.Profile_heading}>
          <p className={styles.text}>Personal Details</p>
          <p className={styles.mandatory_data}>(* Indicates required question)</p>
        </div>
        <div className={styles.Main_Container}>
          <div className={styles.profile_personal_details}>
            <img src={profilePic} alt="Profile" className={styles.profile_img} />
            <div className={styles.camera_outer_dot}>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                className={styles.file_input}
                onChange={handleProfilePic}
              />
              <label htmlFor="imageUpload">
                <img
                  src="/Assets/ServiceProviderDashboard/ProfileSetting/ProfileImages/CameraIcon.svg"
                  alt="Camera Icon"
                  className={styles.cameraIcon}
                />
              </label>
            </div>
            <div className={styles.Profile_data}>
              <p className={styles.name}>Prakash</p>
              <p className={styles.label}>pinnubhatt09123@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.heading}>Personal Information</div>
        <div className={styles.Main_Container}>
          {/* Personal Information Form */}
          <div className={styles.main_container_form}>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Full name <span className={styles.star_mark}>*</span>
              </label>
              <Inputbox placeholder="Prakash" />
            </div>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Date of birth <span className={styles.star_mark}>*</span>
              </label>
              <Inputbox placeholder="05/05/2000" />
            </div>
          </div>
          <div className={styles.main_container_form}>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                MOBILE NUMBER <span className={styles.star_mark}>*</span>
              </label>
              <Inputbox type="number" placeholder="1234 567 890" />
            </div>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Email address <span className={styles.star_mark}>*</span>
              </label>
              <Inputbox type="email" placeholder="Anymail@gmail.com" />
            </div>
          </div>
          <div className={styles.main_container_form}>
            <div className={styles.form_data_Bio}>
              <label className={styles.form_label}>
                BIO <span className={styles.star_mark}>*</span>
              </label>
              <textarea>
                Lorem ipsum dolor sit amet consectetur. Ultrices mauris ultrices auctor venenatis tincidunt facilisis laoreet...
              </textarea>
            </div>
          </div>
        </div>

        <div className={styles.heading}>Address</div>
        <div className={styles.Main_Container}>
          <div className={styles.main_container_form}>
            <div className={`${styles.form_data} ${styles.form_data_one}`}>
              <label className={styles.form_label}>
                Permanent address <span className={styles.star_mark}>*</span>
              </label>
              <Inputbox type="text" placeholder="2-26, New Road Mumbai, India" />
            </div>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Current address <span className={styles.star_mark}>*</span>
              </label>
              <label className={styles.checkbox_container}>
                <input type="checkbox" />
                <span className={styles.checkbox_data}>Same as Permanent address</span>
              </label>
              <Inputbox type="text" placeholder="2-26, New Road Mumbai, India" />
            </div>
          </div>
        </div>

        <div className={styles.heading}>Other Important Details</div>
        <div className={styles.Main_Container}>
          <div className={styles.main_container_form}>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                Aadhar card <span className={styles.star_mark}>*</span>
              </label>
              <UploadFile file={adharCard} setFile={setAdharCard} inputId='adharcard' disabledValue={false} />
            </div>
            <div className={styles.form_data}>
              <label className={styles.form_label}>
                PAN card <span className={styles.star_mark}>*</span>
              </label>
              <UploadFile file={panCard} setFile={setPanCard} inputId='pancard' disabledValue={false} />
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
export default PersonalDetails;
