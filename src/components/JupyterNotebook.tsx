import React, { useState } from 'react';
import { Jupyter, Notebook } from '@datalayer/jupyter-react';

interface JupyterNotebookProps {
  onOutputChange: (output: string) => void;
}

const JupyterNotebookComponent: React.FC<JupyterNotebookProps> = ({ onOutputChange }) => {
  const [output, setOutput] = useState<string>('');

  const handleNotebookChange = (newOutput: string) => {
    setOutput(newOutput);
    onOutputChange(newOutput);  // передача данных в App
  };

  return (
    <div>
      <Jupyter>
        <Notebook onChange={handleNotebookChange} />
      </Jupyter>
      <p>Output: {output}</p>
    </div>
  );
};

export default JupyterNotebookComponent;