import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
