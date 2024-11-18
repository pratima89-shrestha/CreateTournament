import React, { useState } from 'react';
import axios from 'axios';
import NewTt from './NewTt';



const Tt= () => {
  const [game, setGame] = useState('');
  const [bracketType, setBracketType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [numParticipants, setNumParticipants] = useState(0);
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect the data to send to the backend
    const tournamentData = {
      game,
      bracketType,
      startDate,
      numParticipants,
      description
    };

    try {
      const token = localStorage.getItem('token'); // Get the JWT token
      await axios.post('http://localhost:5000/api/tournaments', tournamentData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Tournament created successfully!');
    } catch (error) {
      console.error('Error creating tournament:', error);
      alert('Error creating tournament. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Game Type:</label>
        <select value={game} onChange={(e) => setGame(e.target.value)} required>
          <option value="">Select a game</option>
          <option value="Valorant">Valorant</option>
          <option value="Fortnite">Fortnite</option>
          <option value="Dota 2">Dota 2</option>
        </select>
      </div>

      <div>
        <label>Bracket Type:</label>
        <select value={bracketType} onChange={(e) => setBracketType(e.target.value)} required>
          <option value="">Select bracket type</option>
          <option value="single-elimination">Single Elimination</option>
          <option value="double-elimination">Double Elimination</option>
        </select>
      </div>

      <div>
        <label>Tournament Start Date:</label>
        <input 
          type="datetime-local" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required 
        />
      </div>

      <div>
        <label>Number of Participants:</label>
        <input 
          type="number" 
          value={numParticipants} 
          onChange={(e) => setNumParticipants(e.target.value)} 
          min="2" 
          required 
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Enter a description for the tournament" 
        />
      </div>

      <button type="submit">Create Tournament</button>
    </form>
  );
};


function App() {
  return (
    <div className="App">
      <h1>Create Tournament</h1>
      <Tt/>
      <NewTt />
    </div>
  );
}



export default App;
