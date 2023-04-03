import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";
import { Link } from "react-router-dom";


const EditProfie = () => {
  return (
    <div>
         <Header/>
        {/*  */}
        <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row  form-title">Edit Profile</div>
            
            <div className="signup-form-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <div className="signup-form-row">
              <input type="email" placeholder="example@emal.com" />
            </div>

            {/* <div className="signup-form-row">
              <input type="password" placeholder="password" />
              <input type="password" placeholder="confirm password" />
            </div> */}

           

            <div className="signup-form-row">
              <button>Update Account</button>
            </div>

            <div className="signup-form-row">
              <i>
              <FaArrowLeft/> &nbsp;
              <Link to="/profile/settings">Back to Settings Page</Link>

              </i>
            </div>

          </div>
        </form>
      </div>
        {/*  */}
        <Footer/>
    </div>
  )
}

export default EditProfie;