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
                                          <img className=" img-fluid" alt="Team Cards Flipper" src="http://prepbootstrap.com/Content/images/template/people/person5.jpg" /></p>
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
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
          </dd>
          
          <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, facere. Ab, enim dolorem placeat voluptatibus, omnis, quidem vero et expedita vel temporibus aut facere! Enim, excepturi. Repellat magnam nemo quis esse tenetur cupiditate sed ea provident perferendis aspernatur ipsum sunt itaque facilis officiis harum exercitationem reiciendis voluptas, qui earum, quibusdam nihil minima. Odit, suscipit porro facilis quibusdam rem laborum corporis natus laboriosam! Enim atque necessitatibus non maiores doloribus sequi iste facilis modi voluptates, quisquam voluptatem voluptas, tempora harum aliquid quas qui eligendi dicta. Nisi odio porro libero, ducimus neque pariatur placeat veniam, sed quod consequuntur optio delectus maiores ut eos, in enim minus! Reprehenderit, tempora. Eius tempore iste voluptate id veniam odio, earum non magnam nemo, sapiente et, maxime illum quo neque culpa minima cupiditate nostrum repudiandae reiciendis. Velit modi veniam vel nemo excepturi  </dd>     
</dl>
</div>

      </div>

  )
}

export default About
