import React, { useState } from 'react';
import axios from 'axios';

export default function ChatWithAI() {
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  const sendMessage = async () => {
    if (!userMessage.trim()) return;
    const newConversation = [...conversation, { sender: 'user', message: userMessage }];
    setConversation(newConversation);
    try {
      console.log('Sending message to AI:', userMessage);
      const response = await axios.post('http://localhost:3000/chat', { message: userMessage });
      console.log('Received response from AI:', response);
      console.log('Received response from AI:', response.data.response);
      setConversation(prev => [...prev, { sender: 'ai', message: response.data.response }]);
    } catch (error) {
      console.error('Error sending message to AI:', error);
    }
    setUserMessage('');
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <div>
        {conversation.map((msg, index) => (
          <p key={index}><strong>{msg.sender === 'user' ? 'You: ' : 'AI: '}</strong>{msg.message}</p>
        ))}
      </div>
      <input
        type="text"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}