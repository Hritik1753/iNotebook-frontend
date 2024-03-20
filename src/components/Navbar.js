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
        {/* <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              {/* <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link> */}
        {/* </li> */} 
        <li className="nav-item">
              {/* <a className="nav-link" href="/about">About</a> */}
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
            </li>
            
            {localStorage.getItem('token')?<li className="nav-item">
              <Link className={`nav-link ${ location.pathname === "/user" ? "active" : "" }`} to="/user">user Profile</Link>
            </li>:""}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
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
