import React from "react";
import "./Card.css"

const card = ({imagem,itens,texto})=>{

return(
    <div className="card">
        <div className="foto">
         <img src={imagem}/>
         </div>
         <p> {itens}</p>
         <p >{texto}</p>

    </div>

)
}

export default card