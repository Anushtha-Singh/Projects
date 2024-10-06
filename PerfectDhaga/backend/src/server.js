// backend/src/server.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

// Create a new Express application
const app = express();

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../../frontend')));

// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_username',     // Replace with your PostgreSQL username
  host: 'localhost',
  database: 'perfect_dhaga', // Replace with your database name
  password: 'your_password',  // Replace with your PostgreSQL password
  port: 5432,
});

// Serve the registration form at the "/register" route
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/html/register.html'));
});

// Handle form submission
app.post('/register', async (req, res) => {
  const { fullName, email, phoneNumber, birthDate, gender, address, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user data into the database
  try {
    const query = `
      INSERT INTO users (full_name, email, phone_number, birth_date, gender, address, password)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [fullName, email, phoneNumber, birthDate, gender, address, hashedPassword];

    await pool.query(query, values);
    res.send('Registration successful!'); // Change this to redirect or show a success message
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Error registering user.');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
