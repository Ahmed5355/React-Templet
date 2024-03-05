import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
const About = () =>{

    const [state ,setState] =useState([])
    useEffect(()=>{
        axios.get('/js/data.json').then(res => { setState(res.data.skills)})
    },[])

    const mySkills = state.map(skill => {
        return(
            <div className="skill"key={skill.id}>
                <p data-set={skill.progress}>{skill.name}</p>
                <div style={{"width":`${skill.progress}`}}></div>
            </div>
        )
    })
    return(
        <div className="Profile" id="Profile">
            <div className="container" style={{"alignItems" : "start"}}>
                <div className="info"style={{"margin" : 0}} >
                    <p>My <span>Profile</span></p>
                        <div className="info-text">
                            <h4>Name</h4>
                            <p className="p">Ahmed Ibrahem</p>
                        </div>
                        <div className="info-text">
                            <h4>Barthday</h4>
                            <p className="p">13/2/1999</p>
                            </div>
                            <div className="info-text" >
                            <h4>Address</h4>
                            <p className="p">Mansoura</p>
                            </div>
                            <div className="info-text">
                            <h4>Phone</h4>
                            <p className="p">01210929016</p>
                            </div>
                            <div className="info-text">
                            <h4>Email</h4>
                            <p className="p">ahmed@imbrahem.com</p>
                            </div>
                            <div className="info-text" >
                            <h4>Website</h4>
                            <p className="p" style={{"color" : "#eb5424"}}>www.google.com</p>
                            </div>
                </div>
                <div className="skills">
                <p id="skill-head"><span>Some </span>Skills</p>
                <p className="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias nam velit amet, deserunt harum eveniet!</p>
                    {mySkills}
                </div>
            </div>
        
        </div> 
    )
}
export default About;