import React, { useState } from "react";
import { useContext,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserContext from "./context/notes/noteContext";
const Verify = () => {
    const [verfied, setverfied] = useState(false);
    const context = useContext(UserContext);
    const { user, getuser, getuserdetail, detail, editdetails } = context;
    const navigate = useNavigate();
    let location = useLocation();
  
    useEffect(() => {
      getuser();
      console.log("hello sir");
        console.log(user);
        
    }, [user]); 

    alert('email varification link send to your email varify it first');
    return (
        <div className="spiner">
            {user.isVerified ? navigate('/home') :  navigate('/login')}
            

    </div>
    
    )
}

export default Verify