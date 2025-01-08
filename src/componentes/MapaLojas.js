import './styles/mapalojas.css'

function MapaLojas() {
    return (
        <div>
            <div className='loja1'>
                <div className='mapa'>
                    <iframe title='mapa google' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14582.580268575965!2d-46.301659!3d-23.972988000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03fbb14bc1fd%3A0x417f37466e308722!2sAdega%20Maresia%20Bebidas!5e0!3m2!1spt-BR!2sbr!4v1736261111051!5m2!1spt-BR!2sbr"></iframe>
                </div>
                <div className='texto'>
                    <h3>Loja Afonso Pena</h3>

                    <p>Vantagens:</p>
                    <span>Facil de estacionar</span>
                    <span>Atendimento imediato</span>
                    <span>Funcionarios levam no carro</span>
                </div>
            </div>
            <div className='loja2'>
                <div className='texto'>
                    <h3>Rodrigues Alvez</h3>

                    <p>Vantagens:</p>
                    <span>Entregas personalizadas</span>
                    <span>Vendedores na rua</span>
                    <span>Disponibilidade de atacado</span>
                </div>
                <div className='mapa'>
                    <iframe title='mapa google' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14584.492374463767!2d-46.315518!3d-23.956087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce0306511acb8d%3A0xc7ce6c67ee63c1ed!2sDistribuidora%20de%20bebidas%20Maresias!5e0!3m2!1spt-BR!2sbr!4v1736262795545!5m2!1spt-BR!2sbr"></iframe>
                </div></div>
        </div >
    )
}

export default MapaLojas;