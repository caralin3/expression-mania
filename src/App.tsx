import React from 'react';

import './App.css';
import { Logo } from './components';

function App() {
  return (
    <div
      className={
        'bg-gray-800 h-screen w-screen overflow-hidden flex items-center justify-center flex-col'
      }
    >
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Logo size="lg" />
    </div>
  );
}

export default App;
