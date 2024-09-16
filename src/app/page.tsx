"use client"
import JupyterNotebook from '../components/JupyterNotebook';
import AiChat from '../components/AiChatComponent';

export default function Home() {
  const [jupyterCode, setJupyterCode] = useState('');
  const [aiChatMessage, setAiChatMessage] = useState('');

  const handleJupyterCodeChange = (code: string) => {
    setJupyterCode(code);
  };

  const handleAiChatMessageSend = (message: string) => {
    setAiChatMessage(message);
  };

  const handleSendToAiChat = () => {
    // Тут логика для отправки данных из Jupyter в AiChat
    setAiChatMessage(jupyterCode);
  };

  const handleSendToJupyter = () => {
    // Тут логика для отправки данных из AiChat в Jupyter
    setJupyterCode(aiChatMessage);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <JupyterNotebook onCodeChange={handleJupyterCodeChange} />
        <button onClick={handleSendToAiChat}>Send to AiChat</button>
      </div>
      <div style={{ flex: 1 }}>
        <AiChat onMessageSend={handleAiChatMessageSend} />
        <button onClick={handleSendToJupyter}>Send to Jupyter</button>
      </div>
    </div>
  );
}
