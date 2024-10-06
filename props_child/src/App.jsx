import { useState } from 'react'
import './App.css'
import ChildComponent from './ChildComponent';

function App() {
  const [username, setUsername] = useState('');
  function getUsername(value) {
    setUsername(value);
  }
  return (
    <>
      <ChildComponent handleGetUsername={getUsername} />
      <p>Data from child component:</p>
      <p>Username: {username}</p>
    </>
  )
}

export default App
