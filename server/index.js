require('dotenv').config();
const path = require('path');
const express = require('express');
const users = require('./controllers/users');
const activities = require('./controllers/activities');
const exercises = require('./controllers/exercises');

/**  
 * @typedef {import('../client/src/model/transporttypes').DataEnvelope<null> } ErrorDataEnvelope
 * */


const app = express();
const PORT = process.env.PORT || 3000;

// logging start
console.log('Starting server...');

  // Serve static files from the 'dist' directory
  app.use(express.static('client/dist'));
  // Parse JSON bodies
  app.use(express.json());
  // CORS handling
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  })
  // API routes
  app.get('/', (req, res) => {
    res.send('Hello World!');
  })
  app.use('/api/v1/users', users)
  app.use('/api/v1/activities', activitis)
  app.use('/api/v1/exercises', exercises)
  // 404
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  })
  // Error handling
  app.use((err, req, res, next) => {
    console.error(err);
    /**@type {ErrorDataEnvelope} */
    const results = {
      isSuccess: false,
      message: err.message || 'Internal Server Error',
      data: null,
    };
    res.status(500).json(results);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
