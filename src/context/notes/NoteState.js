// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
    // const s1 = {
    //     "name": "Hritik paswan",
    //     "class": "5b"
    // }

    // const [state, setState] = useState(s1);
    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //             "name": "cherry",
    //             "class": "112"
    //         })
    //     }, 3000);
  // }
  
  const host = "http://localhost:5000";


    const notesInitial=[]
    

    const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const getNotes = async() => {
    //API call
    const response = await fetch(`${ host }/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZjUyOTEyNjU3YTJiMzNhMTkyNGNhIn0sImlhdCI6MTcxMDQyMjI5MH0.ACcVwXrfQt8yB2dd0SDI8O47PiVC445CNUKXEWdqB_E"
      }
      
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  }


  //AddNote
  const addNote = async(title,description,tag) => {
    // ToDO: api ccall
    //API call
    const response = await fetch(`${ host }/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZjUyOTEyNjU3YTJiMzNhMTkyNGNhIn0sImlhdCI6MTcxMDQyMjI5MH0.ACcVwXrfQt8yB2dd0SDI8O47PiVC445CNUKXEWdqB_E"
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = await response.json();
    console.log(json);

    console.log("Adding a new note");

   const note ={
      "_id": "65f20078151ed9266623256c",
      "user": "65ef52912657a2b33a1924ca",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-03-13T19:37:28.303Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }


  //Delete a Note
  
  const deleteNote = async (id) => {
  
    //API CALL
    const response = await fetch(`${ host }/api/notes/deletenote/${ id }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZjUyOTEyNjU3YTJiMzNhMTkyNGNhIn0sImlhdCI6MTcxMDQyMjI5MH0.ACcVwXrfQt8yB2dd0SDI8O47PiVC445CNUKXEWdqB_E"
        
      }
    });

    const json = response.json();
    console.log(json);

   


    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
}
  //Edit a Note

  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${ host }/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlZjUyOTEyNjU3YTJiMzNhMTkyNGNhIn0sImlhdCI6MTcxMDQyMjI5MH0.ACcVwXrfQt8yB2dd0SDI8O47PiVC445CNUKXEWdqB_E"
      },
      body: JSON.stringify({ title, description, tag })
    });
   // eslint-disable-next-line
    const json= await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }
  
    return (
        //ese send state:state , update:update in bracket {}
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;