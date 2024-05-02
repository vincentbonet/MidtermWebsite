require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 3000; 

app
    .use(express.static('client/dist')) 
    .use(express.json())
    .use((req, res, next) => { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        next();
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
