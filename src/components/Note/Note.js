import { React, useContext } from 'react';
import Notes from '../Notes';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

// import Addnote from './Addnote';
function Note(props) {

 
 
  return (
    <div className='home' style={{backgroundColor:"", height:"", display:"flex"}}>
    
      {/* <Notes showAlert={props.showAlert} /> */}
     
      <div className="sidebar" style={{width:""}}>
        <Sidebar />
      </div>
      <div className="notes" style={{width:"1300px", backgroundColor:""}}>
          <Notes showAlert={props.showAlert} />
      </div>
      

    </div>
  )
}
export default Note