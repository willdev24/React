import React from 'react'
import './Header.css'

function header({titulo}){
 return(
   <header className="header">
   <h1>{titulo}</h1>
   <h2>TESTESDO REACT</h2>
   </header>
    
    )
}

export default header