import React from 'react';
import "./Settings.css";
import { Link } from 'react-router-dom';
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";
import { FaUserEdit,FaUserShield, FaUserLock } from 'react-icons/fa';

const Settings = () => {
  return (
    <div>
          <Header/>
          {/* start of settings */}
          <section className='settings-wrapper'>
            <div className='settings_col_1 edit_profile_col'>
                <div className='edit_profile_row_1'>Profile</div>
                <div className='edit_profile_row_2'>
                <FaUserEdit className='settings_icon_grp'/>
                </div>
                <div className='edit_profile_row_3'>
                    <Link to="/profile/edit">Edit profile</Link>
                </div>
            </div>

            <div className='settings_col_2 change_password_col'>
            <div className='change_password_row_1'>password</div>
                <div className='change_password_row_2'>
                <FaUserLock className='settings_icon_grp'/>
                </div>

                <div className='change_password_row_3'>
                    <Link to="/profile/password">change password</Link>
                </div>
            </div>
            <div className='settings_col_3 delete_account_col'>
            <div className='delete_account_row_1'>Account</div>
                <div className='delete_account_row_2'>
                <FaUserShield className='settings_icon_grp'/>
                </div>
                <div className='change_password_row_3'>
                    <Link to="/profile/delete-account">Delete Account</Link>
                </div>
            </div>
         
          </section>
          {/*  end of settings */}
          <Footer/>
    </div>
  );
};

export default Settings;