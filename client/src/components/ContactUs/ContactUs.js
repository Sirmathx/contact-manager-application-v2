import React from 'react';
import "./ContactUs.css";
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";

const ContactUs = () => {
  return (
    <div>
    <Header/>
    <div className='contact_us'>
            <h1>contact us </h1>
        
      
          <label for="name">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="abuja">abuja</option>
            <option value="lagos">lagos</option>
            <option value="enugu">enugu</option>
          </select>
      
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      
          <input type="submit" value="Submit" className='summit'/>
    </div>
    <Footer/>
    </div>
  )
}

export default ContactUs;