const users = require('../models/users');
const express = require('express');
const router = express.Router();

router 
    .get('/', (req, res) => {
        res.json(users);
    })
    .get('/:id', (req, res) => {
        const { id } = req.params;
        const user = users.find(user => user.id === +id);
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    })
    .post('/', (req, res) => {
        const user = req.body;
        users.push(user);
        res.status(201).json(user);
    })
    .put('/:id', (req, res) => {
        const { id } = req.params;
        const user = req.body;
        const index = users.findIndex(user => user.id === +id);
        if(index !== -1) {
            users[index] = user;
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    })
    .delete('/:id', (req, res) => {
        const { id } = req.params;
        const index = users.findIndex(user => user.id === +id);
        if(index !== -1) {
            users.splice(index, 1);
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });

module.exports = router;
