import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
function Noteitem(props) {
  const context = useContext(noteContext);

  const { deleteNote } = context;
    const { note,updateNote } = props;
  return (
    <div className="col-md-3">
          {/* {note.tag} */}
                            {/* //style="width: 18rem;" */}
          <div className="card my-3" >
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
          
          < div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
            <i className="fa-solid fa-pen-nib mx-2" onClick={() => { updateNote(note) }}></i>
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
