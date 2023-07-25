import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    
    const collectData=async()=>{
        let data=await fetch('http://localhost:5000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
            'Content-Type':'application/json'
            }
        })
      data=await data.json();
      console.log(data)
     if(data.email)
     {
       localStorage.setItem("user",JSON.stringify(data));
       navigate('/')
     }
     else
     {
        alert("please enter the correct detail ")
     }
    }
return(
    
  
    //      <section className="login" id="login">
    //       <div>
    //     <div className="register">
    //      <input type="email" placeholder="enter the email"  className="inputbox"  value={email}   onChange={(e)=>setEmail(e.target.value)} />
    //      <input type="password" placeholder="enter the password" className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} />
    //      <button onClick={collectData}  className="inputbox" type="button">Login</button>
    // </div>
    // </div>
    // </section>
    <section className="login" id="login">
    <div className="register">
      
      
    
      <div className="input-box">
        <header>LOGIN</header>
        <div className="input-field">
          <input type="text" className="input" id="email"    onChange={(e)=>setEmail(e.target.value)} />
          <label for="email">Email</label>
        </div>
        <div className="input-field">
          <input type="password" className="input" id="password"  onChange={(e)=>setEmail(e.target.value)} />
          <label for="password">password</label>
        </div>
        <div className="input-field">
         <input type="submit" className="submit" value="login" required />
      </div>
      <div className="signin">
        <span>forgot password?<a href="#signup">Signup</a></span>
      </div>
    </div>
    </div>
    
    
    </section>
 
  )
}

export default Login
