import "./home.css"
import React, { useContext, useEffect, useRef, useState } from 'react';
import Notes from '../Notes';
import Sidebar from '../Sidebar/Sidebar';
import UserContext from '../../context/notes/noteContext';


import { useNavigate,useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import Addnote from './Addnote';
function Home(props) {

  const context = useContext(UserContext);
  const { user, getuser, getuserdetail, detail, editdetails } = context;
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    getuser();
    console.log("hello sir");
    console.log(user);
  }, []); 

    
    // eslint-disable-next-line


  
    if (localStorage.getItem('token')) {
      return (
        <div className='home' style={{backgroundColor:"", height:"", display:"flex"}}>
       
         {/* <Notes showAlert={props.showAlert} /> */}
        
          <div className="sidebar" style={{ width: "" }}>
           <Sidebar />
         </div>
          <div className="not" style={{ width: "1300px", backgroundColor: "" }}>
            
         <div class="home-container">
        <div class="welcome-box">
            <h1 id="welcome-message">Welcome {user.name} in Notes Collection!</h1>
        </div>
    </div>
         </div>
         
   
       </div > 
     )
    }
    else {
        navigate('/login');
    }
    
    // eslint-disable-next-line



}

export default Home
