import React from "react";
import "./cards.css"

const cards = ({ children })=>{

    return (
        <div className="cards" >
            {children}
        </div>
    )
}

export default cards