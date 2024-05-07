const path = require('path');
const express = require('express');
require('dotenv').config();
const userController = require('./controllers/users.js');
const activityController = require('./controllers/activity.js');
const exerciseController = require('./controllers/exercise.js');
const { parseAuthorizationToken, requireUser } = require('./middleware/auth.js');

const app = express();

const PORT = process.env.PORT ?? 3000; 

app
    .use('/', express.static(path.join(__dirname, '../client/dist')))

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

    .use(parseAuthorizationToken)


    .get('*', (req, res) =>  {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    })

    .get('/data/users', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'data/users.json'));
    });


// 404 
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err);
    /** @type {ErrorDataEnvelope } */
    const results = { 
        isSuccess: false,
        message: err.message || 'Internal Server Error',
        data: null,
    };
    res.status(500).send(results);
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
