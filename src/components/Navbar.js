import React,{useEffect} from 'react'
// import { Link } from "react-router-dom";
// import About from "./About";
import { useLocation } from 'react-router-dom';




function Navbar() {
  let location = useLocation();

useEffect(() => {
  console.log(location.pathname);
}, [location]);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              <a className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
              {/* <a className="nav-link" href="/about">About</a> */}
              <a className={`nav-link ${location.pathname==="/about"?"active":""}`} href="/about">About</a>
        </li>
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
          <form className="d-flex">
          {/* // eslint-disable-next-line */}
            <a className="btn btn-primary mx-1" href="/login" role="button">Login</a>
            {/* // eslint-disable-next-line */}
            <a className="btn btn-primary mx-1" href="/signup" role="button">Signup</a>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
