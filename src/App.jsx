import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () => {
  return <div className="app-container">
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
        <tr>
          <td>White House Road</td>
          <td>Red Barn Radio</td>
          <td>Tyler Childers</td>
          <td>2016</td>
        </tr>
      </tbody>
    </table>
  </div>
}



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
