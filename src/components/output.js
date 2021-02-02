import React from 'react';
import { encode } from 'morsee';

const Output = (props) => {
  return (
    <div className="output">
      <h2>Output</h2>
      <p>{encode(props.value)}</p>
    </div>
  );
}

export default Output;