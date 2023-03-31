import React from 'react'
import "./Profile.css";
import Header from '../partials/Header/Header';
import Footer from "../partials/Footer/Footer";
import {FaTrash,FaEdit,FaPlusSquare, FaTools, FaArrowRight,FaPhone,FaEnvelope} from "react-icons/fa";
import profilePhoto from "../../assets/theme_ntp_background.png";
import {Link} from "react-router-dom";
const profile = () => {
  return (
    <React.Fragment>
          <Header/>
          <div className='profile_wrapper'>
            <div className='profile_col_1'>
                <div className='profile_col_1_sub_1'>
                    <img src={profilePhoto} alt=''/>
                </div>
                <div className='profile_col_1_sub_2'>mathias oloture unwaba</div>
                <div className='profile_col_1_sub_3'>3/29/2023 &bull; 10:22 am</div>
                <div className='profile_col_1_sub_4'>
                    <Link to="/profile/settings"><FaTools/>settings</Link>
                    <Link to="/profile/logout"><FaArrowRight/>Logout</Link>
                </div>
            </div>

            <div className='profile_col_2'>
            <div className='profile_col_2_sub_1'>
                <form action=''method=''>

                <div className='search_box'>
                   <input type="search" name='' id='' placeholder='Find contact'/> 
                </div>
                </form>
                <div className='number_of_contact_box'>108</div>
                <div className='add_contact_box'>
                    <Link to="/profile/contact/add">
                        <FaPlusSquare /> Add Contact
                    </Link>
                </div>
            </div> 
            <div className='profile_col_2_sub_2'>
                
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 
                <div className='contact_box'>
                 <div className='contact_box_item'>mathias unwaba</div>    
                 <div className='contact_box_item'>
                    <a href='mailto:contact_box_item mathias@gmail.com'>
                    <FaEnvelope/> send Email
                    </a>
                </div>    
                 <div className='contact_box_item'>
                    <FaPhone/>
                    07015484344</div>    
                 <div className='contact_box_action_grp'>
                <Link to="/profile/contact/edith" className='edit_btn'>
                    <FaEdit/>
                    Edit
                </Link>
                <button className='delete_btn'>
                    <FaTrash/>
                    delete
                </button>
                </div>    
                </div> 

              
              
               
            </div>  
            </div>
          </div>
          <Footer/>

    </React.Fragment>
  );
};

export default profile;