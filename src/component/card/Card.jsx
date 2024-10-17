import React from "react";

import './Card.css';

 function Card(prop){
    return(
        <div className="card">
            <img src={prop.img} alt="" />
            <div className="info">
            <h1>{prop.name}</h1>
            <h2>{prop.role}</h2>
            <p>{prop.desc}</p>
            </div>
            
        </div>
    )
}

export default Card


