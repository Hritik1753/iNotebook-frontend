// import React, { useContext, useEffect } from 'react'
// import noteContext from '../context/notes/noteContext';
import React from "react"
import {Link} from "react-router-dom"
function About() {

  // const a = useContext(noteContext);
  
  // useEffect(() => {
  //   a.update();
    // eslint-disable-next-line
// },[])

  return (
    
    <div className="container mt-3" style={{display:"flex"}}>
      {/* this is about {a.state.name} and he is in class {a.state.class} */}
      <section id="about" className="aboutus"  style={{backgroundColor:""}}>
{/* <!-- bootstrap --> */}
<div className="container">

  {/* <div className="page-header">
            <h1 style={{color: "black"}}>About us</h1>
  </div> */}
  
  {/* <!-- Team Cards Flipper - START --> */}
  
  <section id="team" className="pb-5">
      <div className="container">
          {/* <h5 className="section-title h1">OUR TEAM</h5> */}
          <div className="row" >
              <div className="col-xs-12 col-sm-6 col-md-4" style={{width:"500px"}} >
                  <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                      <div className="mainflip">
                          <div className="frontside">
                              <div className="card">
                                  <div className="card-body text-center">
                                      <p>
                                          <img className=" img-fluid" alt="Team Cards Flipper" src="https://media.licdn.com/dms/image/D4D03AQEgjHH3TsvWhQ/profile-displayphoto-shrink_800_800/0/1699725247520?e=1725494400&v=beta&t=EmLyOLyaM8YkYNQgAeWboyFtRHjHD7Xs7A8FUAly9KY" /></p>
                                      <h4 className="card-title">Hritik Paswan</h4>
                                      <p className="card-text">Hii i am hritik paswan this website is made by me</p>
                                      <Link to="/" className="btn btn-primary btn-sm">More</Link>
                                  </div>
                              </div>
                          </div>
                          <div className="backside">
                              <div className="card">
                                  <div className="card-body text-center mt-4">
                                      <h4 className="card-title">Web Developer</h4>
                                      <p className="card-text">I am a full stack mern developer, i am a compitative code i am a freelancer and i am a lerner  </p>
                                      <ul className="list-inline">
                                          <li className="list-inline-item">
                                              <Link className="social-icon text-xs-center" target="_blank" to="/">
                                                  <i className="fa fa-facebook"></i>
                                              </Link>
                                          </li>
                                          <li className="list-inline-item">
                                              <Link className="social-icon text-xs-center" target="_blank" to="/">
                                                  <i className="fa fa-twitter"></i>
                                              </Link>
                                          </li>
                                          <li className="list-inline-item">
                                              <Link className="social-icon text-xs-center" target="_blank" to="/">
                                                  <i className="fa fa-skype"></i>
                                              </Link>
                                          </li>
                                          <li className="list-inline-item">
                                              <Link className="social-icon text-xs-center" target="_blank" to="/">
                                                  <i className="fa fa-google"></i>
                                              </Link>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section> 
  </div>
        </section>
        

        <div className="container"  style={{backgroundColor:""}}>
        <dl class="row">
  <dt class="col-sm-3">Name</dt>
  <dd class="col-sm-9">Hritik Paswan.</dd>

  <dt class="col-sm-3">Education</dt>
  <dd class="col-sm-9">
    <p>Bacholar of Technology in Computer Science and Engineering graduagte in 2025</p>
    <p>From Motilal Nehru National Institute of Technology Allahabad</p>
  </dd>

  <dt class="col-sm-3">Previous institution </dt>
 <dd class="col-sm-9">Jawahar Navodaya Vidyalaya Prayagraj</dd>
 {/* <dd class="col-sm-9">Jawahar Navodaya Vidyalaya Barabanki</dd> */}

  <dt class="col-sm-3 text-truncate"></dt>
  <dd class="col-sm-9">Jawahar Navodaya Vidyalaya Barabanki.</dd>

  <dt class="col-sm-3">Contact</dt>
  <dd class="col-sm-9">
    <dl class="row">
      {/* <dt class="col-sm-4"></dt> */}
      <dd class="col-sm-8">9335502064</dd>
    </dl>
          </dd>
          
          <dt class="col-sm-3 text-truncate">About Myself</dt>
  <dd class="col-sm-9">I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.  </dd>     
</dl>
</div>

      </div>

  )
}

export default About
