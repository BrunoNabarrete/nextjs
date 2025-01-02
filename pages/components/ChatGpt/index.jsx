import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './chat-window.module.scss';

const ChatWindow = () => {
  const [conversas, setConversas] = useState([]);
  const [conversaSelecionada, setConversaSelecionada] = useState(null);
  const [novaMensagem, setNovaMensagem] = useState('');

  useEffect(() => {
    const fetchConversas = async () => {
      try {
        const response = await axios.get('https://back-end-qwjb.onrender.com/api/conversas');
        setConversas(response.data);
      } catch (error) {
        console.error('Erro ao buscar as conversas:', error);
      }
    };
    fetchConversas();
  }, []);

  const selecionarConversa = (conversa) => {
    setConversaSelecionada(conversa);
  };

  const enviarMensagem = async () => {
    if (!novaMensagem.trim() || !conversaSelecionada) return;

    const novaMsg = {
      content: novaMensagem,
      role: 'assistant',
    };

    const updatedConversa = {
      ...conversaSelecionada,
      mensagens: [...conversaSelecionada.mensagens, novaMsg],
    };

    try {
      await axios.post(
        `http://localhost:5275/api/conversas/${conversaSelecionada._id}/messages`,
        novaMsg
      );
      setConversaSelecionada(updatedConversa);
      setNovaMensagem('');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  if (!conversaSelecionada) {
    return (
      <div className={styles.conversaList}>
        <h2>Conversas Disponíveis</h2>
        {conversas.length === 0 ? (
          <p>Carregando ou nenhuma conversa disponível...</p>
        ) : (
          conversas.map((conversa) => (
            <div
              key={conversa._id}
              className={`${styles.conversaItem} ${conversa.status === 'open' ? styles.open : styles.closed}`}
              onClick={() => selecionarConversa(conversa)}
            >
              <p>
                <strong>Telefone:</strong> {conversa.phone}
              </p>
              <p>
                <strong>Status:</strong> {conversa.status}
              </p>
            </div>
          ))
        )}
      </div>
    );
  }

  return (
    <div className={styles.chatWindow}>
      <header className={styles.chatHeader}>
        <h3>Chat com: {conversaSelecionada.phone}</h3>
        <span>Status: {conversaSelecionada.status}</span>
        <button onClick={() => setConversaSelecionada(null)}>Voltar</button>
      </header>
      <div className={styles.chatMessages}>
        {conversaSelecionada.mensagens.map((mensagem, index) => (
          <div
            key={index}
            className={`${styles.message} ${
              mensagem.role === 'user' ? styles.userMessage : styles.assistantMessage
            }`}
          >
            {mensagem.content}
          </div>
        ))}
      </div>
      <footer className={styles.chatFooter}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
        />
        <button onClick={enviarMensagem}>Enviar</button>
      </footer>
    </div>
  );
};

export default ChatWindow;
