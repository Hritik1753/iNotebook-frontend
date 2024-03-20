import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import User from './components/User';
import Addnote from './components/Addnote';
// import UserState from './context/user/UserState';
import Add_detail from './components/Add_detail';
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
    <NoteState>
      <BrowserRouter>
     
        <Navbar showAlert={showAlert} />
        <Alert alert={alert} />
           <div className="container">
        <Routes>
          <Route path="/">
              <Route index element={<Home showAlert={showAlert} />} />
            </Route>
            <Route path="/about">
            <Route index element={<About />} />
              
            </Route>

            <Route path="/login">
            <Route index element={<Login showAlert={showAlert}/>} />
            </Route>

            <Route path="/signup">
            <Route index element={<Signup showAlert={showAlert}/>} />
            </Route>

            <Route path="/user">
            <Route index element={<User showAlert={showAlert}/>} />
            </Route>

            <Route path="/addnote">
            <Route index element={<Addnote showAlert={showAlert}/>} />
            </Route>

            <Route path="/adddetail">
            <Route index element={<Add_detail showAlert={showAlert}/>} />
            </Route>
          
        </Routes>
      
      

       </div>
    </BrowserRouter>
    </NoteState>
    
  );
}

export default App;
