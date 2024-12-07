import styles from '../Components/NavButton/NavButton.module.css';
import settingsStyles from './Settings.module.css'

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useState } from 'react';

import Header from '../Components/Header/Header';
import SearchBar from '../Components/SearchBar/SearchBar';
import PersonalDetails from './Sections/PersonalDetails';
import EducationDetails from './Sections/EducationalDetails';
import ProfileSideBar from './Components/ProfileSideBar/ProfileSideBar';
import FinancialDetails from './Sections/FinancialDetails';
import ProfessionalDetails from './Sections/ProfessionalDetails';
import SecuritySettings from './Sections/SecuritySettings';
import NotificationSetting from './Sections/NotificationSetting';
import BillingHistory from './Sections/BillingHistory';
import Modal from '../../utils/modal/Modal';
import Logout from './Components/Logout/Logout';


const Settings = () => {

  const [show,setShow] = useState(false);

  return (
    <>
      <Header title='Profile Settings' />
      <div className={styles.navButton_container}>
        <SearchBar />
      </div>
      <div className={settingsStyles.settings_page}>
        <div>
          <ProfileSideBar setShow={setShow} />
        </div>
        <div className={settingsStyles.allPages}>
          <Routes>
            <Route path='/' element={<Navigate to='personal' replace />} />
            <Route path='personal' element={<PersonalDetails />} />
            <Route path='educational' element={<EducationDetails />} />
            <Route path='professional' element={<ProfessionalDetails />} />
            <Route path='financial' element={<FinancialDetails />} />
            <Route path='security' element={<SecuritySettings />} />
            <Route path='notification' element={<NotificationSetting />} />
            <Route path='invoiceHistory' element={<BillingHistory />} />
          </Routes >
          <Outlet />
          <Modal
            show={show}
            onClose={() => setShow(!show)}
            children={<Logout setShow={setShow}/>}
          />
        </div>
      </div >
    </>
  );
};
export default Settings;
