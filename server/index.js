const express = require('express');
const path = require('path');
const usersRouter = require('./controllers/users');
const activityRouter = require('./controllers/activities');
const exerciseRouter = require('./controllers/exercises');
const { parseAuthToken } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT ?? 3000;

app
  // CORS handling
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  })
  // JSON body parsing middleware
  .use(express.json())
  // Static files serving
  .use(express.static('../client/dist'))
  // API routes
  .use('/api/v1/users', usersRouter)
  .use('/api/v1/activities', activityRouter)
  .use('/api/v1/exercises', exerciseRouter)
  // Protected route
  .get('/protected-route', parseAuthToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
  })
  // 404 handler
  .use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  })
  // Error handling
  .use((err, req, res, next) => {
    console.error(err);
    const results = {
      isSuccess: false,
      message: err.message || 'Internal Server Error',
      data: null,
    };
    res.status(500).send(results);
  })
  // Catch all route for Vue
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });

// Start the server
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
