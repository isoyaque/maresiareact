import React from "react";
import Navbar from "../componentes/Navbar";
import Banner from "../componentes/Banner";
import Carrosel from "../componentes/carrosel";
import Lojas from "../componentes/Lojas";
import TituloS from "../componentes/TituloS";
import Promocao from "../componentes/Pomocao";
import Rodape from "../componentes/rodape";
import Creditos from "../componentes/creditos";
import Faixa from "../componentes/Faixa";

function Home() {
    return (
        <div>
            <Navbar />
            <Faixa texto='Estamos contratando!! clique aqui e saiba mais!!'
                link='https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20enviar%20meu%20curr%C3%ADculo!!' />
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