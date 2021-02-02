import React from 'react';

const Input = (props) => {
  /**
   * Updates the state when the event target's value is changed
   */
  const handleChange = (event) => {
    props.setValue(event.target.value);
  }

  return (
    <div className="input">
      <h2>Input</h2>
      <textarea 
        value={props.value} 
        onChange={handleChange}
        placeholder="Type your message here" 
      />
    </div>
  );
}

export default Input;