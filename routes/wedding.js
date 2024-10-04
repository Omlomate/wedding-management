const express = require('express');
const { getVenues, addVenue } = require('../controllers/weddingController');

const router = express.Router();

// Route to get all venues
router.get('/venues', getVenues);

// Route to add a new venue
router.post('/venues', addVenue);

module.exports = router;
