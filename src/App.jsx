import logo from './logo.svg';
import {nanoid} from 'nanoid'
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [music, setMusic] = useState(data);
    const [addFormData, setAddFormData] = useState({
        title:'',
        album:'',
        artist:'',
        release_date: '',
    });
    const getSongs= async()=>{
      let results  = await axios.get('http://127.0.0.1:8000/music/');
      setMusic(results.data)
    }
  
  
    const handAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const faieldValue = event.target.value; 

        const newFormData = { ...addFormData};
        //newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newMusic = {
            id: nanoid(),
            title: addFormData.title,
            album: addFormData.album,
            artist: addFormData.artist,
            releaseDate: addFormData.release_date,

        };

        const newMusic1 = [...music, newMusic];
        setMusic (newMusic);
    };


    return (
        <div className="app-container">
          <button onClick={()=>getSongs()}></button>
        <table>
            <thead>
            <tr>
            <th>title</th>
            <th>album</th>
            <th>artist</th>
            <th>releaseDate</th>
            <button type="reset">Delete Row</button>
            </tr>
        </thead>
        <tbody>
            {music.map((music) => (
                <tr>
                    <td>{music.title}</td>
                    <td>{music.album}</td>
                    <td>{music.artist}</td>
                    <td>{music.release_date}</td>
                </tr>
            ))}
        </tbody>
        </table>
        
        <h2>ADD A SONG</h2>
        <form>
        <input
            type="text"
            name="title"
            required="required"
            placeholder="enter a song name"
            onChange ={handAddFormChange}
            />
        <input
            type="text"
            name="album"
            required="required"
            placeholder="enter album name"
            onChange ={handAddFormChange}

            />
        <input
          type="text"
          name="artist"
          required="required"
          placeholder="enter a artist name"
          onChange ={handAddFormChange}

          />
        <input
          type="text"
          name="release_date"
          required="required"
          placeholder="enter a release date"
          onChange ={handAddFormChange}
          />

        <button type="submit">Add a song</button>
        <button type="reset">Cancel Request</button>
        </form>
        </div>
        );
    };

    // function Logo() {
    //     return (
    //       <div className="App">
    //         <header className="App-header">
    //           <img src={logo} className="App-logo" alt="logo" />
    //           <p>
    //             Edit <code>src/App.js</code> and save to reload.
    //           </p>
    //           <a
    //             className="App-link"
    //             href="https://reactjs.org"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Learn React
    //           </a>
    //         </header>
    //       </div>
    //     );
    //   }


export default App;
