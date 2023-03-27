import React from 'react';
import {Link} from 'react-router-dom';
import {FaUserShield,FaUserPlus, } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='main-footer-wrapper'>
         <div className='link-grp'>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/service">service</Link>
            <Link to="/contact">contact</Link>
            <Link className='nav-login-btn' to="/login">
              login
              <FaUserShield/>
            </Link>
            <Link className='nav-signup-btn' to="/signup">
              sign up
              <FaUserPlus/>
              </Link>
          </div>
          <div className='copyright-box'>
            &copy; copyright 2023 CMA, All right reserved
          </div>
    </footer>
  );
};

export default Footer;