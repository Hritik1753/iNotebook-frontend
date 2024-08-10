import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from "../../context/notes/noteContext"
function Add_detail(props) {
    const context = useContext(noteContext);
    const { addUserdetails } = context;
    let navigate = useNavigate();

    const [detail, setDetail] = useState({photo: "", Phone: "", address: "",country:"", links:""})

    const handleClick = (e)=>{
        e.preventDefault();
        addUserdetails(detail.photo,detail.Phone,detail.address,detail.country,detail.links);
        // setDetail({ photo: "", Phone: "", address: "",country:"",links:"" })
        navigate('/user');
        props.showAlert("user details Added successfully", "success");
    }

    const onChange = (e)=>{
        setDetail({...detail, [e.target.name]: e.target.value})
    }

    const handleBack = () => {
     navigate('/user');
 }

    return (
        <>
            <button type="button" className="btn btn-primary mt-3" onClick={handleBack} style={{backgroundColor:'green'}} >Back</button>
        <div className="container my-3" style={{backgroundColor:'#f7f9fc'}}>
            <h2>Add details</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="Phone" name="Phone" aria-describedby="emailHelp" value={detail.Phone} onChange={onChange} minLength={10} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input style={{height:""}} rows={5} type="text" className="form-control" id="address" name="address" value={detail.address} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">Country</label>
                    <input type="text" className="form-control" id="country" name="country" value={detail.country} onChange={onChange} minLength={4} required />
                    </div>
                    
                    <div className="mb-3">
                    <label htmlFor="links" className="form-label">Instagram id</label>
                    <input type="text" className="form-control" id="links" name="links" value={detail.links} onChange={onChange} minLength={0} required />
                </div>
               
                <button  type="submit" className="btn btn-primary" onClick={handleClick}>Add Detail</button>
            </form>
            </div>
        </>
    )
}

export default Add_detail
