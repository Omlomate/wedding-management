const express = require('express');
const connectDB = require('./config/db');
const weddingRoutes = require('./routes/wedding');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON data
app.use(express.json());

// Static files middleware (for serving HTML, CSS, JS)
app.use(express.static('public'));

// API routes for wedding management
app.use('/api/weddings', weddingRoutes);

// Home route (serving landing page)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
    