// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// Create events array
const events = [];

// Create route handler for post request
app.post('/events', (req, res) => {
  const event = req.body;

  // Push event to events array
  events.push(event);

  // Send event to other services
  axios.post('http://posts-clusterip-srv:4000/events', event); // Post service
  axios.post('http://comments-srv:4001/events', event); // Comment service
  axios.post('http://query-srv:4002/events', event); // Query service
  axios.post('http://moderation-srv:4003/events', event); // Moderation service

  res.send({ status: 'OK' });
});

// Create route handler for get request
app.get('/events', (req, res) => {
  res.send(events);
});

// Listen to port 4005
app.listen(4005, () => {
  console.log('Listening on 4005');
});