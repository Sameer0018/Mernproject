import React,{useState} from 'react'
import{useNavigate} from"react-router-dom";
  
const Login = () => {
const navigate =    useNavigate();
    const[email,setEmail] = useState(' ');
    const[password,setPassword] = useState('');

    const loginUser =async(e)=>{
        e.preventDefault();

    const res = await fetch ('/signin', {
        method:"POST",
        headers:{
            "Content-Type" :"application/json"

        },
        body:JSON.stringify({
            email,
            password
        })
    });
const data =res.json();
if(res.status===400 || !data){
    window.alert("Invalid Credentials");

}else{
    window.alert("Login successfully");
    navigate("/");
}
    }
    
    return (

        <div>
            <h1>Hello login</h1>
 
        <form method="POST" id ="register-form">         
          <label>
            Your Email:
  </label>  
  <input type="email" id="email" name="email" 
 value={email}
 onChange={ (e) =>setEmail(e.target.value)}
 placeholder="Email" />  
  <br/>
  <br/>  
  <label >
  Password:
  </label>  
  <input type="Password" id="password" name="password"  
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="Your Password"/> <br/>   
  <br/> <br/>
    <input type="submit" name="signin" id ="signin" 
    value="Login"
    onClick={loginUser}
    />
</form>
        </div>
    )
}

export default Login
