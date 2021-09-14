import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import data from "./music"

const App = () => {
    const [music, setMusic] = useState(data);

    return (
        <div className="app-container">
        <table>
            <thead>
            <tr>
            <th>title</th>
            <th>album</th>
            <th>artist</th>
            <th>release date</th>
            </tr>
        </thead>
        <tbody>
            {music.map((music) => (
                <tr>
                    <td>music.title</td>
                    <td>music.album</td>
                    <td>music.artist</td>
                    <td>music.release date</td>
                </tr>
            ))}
        </tbody>
        </table>
            <button type="reset">Cancel Request</button>
        </div>
        );
    };



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
