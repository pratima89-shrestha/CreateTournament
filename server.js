const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Mongoose Models
const Tournament = mongoose.model('Tournament', new mongoose.Schema({
  game: { type: String, required: true },
  bracketType: { type: String, required: true },
  startDate: { type: Date, required: true },
  numParticipants: { type: Number, required: true },
  description: { type: String },
}, { timestamps: true }));

// Routes

// Tournament Creation route (no authentication required)
app.post('/api/tournaments', async (req, res) => {
  const { game, bracketType, startDate, numParticipants, description } = req.body;

  // Validate required fields
  if (!game || !bracketType || !startDate || !numParticipants) {
    return res.status(400).send('Please provide all required fields.');
  }

  try {
    const tournament = new Tournament({
      game,
      bracketType,
      startDate,
      numParticipants,
      description,
    });

    const savedTournament = await tournament.save();
    res.status(201).json(savedTournament);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating tournament');
  }
});

// Server start
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
