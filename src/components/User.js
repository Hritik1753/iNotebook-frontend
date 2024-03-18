import React, { useContext, useEffect } from 'react'; // Importing useEffect
import UserContext from '../context/notes/noteContext';

function User() {
  const context = useContext(UserContext); // Correcting context import
  const { notes, getuser } = context;

  useEffect(() => {
    getuser(); // Fetch user details when component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to execute only once when component mounts

  // Conditional rendering to handle case when user is not yet fetched
  return (
    <div>
      {notes ? (
        <>
          <h1>{notes.name}</h1>
          <h1>{notes.email}</h1>
          {/* Render other user details here */}
        </>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}

export default User;

