import React from "react";
import "./Button.css"


const Button = ({title, styling, icon, layout, }) => {
  

   
    return(
    <button className="btn" style={styling}>
{title}
<span>{icon}</span>
    </button>
        
    )
    
}


export default Button
