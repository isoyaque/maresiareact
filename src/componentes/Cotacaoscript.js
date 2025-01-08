import React, { useState } from 'react';
import "./styles/cotacaoscript.css"

function Cotacaoscript() {
    const [itens, setItens] = useState([{ id: 1, value: '' }]);

    const adicionarItem = () => {
        setItens([...itens, { id: Date.now(), value: '' }]);
    };

    const removerItem = (id) => {
        setItens(itens.filter((item) => item.id !== id));
    };

    const atualizarItem = (id, value) => {
        setItens(itens.map((item) => (item.id === id ? { ...item, value } : item)));
    };

    const finalizarCotacao = () => {
        if (itens.length === 0 || itens.every((item) => item.value.trim() === '')) {
            alert('Atenção: Por favor, adicione pelo menos um item para a cotação.');
            return;
        }

        let mensagem = 'Olá, vim do site e preciso dessa cotação:\n';
        itens.forEach((item) => {
            if (item.value.trim() !== '') {
                mensagem += `${item.value}, `;
            }
        });

        const mensagemCodificada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=5513997739347&text=${mensagemCodificada}`;
        window.open(urlWhatsApp, '_blank'); // Abrir WhatsApp em nova aba
    };

    return (
        <div className="cotacao-container">
            <div className="cotacao-form">
                {itens.map((item) => (
                    <div key={item.id} className="cotacao-item">
                        <input
                            type="text"
                            className="cotacao-input"
                            placeholder="Item / Embalagem"
                            value={item.value}
                            onChange={(e) => atualizarItem(item.id, e.target.value)}
                        />
                        <button className="cotacao-remove" onClick={() => removerItem(item.id)}>
                            Excluir
                        </button>
                    </div>
                ))}
            </div>
            <div className="cotacao-buttons">
                <button className="cotacao-add" onClick={adicionarItem}>
                    Adicionar Item
                </button>
                <button className="cotacao-finalizar" onClick={finalizarCotacao}>
                    Finalizar Cotação
                </button>
            </div>
        </div>
    );
}

export default Cotacaoscript;
