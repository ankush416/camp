import { Link,useNavigate } from "react-router-dom";
const Navbar=()=>{
    const auth=localStorage.getItem('user');
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate('/SignUp');}
    return(
        <div>
            { auth?
            <ul className="nav-ul">
     <li><Link to="/profile">profile</Link></li>
               <li><Link onClick={logout} to="/SignUp">Logout</Link></li>
            </ul>:
    <nav className="navbar navbar-expand-lg" id="navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html" id="logo">Blood Donation</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span><i className="fa-solid fa-bars"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="mynavbar">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#form">Donor Registeration</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#search">Find Donor</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallary">Gallary</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a></li>
          <li className="nav-item">
            <a className="nav-link" href="#login">Login</a></li>
          <li className="nav-item">
            <a className="nav-link" href="#signup">Signup</a>
          </li></ul></div>
    </div>
  </nav>}
</div>)} 
export default Navbar
