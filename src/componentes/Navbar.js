import { Link } from "react-router-dom";
import Logo from './imagens/logo.png'
import './styles/Navbar.css'


function Navbar() {
    return (
        <div>
            <nav>
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css'></link>



                <Link to='/'><img src={Logo} /></Link>
                <ul>
                    <Link to='/'><li><i class="fi fi-rr-home"></i> Home</li></Link>
                    <Link to='/chegar'><li><i class="fi fi-rs-marker"></i> Como chegar</li></Link>
                    <Link to='/cotacao'><li><i class="fi fi-rs-shopping-cart"></i> Cotação</li></Link>
                </ul>
            </nav>
            <div className="espacamento">

            </div>
        </div>
    )
}

export default Navbar