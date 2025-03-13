import React from "react";
import  "./Content.css"

const Content = ({titulo, children})=>{

    return(
        <article className="CORPO">
           <h2>{titulo}</h2>
           {children}
        </article>
    )
}

export default  Content