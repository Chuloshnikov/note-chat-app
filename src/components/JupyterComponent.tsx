"use client"
import React, { useState } from 'react';
import { Jupyter, Notebook, Cell } from '@datalayer/jupyter-react';

const JupyterComponent = ({ onOutputChange }: { onOutputChange: (output: string) => void }) => {
  const [output, setOutput] = useState('');

  const handleOutput = (cellOutput: string) => {
    setOutput(cellOutput);
    onOutputChange(cellOutput); // Передаем данные в родительский компонент
  };

  return (
    <Jupyter>
      <Notebook>
        <Cell onExecute={(cell) => handleOutput(cell.getText())} />
      </Notebook>
    </Jupyter>
  );
};

export default JupyterComponent;
