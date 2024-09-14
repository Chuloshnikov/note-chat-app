"use client"
import { useState } from 'react';
import styles from "./page.module.css";
import JupyterComponent from '../components/JupyterComponent';
import AiChatComponent from '../components/AiChatComponent';

export default function Home() {
  const [jupyterOutput, setJupyterOutput] = useState('');
  const [chatInput, setChatInput] = useState('');

  const handleJupyterOutputChange = (output: string) => {
    setChatInput(output); // Обновляем чат, когда меняется вывод Jupyter
  };

  const handleChatInputChange = (input: string) => {
    setJupyterOutput(input); // При изменении чата обновляем вывод Jupyter
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '50%' }}>
        <h2>Jupyter Notebook</h2>
        <JupyterComponent onOutputChange={handleJupyterOutputChange} />
      </div>
      <div style={{ width: '50%' }}>
        <h2>AI Chat</h2>
        <AiChatComponent inputValue={chatInput} onInputChange={handleChatInputChange} />
      </div>
    </div>
  );
};

