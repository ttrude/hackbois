import React from 'react';
import './App.css';
import Textbox from '../textbox/Textbox';
import Savebutton from '../savebutton/Savebutton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
        Listen Sie hier alle Gründe auf, warum Gabriel und Karl auch ohne Matthias und Tobi zurecht kommen:
        </div>
        <Textbox />
        <Savebutton />
        <h2>
          Listen Sie hier alle Gründe auf, warum Gabriel und Karl nicht ohne Matthias und Tobi zurecht kommen:
        </h2>
        <Textbox/>
        <Savebutton/>
        <ul>
          <li>Random EINRÜCKUNGEN VON CODEZEILEN WAS IST HIER LOS</li>
          <li>Man kann das Projekt nach pull nicht mehr builden</li>
          <li>
            Die komplette App ist im HTML header Element UND DER TEXT IST IN EINEM DIV =>
            STRUKTURELLE SEMANTIK NICHT VORHANDEN ARRRRRRRRRRRRGGGGGGGGHHHHHHHH
          </li>
          <li>Matthias und Tobi bereichern jeden Call mit ihrer Persönlichkeit und unendlichen GEDULD AMK</li>
          <li>WAS MEINE MUTTER EIN AUF DU KOMMST IN DEN CALL AMK BEI GOTT ICH SPUCKE AUF DEINEN COMMIT</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
