import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
  
  const [credentials, setCredentials] = useState({name: "",email: "", password: "",cpassword: ""}) 
  // let history = useHistory();
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = credentials;
    if (password === cpassword) {
      
    
      const response = await fetch("http://localhost:5000/api/auth/createuser", {

     
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const json = await response.json()
      console.log(json);
      // console.log("hritik paswan\n");
      // console.log(json.authtoken);
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        // history.push("/");
        navigate('/');
        props.showAlert("Account created successfully", "success");
      }
      else {
        props.showAlert("Invalid Credentials", "danger");
      }
      
    }
    else {
      props.showAlert("check your password", "danger");
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}


  return (
    <div className="container mt-3">
      <h1>Sign-up to Continue to iNotebook</h1>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="name">Your Name</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} placeholder=""/>
    
        </div>
        
        <div className="mb-3">
    <label for="email">Email address</label>
    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} placeholder=""/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        
  <div className="mb-3">
    <label for="password">Password</label>
    <input type="password" name="password" className="form-control" id="password" onChange={onChange} minLength={5} required placeholder=""/>
        </div>
        
        <div className="mb-3">
    <label for="cpassword">Confirm Password</label>
    <input type="password" name="cpassword" className="form-control" id="cpassword" onChange={onChange} minLength={5} required placeholder=""/>
        </div>
        
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
