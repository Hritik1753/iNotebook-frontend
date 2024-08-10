import React, {useContext, useState} from 'react'
import noteContext from "../../context/notes/noteContext"
import { useNavigate } from 'react-router-dom';

const Addnote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;
    let navigate = useNavigate();

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        navigate('/notes');
        props.showAlert("note Added successfully", "success");
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Prevent the default behavior of Enter key
            e.preventDefault();
            // Add a newline character to the description
            setNote((prevNote) => ({ ...prevNote, description: prevNote.description + '\n' }));
        }
    };


    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }

    const handleback = () => {
        navigate('/');
    }
    return (
        <>
            <button type="button" className="btn btn-primary mt-3" onClick={handleback} style={{backgroundColor:'green'}} >Back</button>
        <div className="container my-3" style={{backgroundColor:'#f7f9fc'}}>
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea style={{height:""}} rows={5} type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required  onKeyDown={handleKeyDown}  ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
            </div>
        </>
    )
}

export default Addnote
