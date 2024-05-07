const users = require('../models/users');
const express = require('express');
const router = express.Router();
const store = require('../store');

router 
    .get('/', (req, res) => {
        const users = store.getters.getAllUsers();
        res.json(users);
    })
    .get('/:id', (req, res) => {
        const { id } = req.params;
        const user = store.getters.getUserById(id);
        if(user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    })
    .post('/', (req, res) => {
        const user = req.body;
        store.dispatch('addUser', user);
        res.status(201).json(user);
    })
    .put('/:id', (req, res) => {
        const { id } = req.params;
        const user = req.body;
        store.dispatch('updateUser', { id, user });
        res.json(user);
    })
    .delete('/:id', (req, res) => {
        const { id } = req.params;
        store.dispatch('deleteUser', id);
        res.json({ message: 'User deleted' });
    });

module.exports = router;
