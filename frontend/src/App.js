
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Form from "./components/Form";
import Search from "./components/Search";
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import Gallery from "./components/Gallery";
import Signup from './components/Signup';
import Footer from "./components/Footer";

function App() {
  return (
   <Router> 
    <Navbar/>
    <Header/>
    <About/>
    <Form/>
    <Search/>
    <Gallery/>
    <Login/>
    <Signup/>
    <Footer/>
    <Routes>
   
    <Route path="/about" element={<About/>}></Route>
    <Route path="/form" element={<Form/>}></Route>
    <Route path="/search" element={<Search/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route element={<PrivateComponent />}>
        
       
        <Route path="/logout" element={<h1>Logout Product listing component</h1>}></Route>
        <Route path="/profile" element={<h1> Profile Product listing component</h1>}></Route>
        </Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    
    
    </Routes>
    </Router>
  );
}

export default App;
