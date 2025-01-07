import './styles/button.css'

function Button({ nome, link }) {
    const handleRedirect = () => {
        window.location.href = link;
    };

    return (
        <div>
            <button className='btn' onClick={handleRedirect}>
                {nome}
            </button>
        </div>
    );
}

export default Button;
