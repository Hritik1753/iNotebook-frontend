import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
// import AddNote from './Addnote';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Notes = (props) => {

    const navigate = useNavigate();
    const context = useContext(noteContext);
    const { user,notes, getNotes, editNote } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate('/login');
        }
        
        // eslint-disable-next-line
    }, [])

    // useEffect(() => {
    //     if (user) {
    //         getNotes()
    //     }
        
        
    //     // eslint-disable-next-line
    // }, [])


    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
        
    }

    const handleClick = (e)=>{ 
        editNote(note.id, note.etitle, note.edescription, note.etag)
        console.log(note);
        refClose.current.click();
        props.showAlert("updated successfully", "success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }


    return (
        <div className='' style={{width:"", backgroundColor:""}}>
            {/* <button type="button" className="btn btn-primary mt-3"  >Add Note</button> */}
            {/* <AddNote showAlert={props.showAlert} /> */}
            {/* //modal in bootstrap  */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Aur kya hal chal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea type="text" rows={5} className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                                </div>
 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

       
            <div className="row my-3" style={{ backgroundColor: "#f7f9fc", color: "black", width:"", marginLeft:"1px",marginRight:"2px",marginTop:"-1px" ,}}>
                <h2>You Notes</h2>
                <Link className="btn btn-primary " to='/addnote' style={{backgroundColor:'green',width:'150px'}} >Add Note</Link> 
                <div className="container mx-2" > 
                {notes.length===0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return (
                        <div className="car" style={{display:"flex"}}>
                            <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
                        </div>
                        
                    )
                })}
            </div>
            
        </div>
    )
}

export default Notes
