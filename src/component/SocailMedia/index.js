import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
const About = () =>{


    const [state,setState] = useState([])
    useEffect(() => {
        axios.get('js/data.json').then( res => setState(res.data.socail))
    },[])

    const mySocail  = state.map(ele => {
        return(
            <div className="socail-box" key={ele.id}>
            <h1>F</h1>
            <div>
                <h3>{ele.title}</h3>
                <p>{ele.body}</p>
            </div>
        </div>
        )
    })
    return(
        <div className="socail">
            {mySocail}
        </div>
    )
}
export default About;