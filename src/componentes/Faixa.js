import "./styles/faixa.css"

function Faixa({ texto, link }) {

    function transformarLink() {
        window.location.href = link;
    }

    return (
        <div className="faixa" onClick={transformarLink}>
            <div className="texto">
                <p>{texto}</p>
            </div></div>
    )
}

export default Faixa;