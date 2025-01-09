import React from "react";
import Navbar from "../componentes/Navbar";
import Cotacaoscript from "../componentes/Cotacaoscript";
import TituloS from "../componentes/TituloS"
import Rodape from "../componentes/rodape"
import Faixa from "../componentes/Faixa";


const Cotacao = () => {
    return (

        <div>
            <Navbar />
            <Faixa texto='Estamos contratando!! clique aqui e saiba mais!!'
                link='https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20enviar%20meu%20curr%C3%ADculo!!' />
            <TituloS title='Cotação' />
            <Cotacaoscript />
            <Rodape />
        </div>
    )
}

export default Cotacao;