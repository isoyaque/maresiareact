import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import Banner from "../componentes/Banner";
import Carrosel from "../componentes/carrosel";
import Lojas from "../componentes/Lojas";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Carrosel />
            <Lojas />
        </div>

    );
}

export default Home;