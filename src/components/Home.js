import React from 'react';
import Notes from './Notes';
// import Addnote from './Addnote';
function Home(props) {
 
  return (
    <div >
     
      {/* <Addnote/> */}
      <Notes showAlert={props.showAlert} />
      

    </div>
  )
}

export default Home
