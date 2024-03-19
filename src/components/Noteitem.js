import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
  const context = useContext(noteContext);

  const { deleteNote } = context;
    const { note,updateNote } = props;
  return (
    <div className="col-md-3" style={{backgroundColor:"#f7f9fc",width:"200vh"}}>
          {/* {note.tag} */}
                            {/* //style="width: 18rem;" */}
          <div className="card my-3" style={{}} >
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body" style={{backgroundColor:"",width:'174.2vh'}}>
          
          < div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <button type='button' className="btn btn-primary mx-2" style={{backgroundColor:"red"}} onClick={() => { deleteNote(note._id); props.showAlert("deleted successfully", "success"); }}>delete</button>
            <button type='button' className="btn btn-primary mx-2" onClick={() => { updateNote(note) }}>edit</button>
          </div>

          <p className="card-text">{note.description}</p>
          <h6 className='card-title'>{note.tag}</h6>
         
 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
{/* button hm font awosome se layenge */}
                  
  </div>
</div>
          
    </div>
  )
}

export default Noteitem
