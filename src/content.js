import React from "react";

const Content = ({titulo, children})=>{

    return(
        <article>
           <h2>{titulo}</h2>
           {children}
        </article>
    )
}

export default  Content