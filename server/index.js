require('dotenv').config();
const express = require('express');
const path = require('path');
const usersRouter = require('./controllers/users');
const activityRouter = require('./controllers/activities');
const exerciseRouter = require('./controllers/exercises');
const { parseAuthToken } = require('./middleware/auth');

/**  
 * @typedef {import('../client/src/model/transporttypes').DataEnvelope<null> } ErrorDataEnvelope
 * */

//Intializing the express app
const app = express();
const PORT = process.env.PORT ?? 3000;

app

 //serving the static files from the client
 .use(express.static('client/dist'))


 //CORS handling
 .use(express.json())
 .use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
})
app
    .get('/', (req, res) => {
        res.send('Hello Robert!');
    })
    //User routes
    .use('/api/v1/users', usersRouter)
    //Activity routes
    .use('/api/v1/activities', activityRouter)
    //Exercise routes
    .use('/api/v1/exercises', exerciseRouter)

    //404 
    .use((req, res) => {
        res.sendFile(path.join(__dirname,  '../client/dist/index.html'));
    })

    // Error handling
    .use((err, req, res, next) => {
    console.error(err);
    /** @type {ErrorDataEnvelope } */
    const results = { 
      isSuccess: false,
      message: err.message || 'Internal Server Error',
      data: null,
     };
    res.status(500).send(results);
    })

    //Protected routes 
    .get('/protected-route', parseAuthToken, (req, res) => {
        res.json({ message: 'This is a protected route' });
    })

    //Catch all route for Vue
    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });

    //Start the server  
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});