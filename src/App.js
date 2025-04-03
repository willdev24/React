import React from "react";
import Header from "./Header";
import Content from "./content";
import Card from "./Card";
import img1 from "./test.avif"

//IMPORT REACT
//funçao que retorna js
//sempre tem que ter um elementopai
//react fragment
//exporta funçao
//para usar o componente
//usar como tag
//




function App(){
    return(
        <div className="corpo">
        <Header titulo="biblia sagrada  IPAT 2025"/>
        <Content titulo="bem vindo">
            <p>
            1 Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.
            2 Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.
            3 Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.
            4 Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.
            5 Não terás medo do terror de noite nem da seta que voa de dia,     
            </p>
            
            <p>
            1 O Senhor é o meu pastor, nada me faltará.
            2 Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.
            3 Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.
            4 Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.
            5 Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.
            6 Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.
            </p>
        </Content>
        <Card itens="cards"
          imagem =  {img1}
          titulo=" titulo 1"
          texto="4 Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.
                 5 Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.
                 6 Certamente que a "
    />
        </div>
    )
}

export default App