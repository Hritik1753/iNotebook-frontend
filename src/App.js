import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <NoteState>
      <BrowserRouter>
     
        <Navbar />
        <Alert message={"hello me aagya swagat nhi karoge hamara"} />
           <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            </Route>
            <Route path="/about">
            <Route index element={<About />} />
              
            </Route>

            <Route path="/login">
            <Route index element={<Login />} />
            </Route>

            <Route path="/signup">
            <Route index element={<Signup />} />
            </Route>
          
        </Routes>
      
      

       </div>
    </BrowserRouter>
    </NoteState>
    
  );
}

export default App;
