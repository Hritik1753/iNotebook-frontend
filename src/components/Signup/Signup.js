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
        // localStorage.setItem('token', json.authtoken);
        // history.push("/");
        navigate('/verify/:email');
        props.showAlert("Account created successfully please verify your email", "success");
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

const obj = {
  backgroundColor: "#f7f9fc",
  display: "flex",
  height:"700px"
}

  return (
    <div className="container mt-3" style={obj}>
      {/* <h1>Sign-up to Continue to iNotebook</h1> */}

      <div className="about" style={{backgroundColor:"",height:"400px",marginTop:"150px",marginLeft:"100px",width:"600px"}}>
                <div className="memory" style={{margin:"100px",backgroundColor:"#f7f9fc"}}>
                    <h1>iNotebook</h1>
                    <h4> We Save Your memory here</h4>
                </div>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora consequuntur nobis atque ipsam non!</p> */}
      </div>
      
             <div className="login" style={{background:"",width:"500px",height:"400px",marginTop:"150px"}}>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "", marginTop: "50px", marginLeft: "20px", marginRight: "20px" }}>
          <h2>Sign-up to iNotebook</h2>
  <div className="mb-3">
    {/* <label for="name">Your Name</label> */}
    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" onChange={onChange} placeholder="Your name"/>
    
        </div>
        
        <div className="mb-3">
    {/* <label for="email">Email address</label> */}
    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={onChange} placeholder="Email"/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        
  <div className="mb-3">
    {/* <label for="password">Password</label> */}
    <input type="password" name="password" className="form-control" id="password" onChange={onChange} minLength={5} required placeholder="Password"/>
        </div>
        
        <div className="mb-3">
    {/* <label for="cpassword">Confirm Password</label> */}
    <input type="password" name="cpassword" className="form-control" id="cpassword" onChange={onChange} minLength={5} required placeholder="Confirm Password"/>
        </div>
        
  
  <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Signup
