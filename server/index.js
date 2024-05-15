require('dotenv').config();
const path = require('path');
const express = require('express');
const usersRouter = require('./controllers/users');
const activityRouter = require('./controllers/activities');
const exerciseRouter = require('./controllers/exercises');
const { parseAuthToken } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app
  // Serve static files from the 'dist' directory
  .use(express.static(path.join(__dirname, 'dist')))
  // CORS handling
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  })
  // API routes
  .use('/api/v1/users', usersRouter)
  .use('/api/v1/activities', activityRouter)
  .use('/api/v1/exercises', exerciseRouter)
  // Protected route
  .get('/protected-route', parseAuthToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
  })
  // 404
  .use((req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  })
  // Error handling
  .use((err, req, res, next) => {
    console.error(err);
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
