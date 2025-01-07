import React from "react";
import Navbar from "../componentes/Navbar";
import TituloS from "../componentes/TituloS";
import MapaLojas from "../componentes/MapaLojas";
import Rodape from "../componentes/rodape"


const Chegar = () => {
    return (

        <div>
            <Navbar />
            <TituloS title='Venha nos conhecer!!' />
            <MapaLojas />
            <Rodape />
        </div>
    )
}

export default Chegar;