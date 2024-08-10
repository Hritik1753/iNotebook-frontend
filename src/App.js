import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert/Alert';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { useState } from 'react';
import User from './components/User';
import Addnote from './components/AddNote/Addnote';
// import UserState from './context/user/UserState';
import Add_detail from './components/Adddetails/Add_detail';
import Sidebar from './components/Sidebar/Sidebar';
import Note from './components/Note/Note';
import Verify from './Verify';
function App() {

  const [alert, setalert] = useState(null);
  const showAlert = (message,type) => {
    setalert({
      msg: message,
      type:type
    })

     setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <NoteState >
      <BrowserRouter>
       
          <Navbar showAlert={showAlert} />

        <Alert alert={alert} />
        
        
        <Routes>
          <Route path="/">
              <Route index element={<Home showAlert={showAlert} />} />
            </Route>
            <Route path="/user">
            <Route index element={<User />} />
              
          </Route>
          
          <Route path="/notes">
            <Route index element={<Note showAlert={showAlert}/>} />
            </Route>

            <Route path="/login">
            <Route index element={<Login showAlert={showAlert}/>} />
          </Route>
          
          <Route path="/verify/:email">
            <Route index element={<Verify showAlert={showAlert}/>} />
            </Route>

            <Route path="/signup">
            <Route index element={<Signup showAlert={showAlert}/>} />
            </Route>

            <Route path="/about">
            <Route index element={<About showAlert={showAlert}/>} />
            </Route>

            <Route path="/addnote">
            <Route index element={<Addnote showAlert={showAlert}/>} />
            </Route>

            <Route path="/adddetail">
            <Route index element={<Add_detail showAlert={showAlert}/>} />
            </Route>
          
        </Routes>
      
      

       
    </BrowserRouter>
    </NoteState>
    
  );
}

export default App;
