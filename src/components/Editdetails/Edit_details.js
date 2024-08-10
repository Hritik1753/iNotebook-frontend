import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../../context/notes/noteContext"
import User from '../User';
// import AddNote from './Addnote';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Edit_details = (props) => {

    const navigate = useNavigate();
    const context = useContext(noteContext);
    const { detail, getuserdetail, editdetails } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getuserdetail()
        }
        else {
            navigate('/user');
        }
        
        // eslint-disable-next-line
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", ephoto: "", ePhone: "", eaddress: "",ecountry:"",elinks:""})

    const updateDetail = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, ephoto: currentNote.photo, ePhone: currentNote.Phone, eaddress: currentNote.address, ecountry: currentNote.country, elinks: currentNote.links });
        
    }

    const handleClick = (e)=>{ 
        editdetails(note.id, note.ephoto, note.ePhone, note.eaddress, note.ecountry, note.elinks)
        refClose.current.click();
        props.showAlert("updated successfully", "success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }


    return (
        <>
          
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

       
            <div className="row my-3" style={{ backgroundColor: "#f7f9fc", color: "black" }}>
                {/* <h2>You Notes</h2> */}
                {/* <Link className="btn btn-primary " to='/addnote' style={{backgroundColor:'green',width:'150px'}} >Add Note</Link>  */}
                <div className="container mx-2" > 
                {detail.length===0 && 'No notes to display'}
                </div>
                {detail.map((note) => {
                    return <User  updateDetail={updateDetail}  />
                })}
            </div>
            
        </>
    )
}

export default Edit_details