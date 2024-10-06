import { useState } from 'react';
import React from 'react'

function ChildComponent({handleGetUsername}) {
  const [input, setInput] = useState('');
  function handleUsernameChange() {
	handleGetUsername(input);
  }
  return (
    <>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button type='button' onClick={handleUsernameChange}>Click Me!</button>
    </>
  )
}

export default ChildComponent
