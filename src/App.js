import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>You clicked {count} times psych</p>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
