import React, { useState } from 'react';
import './App.css';
import Input from "./components/input";
import Output from "./components/output";

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className = "App">
      <h1>Morse Code Translator</h1>
      <Input value={value} setValue={setValue} />
      <Output value = {value} />
    </div>
  );
}

export default App;