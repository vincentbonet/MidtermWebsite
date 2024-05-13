const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

//Intializing the express app
const app = express();
const PORT = process.env.PORT || 3000;

//Logging the port
console.log('PORT:', PORT);

//Importing the middleware
const { parseAuthToken} = require('./middleware/auth');

//Import routes 
const usersRouter = require('./controllers/users');
const activityRouter = require('./controllers/activity');

app
    //serving the static files from the client
    .use('/', express.static(path.join(__dirname, '../client/dist')))
    //parse the JSON body
    .use(express.json())
    //Protected routes 
    
    .get('/protected-route', parseAuthToken, (req, res) => {
        res.json({ message: 'This is a protected route' });
    })
    //User routes
    .use('/api/v1/users', usersRouter)
    //Activity routes
    .use('/api/v1/activity', activityRouter)
    //CORS handling
    .use((req, res, next) => { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if(req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        next();
    })
    //Catch all route for Vue
    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});