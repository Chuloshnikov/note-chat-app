import React, { useState } from 'react';
import { AiChat } from '@nlux/react';

interface AiChatProps {
  jupyterOutput: string;
  onChatInputChange: (input: string) => void;
}

const AiChatComponent: React.FC<AiChatProps> = ({ jupyterOutput, onChatInputChange }) => {
  const [chatInput, setChatInput] = useState<string>('');

  const handleChatChange = (newInput: string) => {
    setChatInput(newInput);
    onChatInputChange(newInput);  // передача данных в App
  };

  return (
    <div>
      <AiChat initialMessage={chatInput} />
      <button onClick={() => handleChatChange(jupyterOutput)}>
        Insert Jupyter Output into Chat
      </button>
    </div>
  );
};

export default AiChatComponent;
