const express = require('express');
const app = express();
const path = require('path')
const port = process.env.PORT || 4000;

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Route for displaying a simple message
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route for handling a POST request
app.post('/api/users', (req, res) => {
  // Assuming you have some data in the request body
  const { username, email } = req.body;
  // Perform some operations with the received data
  res.send(`User ${username} with email ${email} was created.`);
});

// Route for handling a dynamic parameter
app.get('/users/:userId', (req, res) => {
  // Access the dynamic parameter using req.params
  const userId = req.params.userId;
  res.send(`You requested information for user with ID: ${userId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});