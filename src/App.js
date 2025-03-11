import React from "react";
import Header from "./Header";
import Content from "./content";

function App(){
    return(
        <> 
        <Header titulo="SISTEMA REACT 2025"/>
        <Content titulo="bem vindo">
            <p>
            Lorem Ipsum is simply dummy text of the printing and types
            etting industry. Lorem Ipsum has been the industry's st
            andard dummy text ever since the 1500s, when an unknown pri
            nter took a galley of type and scrambled it to make a type spe
            cimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            </p>
            
            <p>
            Lorem Ipsum is simply dummy text of the printing and types
            etting industry. Lorem Ipsum has been the industry's st
            andard dummy text ever since the 1500s, when an unknown pri
            nter took a galley of type and scrambled it to make a type spe
            cimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            </p>
        </Content>
        </>
    )
}

export default App