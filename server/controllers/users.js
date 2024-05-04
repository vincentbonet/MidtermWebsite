const users = require('../models/users');
const express = require('express');

const app = express.Router();

app
// Get all users
.get('/', async (req, res, next) => {
    users.getAll()
    .then(all => {
        /** @type {DataEnvelopeUser } */
        const response = {
            data: all,
            count: all.length,
            isSuccess: true,
        }

        res.send(response);
    }).catch(next);
})
// Search users
.get('/search', async (req, res, next) => {
    const search = req.query.q;

    if(typeof search !== 'string' ) {
        throw new Error('Invalid search query');
    }

    users.search(search)
    .then(result => { 
        /** @type {DataEnvelopeUser } */
        const response = {
            data: result,
            count: result.length,
            isSuccess: true,
        }

        res.send(response);
    }).catch(next);
})
// Get user by ID
.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    if(typeof id !== 'string') {
        throw new Error('Invalid id');
    }

    users.get(id)
    .then(result => {
        /** @type {DataEnvelopeUser } */
        const response = {
            data: result,
            count: result.length,
            isSuccess: true,
        }

        res.send(response);
    }).catch(next);
})
// Login user
.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    users.login(username, password)
    .then(result => {
        /** @type {DataEnvelopeUser } */
        const response = {
            data: result,
            isSuccess: true,
        }

        res.send(response);
    }).catch(next);
})
// Update user by ID
.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    const data = req.body;

    users.update(id, data)
    .then(result => {
        /** @type { DataEnvelopeUser } */
        const response = {
            data: result,
            isSuccess: true,
        }

        res.send(response);
    }).catch(next);
})
// Delete user by ID
.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    users.remove(+id)
    .then(result => {
        /** @type { DataEnvelopeUser } */
        const response = {
            data: result,
            isSuccess: true,
        }
        
        res.send(response);
    }).catch(next);
});
