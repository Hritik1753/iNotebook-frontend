import "./single.scss";
import React, { useContext, useEffect, useRef, useState } from 'react';
import UserContext from '../context/notes/noteContext';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function User(props) {
  const context = useContext(UserContext);
  const { user, getuser, getuserdetail, detail, editdetails } = context;
  const navigate = useNavigate();
  const [details, setDetail] = useState(detail[0]);
  
  useEffect(() => {
    getuserdetail();
  }, []);

  // useEffect(() => {
  //   getuser();
  // }, []); 

  const handleadddetail = () => {
    navigate('/adddetail');
  }

  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState("https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=");
  const imageref = useRef(null);

  useEffect(() => {
    const storedImagePath = localStorage.getItem('uploadedImagePath');
    if (storedImagePath) {
      setImagePath(storedImagePath);
    }
  }, [image]);

  const submitimage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "image_upload"); // Your upload preset
    data.append("cloud_name", "dd8bphulv"); // Your Cloudinary cloud name

    fetch("https://api.cloudinary.com/v1_1/dd8bphulv/image/upload", {
      method: "post",
      body: data
    })
    .then((res) => res.json())
    .then((data) => {
      setImagePath(data.url);
      localStorage.setItem('uploadedImagePath', data.url);
      console.log(data);
//update image detail
//  fetch("http/localhost:5000/api/details/adddetail", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       "auth-token": localStorage.getItem('token')
//     },
//     body: JSON.stringify({ photo: data.url, phone: note.ePhone, address: note.eaddress, country: note.ecountry, links: note.elinks })
//   });

//   setDetail({ ...note, photo: data.url });
//   refClose.current.click();
//   props.showAlert("Updated successfully", "success");

    }).catch((err) => {
      console.log(err);
    });

   //image ko database me bhejne ki koshish
   

  }

  const handleimagechange = async (event) => {
    const file = event.target.files[0];
    setImage(file);

    //database me bhejne ki koshish

  
  }

  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id: "", ephoto: "", ePhone: "", eaddress: "", ecountry: "", elinks: "" });

  const updateDetail = (currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, ephoto: currentNote.photo, ePhone: currentNote.Phone, eaddress: currentNote.address, ecountry: currentNote.country, elinks: currentNote.links });
  }

  const handleClick = (e) => { 
    editdetails(note.id, imagePath, note.ePhone, note.eaddress, note.ecountry, note.elinks);
    setDetail(note);
    refClose.current.click();
    props.showAlert("updated successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
 
  return (
    <div>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Aur kya hal chal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label">Phone number</label>
                  <input type="text" className="form-control" id="ePhone" name="ePhone" value={note.ePhone} onChange={onChange} minLength={10} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input type="text" className="form-control" id="eaddress" name="eaddress" value={note.eaddress} onChange={onChange} minLength={5} required/>
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
              <button onClick={handleClick} type="button" className="btn btn-primary">Update details</button>
            </div>
          </div>
        </div>
      </div>

      {user ? (
        <div className="single">
          <div className="singleContainer">
            <div className="top">
              <div className="left">
                {detail.length !== 0 ? (
                  <div className="editButton">
                    <button type="button" className="btn btn-primary mt-0" onClick={() => { updateDetail(detail[0]) }}> edit </button>
                  </div>
                ) : (
                  <div className="editButton">
                    <button type="button" className="btn btn-primary" onClick={handleadddetail}> Add profile detail </button>
                  </div>
                )}

                <h1 className="title">Information</h1>
                <div className="item">
                  <div className="imageup" style={{ width: "700px" }}>
                    {/* <input type="file" ref={imageref} style={{ display: "" }} onChange={handleimagechange} />
                     <button onClick={submitimage}>Upload</button> */}
                    {imagePath ? <img src={imagePath} alt="Profile" className="itemImg" style={{ width: "200px", height: "200px", marginLeft: "300px" }} />
                      :<img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="Profile" className="itemImg" style={{ width: "200px", height: "200px", marginLeft: "300px" }} /> }
                  
                    <div className="imageset" style={{ display: "flex", marginLeft:"200px" }}>

                       <input type="file" ref={imageref} style={{ display: "" }} onChange={handleimagechange} />
                    <button onClick={submitimage}>Upload</button>

                    </div>
                 
                    
                  </div>
                  
                  <div className="details">
                    <h1 className="itemTitle">{user.name}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{user.email}</span>
                    </div>
                    {detail.length !== 0 && (
                      <>
                        <div className="detailItem">
                          <span className="itemKey">Phone:</span>
                          <span className="itemValue">{detail[0].Phone}</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Address:</span>
                          <span className="itemValue">{detail[0].address}</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Country:</span>
                          <span className="itemValue">{detail[0].country}</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Instagram id:</span>
                          <Link className="itemValue" to={`https://www.instagram.com/${detail[0].links}/`}>{detail[0].links}</Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default User;







// import "./single.scss";
// import React, { useContext, useEffect, useRef, useState } from 'react' // Importing useEffect
// import UserContext from '../context/notes/noteContext';
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";


// function User(props) {
//   const context = useContext(UserContext); // Correcting context import
//   const { user, getuser, getuserdetail, detail,editdetails } = context;
//   //  var http ;
//   // const { updateDetail } = props;
//   // const { detail, getuserdetail } = context;
//   const navigate = useNavigate();
//   const [details, setDetail] = useState(detail[0]);
//   // console.log("hellp");
//  console.log(details);
//   useEffect(() => {
//     getuserdetail();
//     // http = detail[0].links;
//     // console.log("me kyu nhi aa rha");
//     // console.log(detail);
//   }, []);

//   useEffect(() => {
//     getuser(); // Fetch user details when component mounts
    
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // Empty dependency array to execute only once when component mounts


//  const handleadddetail = () => {
//    navigate('/adddetail');
//   }


//   // for information section image upload
//   const [image, setImage] = useState("");

//   const [imagePath, setImagePath] = useState(null);

//   const imageref = useRef(null);

//   useEffect(() => {
//     const storedImagePath = localStorage.getItem('uploadedImagePath');
//     if (storedImagePath) {
//       setImagePath(storedImagePath);
//     }
//   }, []);

//   // const handleimageupload = () => {
//   //   imageref.current.click();
//   // }

//   const submitimage = () => {
//     imageref.current.click();
//     const data = new FormData()
//     data.append("file", image)
//     data.append("upload_preset", "image_upload")
//     data.append("cloud_name", "dd8bphulv")
    
//     fetch("https://api.cloudinary.com/v1_1/dd8bphulv/image/upload", {
//       method: "post",
//       body:data
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       }).catch((err) => {
//       console.log(err)
//     })
//   }

//   const handleimagechange = async (event) => {
//     const file = event.target.files[0];
//     setImage(file);
//     console.log(file);
//   }
  

//   const ref = useRef(null)
//     const refClose = useRef(null)
//     const [note, setNote] = useState({id: "", ephoto: "", ePhone: "", eaddress: "",ecountry:"",elinks:""})

//     const updateDetail = (currentNote) => {
//         ref.current.click();
//         setNote({ id: currentNote._id, ephoto: currentNote.photo, ePhone: currentNote.Phone, eaddress: currentNote.address, ecountry: currentNote.country, elinks: currentNote.links });
     
//     }

//     const handleClick = (e)=>{ 
//       editdetails(note.id, note.ephoto, note.ePhone, note.eaddress, note.ecountry, note.elinks)
//       console.log("change hua ki nhi");
//        setDetail(note);
     
//         refClose.current.click();
//         props.showAlert("updated successfully", "success");
//     }

//     const onChange = (e)=>{
//       setNote({ ...note, [e.target.name]: e.target.value });
      
//     }
   
 

//   // Conditional rendering to handle case when user is not yet fetched
//   return (
//     <div >
//       {/* user apna mobile number address mobile no facebook link insta link add aur change kar sake ye functionality abhi aur banani he */}

//       <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                 Aur kya hal chal
//             </button>
//             <div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" >
//                     <div className="modal-content" >
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Edit Details</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <form className="my-3">
//                                 <div className="mb-3">
//                                     <label htmlFor="Phone" className="form-label">Phone number</label>
//                                     <input type="text" className="form-control" id="ePhone" name="ePhone" value={note.ePhone} aria-describedby="emailHelp" onChange={onChange} minLength={10} required/>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="address" className="form-label">Address</label>
//                                     <input type="text"  className="form-control" id="eaddress" name="eaddress" value={note.eaddress} onChange={onChange} minLength={5} required/>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="country" className="form-label">Country</label>
//                                     <input type="text" className="form-control" id="ecountry" name="ecountry" value={note.ecountry} onChange={onChange} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="links" className="form-label">Links</label>
//                                     <input type="text" className="form-control" id="elinks" name="elinks" value={note.elinks} onChange={onChange} />
//                                 </div>
 
//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button  onClick={handleClick} type="button" className="btn btn-primary">Update details</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>









//       {user ? (
//         <div className="single">

//           <div className="singleContainer">
//           <div className="top">
//               <div className="left">
//                 {detail.length!==0 ?(<div className="editButton">
//                   <button type="button" className="btn btn-primary mt-0 " onClick={() => {updateDetail(detail[0])}} > edit </button>
//                 </div>) : (<div className="editButton">
//                   <button type="button" className="btn btn-primary " onClick={handleadddetail} > Add profile detail </button>
//                 </div>)}
                
                

//             <h1 className="title">Information</h1>
//                 <div className="item">

//                   <div className="imageup" style={{width:"700px"}}>
//                     <input type="file" ref={imageref} style={{ display: " " }} id="ephoto" name="ephoto" value={note.ephoto} onChange={handleimagechange} />
//                     <button onClick={submitimage}>upload</button>
//         {/* <img
//           src={image ? URL.createObjectURL(image) : imagePath}
//           alt="hello"
//           className="itemImg"
//           style={{ width: "200px", height: "200px", marginLeft: "300px" }}
//         /> */}
//       </div>
                    
                  
              
//               <div className="details">
//                     <h1 className="itemTitle">{user.name}</h1>
                    
                   
//                     <div className="detailItem">
//                       <span className="itemKey">Email:</span>
//                       <span className="itemValue">{user.email}</span>
//                     </div>
//                     { detail.length!==0 ?(<>
//                       <div className="detailItem">
//                         <span className="itemKey">Phone:</span>
//                         <span className="itemValue">{detail[0].Phone }</span>
//                       </div>
                    
//                       <div className="detailItem">
//                         <span className="itemKey">Address:</span>
//                         <span className="itemValue">
//                           {detail[0].address}
//                         </span>
//                       </div>
//                       <div className="detailItem">
//                         <span className="itemKey">Country:</span>
//                         <span className="itemValue">{detail[0].country}</span>
//                       </div>

//                       <div className="detailItem">
//                         <span className="itemKey">Instagram id:</span>
//                         {/* { console.log(http)} */}
//                         <Link className="itemValue" to={`https://www.instagram.com/${detail[0].links}/`} >{detail[0].links}</Link>
//                       </div>
//                     </>): ("")}

//               </div>
//             </div>
//           </div>
          
//         </div>
          
//           </div>
//           </div>
          
//           // {/* Render other user details here */}
        
//       ) : (
//         <p>Loading user...</p>
//       )}
//     </div>
//   );
// }

// export default User;

