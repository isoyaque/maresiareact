import './styles/rodape.css'
import instalogo from './imagens/Instagram_icon.png.webp'
import zaplogo from './imagens/whatsappicon.png'

function Rodape() {
    return (
        <div className='rodape'>
            <div className='ladoa'>
                <a href='https://api.whatsapp.com/send?phone=5513997739347'>
                <img src={zaplogo}  alt=' '/> </a>
                <a href='https://www.instagram.com/maresia_bebidas/'>
                <img src={instalogo} alt=' ' /></a>
            </div>
            <div className='ladob'>
                <p>www.maresia-bebidas.com.br <br /> (13) 99773-9347<br /><br />
                    Horário de atendimento:<br />de segunda a sexta das 07:30 às 19:00<br /> sábados das 07:00 às 14:00.<br /><br />
                    J.G. DE SOUZA BEBIDAS | CNPJ: 17.325.767/0001-93<br /><br />
                    Av. Afonso Penna, 589 <br /> CEP: 11075-420 - Santos/SP</p>
            </div>
        </div>
    )
}

export default Rodape