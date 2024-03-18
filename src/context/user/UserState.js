import UserContext from "./userContext";
import { useState } from "react";
const UserState = (props) => {
    
    const host = "http://localhost:5000";


    const userInitial=[]
    

    const [user, setUser] = useState(userInitial);

  //Add a Note
  const getuser = async() => {
    //API call
    const response = await fetch(`${ host }/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
      
    });

    const json = await response.json();
    console.log(json);
    console.log("tera baap");
    setUser(json);
  }


 

  
    return (
        //ese send state:state , update:update in bracket {}
        <UserContext.Provider value={{user,getuser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
