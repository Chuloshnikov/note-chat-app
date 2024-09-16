
import React, { useState } from 'react';
import { AiChat } from '@nlux/react';

interface AiChatProps {
  onMessageSend: (message: string) => void;
}

const AiChatComponent: React.FC<AiChatProps> = ({ onMessageSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    onMessageSend(message);
    setMessage('');
  };

  return (
    <div>
      <AiChat onMessageSend={handleSend} />
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default AiChatComponent;