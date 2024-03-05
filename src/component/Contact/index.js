import React from "react";
import './style.css'
import Footer from './../Footer'
const About = () =>{
    return(
        <div className="contact">
            <p className="pp">Drop <span>Me A Line</span></p>
        <form className="form">
            <input type="text" placeholder="Your Name" />
            <input type="password" placeholder="Your Password"/>
            <input type="text" placeholder="Your Subject"/>
            <textarea placeholder="your Massage"></textarea>
            <button>Send Massage</button>
        </form>
        <Footer />
        </div>
    )
}
export default About;