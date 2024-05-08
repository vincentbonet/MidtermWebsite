require('dotenv').config();
const path = require('path');
const express = require('express');
const usersRouter = require('./controllers/users');
const { authenticate, authorize } = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('PORT:', PORT);

app
    //serving the static files from the client
    .use('/', express.static(path.join(__dirname, '../client/dist')))
    //parse the JSON body
    .use(express.json())
    //User routes
    .use('/api/users', usersRouter)
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
    //Protected route 
    .get('/protected-route', authenticate, (req, res) => {
        res.json({ message: 'This is a protected route;' });
    })
    .get('/admin-route', authenticate, authorize('admin'), (req, res) => {
            res.json({ message: 'This is an admin-only route' });
    })
    //Catch all route for Vue
    .get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
// Start
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
