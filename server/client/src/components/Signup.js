 import React, {useState} from 'react';
 
 import{useNavigate}from "react-router-dom";

 const Signup = () => {
const navigate = useNavigate();
const [user,setUser] = useState({
name:"", email:"", phone:"", work: "", password:"", cpassword:""

});

let name,value;

const handleInputs = (d) => {
    console.log(d);
    name = d.target.name;
    value = d.target.value;
    
    setUser({...user, [name]:value});
    
}

const PostData = async (e) => {
    e.preventDefault();

    const{name, email, phone, work, password, cpassword} =user; 


const res =  await fetch("/register",{
    method:"POST",
    headers:{
        "Content-Type" :"application/json"
    },
    body:JSON.stringify({
        
        name, email, phone, work, password, cpassword

    
    })
});
const data = await res.json();
if(data.status === 422 || !data){
    window.alert("Invalid registration");
    console.log("Invalid registration");
}else{
    window.alert(" Registration Successful ");
    console.log("Registration Successful");
    navigate("/login");
}
}


     return (
         <>

           <form method="POST" id ="register-form">
  <label> Your Name: </label>         
  <input type="text" name="name" id ="name" 
  value={user.name}
  onChange={handleInputs}
  placeholder ="Your Name"
  />
<br/> <br/>  
  <label>
  Your Email:
  </label>  
  <input type="email" id="email" name="email"
  value={user.email}
  onChange={handleInputs}
  
  placeholder ="Your Email"/> 
  <br/>
  <br/>  
    
  <label>   
  Your Phone   
  </label>  <input type="number" name="phone" size="10"
  value={user.phone}
  onChange={handleInputs}
  
  placeholder ="Your work"/>
   <br/> <br/>  
   
   <label>
  Your Work:
  </label>  
  <input type="work" id="work" name="work"
  value={user.work}
  onChange={handleInputs}
  
  placeholder ="Your work"/> 
  <br/>
  <br/>  
    

<label>
  Password:  
  </label>
  <input type="Password" id="pass" name="password"
  value={user.password}
  onChange={handleInputs}
  
  placeholder ="Your Password"/> <br/>   
  <br/> <br/>
    <label>
  Confirm Your password:  
  </label>
  <input type="Password" id="cpassword" name="cpassword"
  value={user.cpassword}
  onChange={handleInputs}
  placeholder ="Your confim password"/> 
  
  <br/> <br/>  
   <input type="submit" name ="signup" id="signup"  value="register"
   onClick={PostData}
  />  
  </form>
 
 
 

         </>
     )
 }
 
 export default Signup
 