const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Serve static content from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve 'index.html' for the root path ('/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the 'index.html' file from the 'public' directory
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Validate the input
  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }

  // Register the user
  // ...

  res.send('User registered successfully.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});