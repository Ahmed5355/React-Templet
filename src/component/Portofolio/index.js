import React, { useEffect, useState } from "react";
import axios from "axios";
import './style.css'
const About = () =>{
    const [state,setState] = useState([])

    useEffect(()=> {
        axios.get('js/data.json').then( res => setState([...res.data.portfolio]))
    },[]);

    const allImage = state.map((ele) => {
        return(
            <div className="box-img" key={ele.id}>
                <img src={ele.image}/>
                <div className="overlay"><span>Show More</span></div>
            </div>
        )
    })
    return(
        <div className="portfolio" id="portfolio">
            <p className="title">My <span>Portfolio</span></p>
                <ul>
                    <li><a className="active">All</a></li>
                    <li><a>HTML</a></li>
                    <li><a>Photoshop</a></li>
                    <li><a>Wordprss</a></li>
                    <li><a>Mobile</a></li>
                </ul>
                <div className="img-div">{allImage}</div>
            </div>
    )
}
export default About;