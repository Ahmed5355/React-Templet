import React from "react"; 
import './style.css'
import Home from "./../Home"
import About from "./../About"
import Portofolio from "./../Portofolio"
import Profile from "./../Profile"
import SocailMedia from "./../SocailMedia"
import Work from "./../Work"
import Footer from "./../Footer"

function Indix() { 
  return (
    <div className="index">
    <div className="up" onClick={()=>{
     window.scrollTo()
    }} >up</div>
    <Home/>
    <Work/>
    <Portofolio/>
    <Profile/>
    <About/>
    <SocailMedia/>
    <Footer/>
    </div>
  );
} 
export default Indix; 
