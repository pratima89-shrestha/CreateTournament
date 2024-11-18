import React, { useState } from 'react';

const NewTt = () => {
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentURL, setTournamentURL] = useState('');
  const [startDate, setStartDate] = useState('');
  const [game, setGame] = useState('');
  const [region, setRegion] = useState([]);
  const [status, setStatus] = useState('public');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, maybe API call or logging form data
    console.log({
      tournamentName,
      tournamentURL,
      startDate,
      game,
      region,
      status,
    });
  };

  const handleRegionChange = (e) => {
    const selectedRegions = Array.from(e.target.selectedOptions, option => option.value);
    setRegion(selectedRegions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="tournament-form">
        <div className="form-group">
          <label htmlFor="tournamentName">Tournament Name</label>
          <input
            id="tournamentName"
            type="text"
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tournamentURL">Tournament URL</label>
          <div className="url-input-group">
            <span>communitygaming.io/tournament/</span>
            <input
              id="tournamentURL"
              type="text"
              value={tournamentURL}
              onChange={(e) => setTournamentURL(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Tournament Start Date</label>
          <input
            id="startDate"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="game">Game</label>
          <select
            id="game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            required
          >
            <option value="">Select Game</option>
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
            {/* Add more options */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="region">Registration Region</label>
          <select
            id="region"
            multiple
            value={region}
            onChange={handleRegionChange}
          >
            <option value="region1">Region 1</option>
            <option value="region2">Region 2</option>
            {/* Add more options */}
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <div>
            <input
              type="radio"
              id="public"
              name="status"
              value="public"
              checked={status === 'public'}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="public">Public</label>

            <input
              type="radio"
              id="private"
              name="status"
              value="private"
              checked={status === 'private'}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="private">Private</label>
          </div>
        </div>

        <div className="form-buttons">
          <button type="button">Prev Step</button>
          <button type="submit">Next Step</button>
        </div>
      </form>

      <style jsx>{`
        /* General styling for the tournament form */
        .tournament-form {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          background-color: #1a1a1a;
          color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Added subtle shadow for depth */
        }

        /* Styling for each form group (field) */
        .form-group {
          margin-bottom: 15px;
        }

        /* Label styling */
        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-size: 0.9rem;
          font-weight: 600; /* Added boldness to labels for better readability */
          color: #ddd; /* Slightly lighter color for the label */
        }

        /* Styling for input and select elements */
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #444;
          background-color: #333;
          color: #fff;
          border-radius: 4px;
          transition: border-color 0.3s ease, background-color 0.3s ease; /* Smooth transitions on focus */
        }

        /* Input and select focus states */
        .form-group input:focus,
        .form-group select:focus {
          border-color: #00bfff; /* Highlight border on focus */
          background-color: #444; /* Slightly lighter background */
        }

        /* Button container (to align buttons) */
        .form-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        /* Button styling */
        .form-buttons button {
          padding: 10px 20px;
          background-color: #00bfff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease, transform 0.2s ease; /* Added smooth hover transition */
        }

        /* Button hover effect */
        .form-buttons button:hover {
          background-color: #008ccc;
          transform: translateY(-2px); /* Slight lift effect on hover */
        }

        /* Disabled button state */
        .form-buttons button:disabled {
          background-color: #666;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default NewTt;
