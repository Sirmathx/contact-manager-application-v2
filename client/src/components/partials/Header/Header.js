import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css";
// import headstyle from "./Header.Modules.css";
import logo from "../../../assets/CMA-v2.svg";
import {FaBars,FaUserShield,FaUserPlus, } from "react-icons/fa";

const Header = () => {
  return (
    <nav className='main-navbar'>
        <div className='logo-box'>
          <Link to="/">
          <img src={logo} alt="CMA Logo"/>

          </Link>
        </div>
        <div className='nav-link-grp'>
          <div className='nav-toggler'>
            <span id='toggleBtn'>
              <FaBars/>
            </span>
          </div>
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
        </div>
    </nav>
  );
};

export default Header;