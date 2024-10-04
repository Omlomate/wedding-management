const Venue = require('../models/Venue');

// Get all venues
const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Add a new venue
const addVenue = async (req, res) => {
  try {
    const { name, location, capacity, price, description } = req.body;
    const venue = new Venue({
      name,
      location,
      capacity,
      price,
      description
    });

    await venue.save();
    res.status(201).json(venue);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getVenues, addVenue };
