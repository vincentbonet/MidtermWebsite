require('dotenv').config();
const path = require('path');
const express = require('express');
const users = require('./controllers/users')

const app = express();
const PORT = process.env.PORT ?? 3000; 

console.log('PORT:', PORT)

app
    .use('/', express.static(path.join(__dirname, '../client/dist')))

    .use(express.json())

    .use('/api/users', users)


    //CORS
    .use((req, res, next) => { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if(req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        next();
    }) 

    .get('/api/v1/users', userController)

    .get('*', (req, res) =>  {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    })

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
