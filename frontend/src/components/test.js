import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
const AddProduct=()=>{

 const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[category,setCategory]=useState("");
const[company,setCompany]=useState("");
const[file,setFile]=useState("");
const navigate=useNavigate();
const addproducts=async()=>{
    const userId=JSON.parse(localStorage.getItem('user'))._id;
      let formdata=new FormData();
      formdata.append('file',file)
console.log(formdata)
    let result=await fetch('http://localhost:5000/add-product',{
        method:'post',
        body:JSON.stringify({name,price,category,company,formdata,userId}),
        headers:{
            'Content-Type':'application/json'
            }
    })
    result=await result.json();
    navigate('/')
}
 return(
    <div>
        <h1>Add Product</h1>
        <div className="register">
            <form encType="multipart/forma-data" method="post">
        <input type="text" placeholder="enter the name" className="inputbox"  value={name}  onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="enter the price"  className="inputbox"  value={price}   onChange={(e)=>setPrice(e.target.value)} />
        <input type="text" placeholder="enter the category"  className="inputbox"  value={category}   onChange={(e)=>setCategory(e.target.value)} />
        <input type="text" placeholder="enter the category"  className="inputbox"  value={company}   onChange={(e)=>setCompany(e.target.value)} />
        <input type="file" className="inputbox" onChange={(e)=>setFile(e.target.files[0])} />
          <button type="button" onClick={addproducts} className="inputbox">SignUp</button>
          </form>
    </div>
    </div>
 )
}
export default AddProduct;