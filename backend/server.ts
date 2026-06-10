// server.js
require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Define a basic GET route for the root URL
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to your JS backend server!' });

});

app.get('/api/roses', async (req, res) => {
  const roseKey = process.env.ROSE_API_KEY; 
  const response = await fetch(`https://trefle.io/api/v1/plants/search?token={roseKey}&q=rose=asc`);
  
  const data = await response.json();
  res.json(data);
  //TODO remove everything after the first 6 option
});

app.get('/api/weather', async (req, res) => {
  const secretKey = process.env.WEATHER_API_KEY; 
  const response = await fetch(`https://weather.com{secretKey}`);
  const data = await response.json();
  res.json(data);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});





