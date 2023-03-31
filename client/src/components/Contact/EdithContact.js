import React from 'react';
import "./AddContact.css";
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";
import {FaArrowLeft, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EdithContact = () => {
  return (
    <div>
      <Header/>
      {/* start off add contact wrapper */}
      <div className='contact_wrapper'>
        <form action='' method="post">
          <div className='page_row_1'>
            <div className='page_row_1_a'>
              <FaUserPlus/>
              Edit contact
            </div>
            <div className='page_row_1_b'>
              <Link to="/profile">
               <FaArrowLeft/>
               back
              </Link>
            </div>
          </div>
          <div className='page_row_2'>
            <div className='input_grp'>
              <input type="text" placeholder='First name'/>
              <input type="text" placeholder='last name'/>
            </div>
            <div className='input_grp'>
              <input type="text" placeholder='Email'/>
              <input type="text" placeholder='Phone'/>
            </div>
          </div>
          <div className='page_row_3'>
            {/* <div className='btn_grp'> */}
              <Link to="profile" className='cancel_btn'>
                Cancel
              </Link>
              <button className='create_btn'>Update</button>
            {/* </div> */}
          </div>

        </form>
      </div>
{/* end off add contact wrapper */}
      <Footer/>

    </div>
  );
};

export default EdithContact;