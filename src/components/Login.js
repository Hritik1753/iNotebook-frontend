import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import "./login.css"


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    // let history = useHistory();
   const navigate = useNavigate();
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        console.log("hritik paswan\n");
        console.log(json.authtoken);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            // history.push("/");
             props.showAlert("Logged in successfully", "success");
            navigate('/');
           
        }
        else{
            props.showAlert("Invalid email or password", "danger");
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
        <div className='conatiner mt-3' style={obj}>
            {/* <h1>Login to continue to iNotebook</h1> */}
            <div className="about" style={{backgroundColor:"",height:"400px",marginTop:"150px",marginLeft:"100px",width:"600px"}}>
                <div className="memory" style={{margin:"100px",backgroundColor:"#f7f9fc"}}>
                    <h1>iNotebook</h1>
                    <h4> We Save Your memory here</h4>
                    {/* <h3>Login</h3> */}
                </div>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora consequuntur nobis atque ipsam non!</p> */}
             </div>

            <div className="login" style={{ background: "", width: "500px", height: "400px", marginTop: "150px" }}>
                
                <form onSubmit={handleSubmit} style={{ backgroundColor: "", marginTop: "60px", marginLeft: "20px", marginRight: "20px" }}>
                    <h2>Login to iNotebook</h2>
                <div className="mb-3">
                     {/* <label htmlFor="email" className="form-label">Email address</label>  */}
                    <input type="email" placeholder='Email' className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                     {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="password" className="form-label">Password</label> */}
                    <input type="password" placeholder='Password' className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary" style={{backgroundColor:""}}>Continue</button> 
            </form>     </div>
             
        </div>      
    )
}

export default Login