import React,{useEffect} from 'react'
// import { Link } from "react-router-dom";
// import About from "./About";
import {useLocation, useNavigate,Link } from 'react-router-dom';




function Navbar(props) {

  const navigate = useNavigate();
  let location = useLocation();

useEffect(() => {
  console.log(location.pathname);
}, [location]);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.showAlert("Logout successfully", "success");
    navigate('/login');
  }

  const Loginfirst = () => {
    alert("you have to login first if you not have account signup please");
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
        {!localStorage.getItem('token')?<Link className="navbar-brand" to="/" onClick={Loginfirst} >Home</Link>:(<Link className="navbar-brand" to="/">Home</Link>)}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item" style={{display:'flex'}}>
              {/* <a className="nav-link" href="/about">About</a> */}
              

              {localStorage.getItem('token') ? <li className="nav-item">
              <Link className={`nav-link ${ location.pathname === "/user" ? "active" : "" }`} to="/user">Profile</Link>
              </li> : ""}

               <Link className={`nav-link ${ location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
              
            </li>
            
            
        
      </ul>
          {!localStorage.getItem('token') ? <form className="d-flex">
            {/* // eslint-disable-next-line */}
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            {/* // eslint-disable-next-line */}
            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
          </form>: <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar
