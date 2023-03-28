import React from 'react'
import "./Login.css"
import Footer from '../partials/Footer/Footer';
import { Link } from "react-router-dom";
import Header from '../partials/Header/Header';
const login = () => {
  return (
    <React.Fragment>
       <Header/>
        <div className="signup-wrapper">
        <form action="" method="post">
          <div className="signup-form">
            <div className="signup-form-row  form-title">Login</div>
            
            <div className="signup-form-row">
              <input type="email" placeholder="example@emal.com" />
            </div>

            <div className="signup-form-row">
              <input type="password" placeholder="password" />
            </div>

            {/* <div className="signup-form-row">
              <label For="termsCondition">
                <input type="checkbox" id="termsCondition" />I agree to the
                <Link to="/termsCondition"> Terms and Conditions</Link>
              </label>
            </div> */}

            <div className="signup-form-row">
              <button>Login</button>
            </div>

            <div className="signup-form-row">
              <i>
              don't have an account? &nbsp;
              <Link to="/login">create an account</Link>

              </i>
            </div>

          </div>
        </form>
      </div>
        <Footer/>
    </React.Fragment>
  )
}

export default login