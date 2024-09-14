"use client"
import React, { useState } from 'react';

const AiChatComponent = ({ inputValue, onInputChange }: { inputValue: string, onInputChange: (input: string) => void }) => {
  const [chatInput, setChatInput] = useState(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
    onInputChange(e.target.value); // Передаем данные в родительский компонент
  };

  return (
    <div>
      <textarea
        value={chatInput}
        onChange={handleInputChange}
        placeholder="Enter your message"
      />
    </div>
  );
};

export default AiChatComponent;
