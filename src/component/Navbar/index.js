import React from "react";
import './style.css'
import {Link} from 'react-router-dom'
const About = () =>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <h2>Eng-Ahmed</h2>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#Profile">Profile</a></li>
                    <li><a href="#about">About</a></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
                
                
        </div>
    )
}
export default About;