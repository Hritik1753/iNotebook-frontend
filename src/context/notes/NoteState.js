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


  const notesInitial = [];
  const userInitial = [];
  const detailsInitial = [];
    

  const [notes, setNotes] = useState(notesInitial);
  const [user, setUser] = useState(userInitial);
  const [detail, setDetail] = useState(detailsInitial);

  //Add a Note
  const getNotes = async() => {
    //API call
    const response = await fetch(`${ host }/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
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
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();
   
    setNotes(notes.concat(note));
  }


  //Delete a Note
  
  const deleteNote = async (id) => {
  
    //API CALL
    const response = await fetch(`${ host }/api/notes/deletenote/${ id }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
        
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
        "auth-token": localStorage.getItem('token')
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
//get user detail
  const getuser = async() => {
    //API call
    const response = await fetch(`${ host }/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
      
    });

    const json = await response.json();
    console.log(json);
    // console.log("tera baap");
    setUser(json);
    console.log(user);
  }

  const getuserdetail = async () => {
    //API call
    const response = await fetch(`${ host }/api/details/fetchuserdetail`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
      
    });

    const json = await response.json();
    console.log(json);
    console.log("ye kya ho rha he bhagwan");
    // console.log(detail);
    setDetail(json);
    console.log(detail);
  }


  const addUserdetails = async(photo,Phone,address,country,links) => {
    // ToDO: api ccall
    //API call
    const response = await fetch(`${ host }/api/details/adddetail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ photo,Phone,address,country,links })
    });

    const note = await response.json();
   
    setDetail(detail.concat(note));
  }

  
  const editdetails = async (id, photo,Phone,address,country,links) => {
    //API call
    const response = await fetch(`${ host }/api/details/updatedetail/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ photo,Phone,address,country,links })
    });
   // eslint-disable-next-line
    const json= await response.json();

    let newDetails = JSON.parse(JSON.stringify(detail))
    // Logic to edit in client
    for (let index = 0; index < newDetails.length; index++) {
      const element = newDetails[index];
      if (element._id === id) {
        newDetails[index].photo = photo;
        newDetails[index].Phone = Phone;
        newDetails[index].address = address; 
        newDetails[index].country = country; 
        newDetails[index].links = links; 
        break; 
      }
    }  
    setDetail(newDetails);
  }
  


  
    return (
        //ese send state:state , update:update in bracket {}
        <NoteContext.Provider value={{user,notes,detail ,addNote,deleteNote,editNote,getNotes,getuser,getuserdetail,addUserdetails,editdetails }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;