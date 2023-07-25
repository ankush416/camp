import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Signup=()=>{
const[name,setName]=useState("");
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
    console.log(name,email,password)
    let result=await fetch(`http://localhost:5000/register`,{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    })
    result=await result.json();
  console.log(result)
  // this is use one key
  localStorage.setItem("user",JSON.stringify(result))
  if(result)
  {
    navigate('/')
  }
}
return(
//   <section className="signup" id="signup">
//   <div className="register">
//   <input type="text" placeholder="enter the name" className="inputbox"  value={name}  onChange={(e)=>setName(e.target.value)}/>
//   <input type="email" placeholder="enter the email"  className="inputbox"  value={email}   onChange={(e)=>setEmail(e.target.value)} />
//   <input type="password" placeholder="enter the password" className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)} />
//   <button onClick={collectData}  className="inputbox" type="button">SignUp</button>
// </div>
// </section>
<section className="signup" id="signup">
    <div className="register">
     
      <div className="input-box">
        <header>SIGNUP</header>
        <div className="input-field">
        <input type="text"  className="input"   onChange={(e)=>setName(e.target.value)} required />
          <label for="email">Name</label>
        </div>
        <div className="input-field">
          <input type="text" className="input" id="email"  onChange={(e)=>setEmail(e.target.value)} required />
          <label for="email">Email</label>
        </div>
        <div className="input-field">
          <input type="password" className="input" id="password"  onChange={(e)=>setPassword(e.target.value)} required />
          <label for="password">password</label>
        </div>
        <div className="input-field">
          
          <button onClick={collectData}  className="submit" type="button">SignUp</button>
      </div>
      <div className="signin">
        <span>already have an account?<a href="#login">Login</a></span>
      </div>
    </div>
    </div>
  
    
    </section>
    // <section className="login" id="login">
    // <div className="register">
    //   <div className="container main">
    //   <div className="row">
    //   <div className="col-md-6 side-image">
    //    </div>
    //   </div>
      
    // <div className="col-md-6 right">
    //   <div className="input-box">
    //     <header>LOGIN</header>
    //     <div className="input-field">
    //       <input type="text" className="input" id="email" required autocomplete="off"/>
    //       <label for="email">Email</label>
    //     </div>
    //     <div className="input-field">
    //       <input type="password" className="input" id="password" required />
    //       <label for="password">password</label>
    //     </div>
    //     <div className="input-field">
    //       <input type="submit" className="submit" value="login" required />
    //   </div>
    //   <div className="signin">
    //     <span>already have an account?<a href="#">Signup</a></span>
    //   </div>
    // </div>
    // </div>
    // </div>
    // </div>
    // </section>
  )
}

export default Signup
