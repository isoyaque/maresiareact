import React from "react";
import Navbar from "../componentes/Navbar";
import TituloS from "../componentes/TituloS";
import MapaLojas from "../componentes/MapaLojas";
import Rodape from "../componentes/rodape"
import Faixa from "../componentes/Faixa";


const Chegar = () => {
    return (

        <div>
            <Navbar />
            <Faixa texto='Estamos contratando!! clique aqui e saiba mais!!'
                link='https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20enviar%20meu%20curr%C3%ADculo!!' />
            <TituloS title='Venha nos conhecer!!' />
            <MapaLojas />
            <Rodape />
        </div>
    )
}

export default Chegar;