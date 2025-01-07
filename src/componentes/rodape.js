import './styles/rodape.css'
import instalogo from './imagens/Instagram_icon.png.webp'
import zaplogo from './imagens/whatsappicon.png'

function Rodape() {
    return (
        <div className='rodape'>
            <div className='ladoa'>
                <a href='https://api.whatsapp.com/send?phone=5513997739347'>
                <img src={zaplogo} /> </a>
                <a href='https://www.instagram.com/maresia_bebidas/'>
                <img src={instalogo} /></a>
            </div>
            <div className='ladob'>
                <p>www.maresia-bebidas.com.br | (13) 99773-9347<br />
                    Horário de atendimento: de segunda a sexta das 07:30 às 19:00, sábados das 07:00 às 14:00.<br />
                    J.G. DE SOUZA BEBIDAS | CNPJ: 17.325.767/0001-93<br />
                    Av. Afonso Penna, 589 - CEP: 11075-420 - Santos/SP</p>
            </div>
        </div>
    )
}

export default Rodape