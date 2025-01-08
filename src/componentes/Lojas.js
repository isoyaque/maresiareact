import './styles/Lojas.css'
import Button from './Button';
import imgadega from './imagens/ADEGA.jpeg'
import imgdist from './imagens/distribuidora.jpeg'

function Lojas() {
    return (
        <div className='lojas'>

            <div className='lum'>
                <div className='ladoa'>

                    <h5> Loja Afonso Pena</h5>
                    <p>Somente retiradas</p>
                    <Button nome='Chamar agora' link='https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20vim%20do%20site,%20e%20gostaria%20de%20ser%20atendido(a)%20por%20aqui!!' />
                    <Button nome='Botar na rota' link='https://maps.app.goo.gl/8yJFXVcyCbUZLAFY7' />
                </div>
                <div className='ladob'><img src={imgadega} alt='Fachada adega' /></div>
            </div>

            <div className='ldois'>
                <div className='ladoa'><img src={imgdist} alt='fachada distribuidora' /></div>
                <div className='ladob'>
                    <h5> Loja Rodrigues Alvez</h5>
                    <p>Somente entregas</p>
                    <Button nome='Chamar agora' link='https://api.whatsapp.com/send?phone=5513991868515&text=Ol%C3%A1,%20vim%20do%20site,%20e%20gostaria%20de%20ser%20atendido(a)%20por%20aqui!!' />
                    <Button nome='Botar na rota' link='https://maps.app.goo.gl/5vfiVJ1MbDo9xqaQ6' />
                </div>
            </div>



        </div>
    )
}

export default Lojas;