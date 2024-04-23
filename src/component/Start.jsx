import React, { useState } from 'react';

export default function Start({ setUserName }) {
  const [usernameInput, setUsernameInput] = useState('');

  const handleInputChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleClick = () => {
    if (usernameInput.trim() !== '') {
      setUserName(usernameInput.trim());
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={usernameInput}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Start</button>
    </div>
  );
}
