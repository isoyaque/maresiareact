import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import Banner from "../componentes/Banner";
import Carrosel from "../componentes/carrosel";
import Lojas from "../componentes/Lojas";
import TituloS from "../componentes/TituloS";
import Promocao from "../componentes/Pomocao";
import Rodape from "../componentes/rodape";
import Creditos from "../componentes/creditos";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Carrosel />
            <TituloS title='Conheça nossas lojas' />
            <Lojas />
            <TituloS title='Deseja receber nossas ofertas diretamente em seu whatsapp?' />
            <Promocao />
            <Rodape />
            <Creditos />
        </div>

    );
}

export default Home;