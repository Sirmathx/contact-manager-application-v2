import React from 'react';
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";
import "./DeleteAccount.css";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const DeleteAccount = () => {
  return (
    <div>
           <Header/>
            {/* delet account start */}
            <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row  form-title">Delete Account</div>
            
            <div className="signup-form-row">
              <input type="text" placeholder="current password" />
            </div>

         

           

           

            <div className="signup-form-row">
              <button>Delete Account</button>
            </div>

            <div className="signup-form-row">
              <i>
              &nbsp;
              <Link to="/profile/settings"> <FaArrowLeft/>back to setting page</Link>

              </i>
            </div>

          </div>
        </form>
      </div>
            {/* delet account end */}
           <Footer/>
    </div>
  )
}

export default DeleteAccount;