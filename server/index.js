require('dotenv').config();
const path = require('path');
const express = require('express');
const usersRouter = require('./controllers/users');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('PORT:', PORT);

app
    .use('/', express.static(path.join(__dirname, '../client/dist')))
    .use(express.json())
    .use('/api/users', usersRouter)
    .use((req, res, next) => { 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if(req.method === 'OPTIONS') {
            return res.sendStatus(200);
        }
        next();
    })
    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
