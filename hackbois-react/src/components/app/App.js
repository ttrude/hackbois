import React from 'react';
import logo from './logo.svg';
import './App.css';
import Textbox from '../textbox/Textbox';
import Savebutton from '../savebutton/Savebutton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        Listen Sie hier alle Gründe auf, warum Gabriel und Karl auch ohne Matthias und Tobi zurecht kommen:
        </div>
        <Textbox />
          <Savebutton />
      </header>
    </div>
  );
}

export default App;
