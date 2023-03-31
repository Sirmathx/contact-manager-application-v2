import React from 'react';
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const ChangePassword = () => {
  return (
    <div>
        <Header/>
        {/* start of change password */}
        <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row  form-title">change password</div>
            
            

            

            <div className="signup-form-row">
              <input type="password" placeholder="old password" />
           
            </div>
            <div className="signup-form-row">
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
            </div>

           

            <div className="signup-form-row">
              <button>Update Password</button>
            </div>
            <div className="signup-form-row">
              <Link to="/profile/settings"> <FaArrowLeft/> &nbsp; Back to settings page</Link>
            </div>

            

          </div>
        </form>
      </div>
        {/* end of change password */}
        <Footer/>
    </div>
  )
}

export default ChangePassword