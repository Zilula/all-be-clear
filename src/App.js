import React from 'react';
import logo from './logo.svg';
import { Nav } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         All Be Clear
        </p>
        <p>
        Custom Automotive Lenses
        </p>
        <Nav/>

      </header>
    </div>
  );
}

export default App;
