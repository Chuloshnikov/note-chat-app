import React, { useState } from 'react';
import JupyterNotebookComponent from './components/JupyterNotebookProps';
import AiChatComponent from './components/AiChatComponent';
import './App.css';

const App: React.FC = () => {
  const [jupyterOutput, setJupyterOutput] = useState<string>('');
  const [chatInput, setChatInput] = useState<string>('');

  const handleJupyterOutputChange = (output: string) => {
    setJupyterOutput(output);
  };

  const handleChatInputChange = (input: string) => {
    setChatInput(input);
  };

  return (
    <div className="app">
      <div className="left-pane">
        <JupyterNotebookComponent onOutputChange={handleJupyterOutputChange} />
      </div>
      <div className="right-pane">
        <AiChatComponent jupyterOutput={jupyterOutput} onChatInputChange={handleChatInputChange} />
      </div>
    </div>
  );
};

export default App;
