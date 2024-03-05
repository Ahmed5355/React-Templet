import React, { useEffect, useState } from "react";
import axios from 'axios'
import './style.css'
const About = () =>{

    const [state,setState] = useState([]);

    useEffect(()=> {
        axios.get('js/data.json').then( res => setState([...res.data.works]))
        
    },[]);
    const workDiv = state.map( ele => {
        return(
            <div className="box" key={ele.id} >
                <h1>x</h1>
                <h2>{ele.title}</h2>
                <p>{ele.body}</p>
            </div>
        )
    })
    return(
        <div className="work" id="work">
            <div className="container">
                <p className="title">My <span>Work</span></p>
                <div className="contnet">
                    {workDiv}
                </div>
                
            </div>
        </div>
    )
}
export default About;