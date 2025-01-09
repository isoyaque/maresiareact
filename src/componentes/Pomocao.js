import React, { useState } from 'react';
import './styles/promocao.css';

function Promocao() {
    const [nome, setNome] = useState(''); // Estado para armazenar o valor do input

    function promo() {
        if (nome) {
            window.location.href = `https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20eu%20me%20chamo%20${nome}%20e%20gostaria%20de%20receber%20suas%20promo%C3%A7%C3%B5es!!`;
        } else {
            window.location.href = "https://api.whatsapp.com/send?phone=5513997739347&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20receber%20as%20promo%C3%A7%C3%B5es!!";
        }
    }

    return (
        <div className='promocao'>
            <span>Seu nome / nome do comércio</span>
            <div className='inputs'>
                <input
                    type='text'
                    id='input-nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} // Atualiza o estado com o valor do input
                />
                <button onClick={promo} id='btn-ofertas'>Enviar</button>
            </div>
        </div>
    );
}

export default Promocao;
