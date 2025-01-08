import React from "react";
import Navbar from "../componentes/Navbar";
import Cotacaoscript from "../componentes/Cotacaoscript";
import TituloS from "../componentes/TituloS"
import Rodape from "../componentes/rodape"


const Cotacao = () => {
    return (

        <div>
            <Navbar />
            <TituloS title ='Cotação' />
            <Cotacaoscript />
            <Rodape />
        </div>
    )
}

export default Cotacao;