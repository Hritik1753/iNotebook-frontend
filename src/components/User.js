import "./single.scss";
import React, { useContext, useEffect, useRef, useState } from 'react' // Importing useEffect
import UserContext from '../context/notes/noteContext';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function User(props) {
  const context = useContext(UserContext); // Correcting context import
  const { user, getuser, getuserdetail, detail,editdetails } = context;
  //  var http ;
  // const { updateDetail } = props;
  // const { detail, getuserdetail } = context;
  const navigate = useNavigate();
  const [details, setDetail] = useState(detail[0]);
  console.log("hellp");
 console.log(details);
  useEffect(() => {
    getuserdetail();
    // http = detail[0].links;
    // console.log("me kyu nhi aa rha");
    // console.log(detail);
  }, []);

  useEffect(() => {
    getuser(); // Fetch user details when component mounts
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to execute only once when component mounts


 const handleadddetail = () => {
   navigate('/adddetail');
  }


  const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", ephoto: "", ePhone: "", eaddress: "",ecountry:"",elinks:""})

    const updateDetail = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, ephoto: currentNote.photo, ePhone: currentNote.Phone, eaddress: currentNote.address, ecountry: currentNote.country, elinks: currentNote.links });
     
    }

    const handleClick = (e)=>{ 
      editdetails(note.id, note.ephoto, note.ePhone, note.eaddress, note.ecountry, note.elinks)
      console.log("change hua ki nhi");
       setDetail(note);
     
        refClose.current.click();
        props.showAlert("updated successfully", "success");
    }

    const onChange = (e)=>{
      setNote({ ...note, [e.target.name]: e.target.value })
      // console.log(note.ePhone);

      
    }
   
 

  // Conditional rendering to handle case when user is not yet fetched
  return (
    <div >
      {/* user apna mobile number address mobile no facebook link insta link add aur change kar sake ye functionality abhi aur banani he */}

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Aur kya hal chal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="Phone" className="form-label">Phone number</label>
                                    <input type="text" className="form-control" id="ePhone" name="ePhone" value={note.ePhone} aria-describedby="emailHelp" onChange={onChange} minLength={10} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text"  className="form-control" id="eaddress" name="eaddress" value={note.eaddress} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input type="text" className="form-control" id="ecountry" name="ecountry" value={note.ecountry} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="links" className="form-label">Links</label>
                                    <input type="text" className="form-control" id="elinks" name="elinks" value={note.elinks} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  onClick={handleClick} type="button" className="btn btn-primary">Update details</button>
                        </div>
                    </div>
                </div>
            </div>









      {user ? (
        <div className="single">

          <div className="singleContainer">
          <div className="top">
              <div className="left">
                {detail.length!==0 ?(<div className="editButton">
                  <button type="button" className="btn btn-primary mt-0 " onClick={() => {updateDetail(detail[0])}} > edit </button>
                </div>) : (<div className="editButton">
                  <button type="button" className="btn btn-primary " onClick={handleadddetail} > Add profile detail </button>
                </div>)}
                
                

            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706400000&semt=ais"
                alt=""
                className="itemImg"
              />
              <div className="details">
                    <h1 className="itemTitle">{user.name}</h1>
                    
                   
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{user.email}</span>
                    </div>
                    { detail.length!==0 ?(<>
                      <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">{detail[0].Phone }</span>
                      </div>
                    
                      <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">
                          {detail[0].address}
                        </span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Country:</span>
                        <span className="itemValue">{detail[0].country}</span>
                      </div>

                      <div className="detailItem">
                        <span className="itemKey">Instagram id:</span>
                        {/* { console.log(http)} */}
                        <Link className="itemValue" to={`https://www.instagram.com/${detail[0].links}/`} >{detail[0].links}</Link>
                      </div>
                    </>): ("")}

              </div>
            </div>
          </div>
          
        </div>
          
          </div>
          </div>
          
          // {/* Render other user details here */}
        
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default User;

