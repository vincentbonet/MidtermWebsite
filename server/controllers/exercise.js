const User = require('../models/user');
const express = require('express');

const app = express.Router();

app
// Create user
.post('/', async (req, res, next) => {
    const data = req.body;

    try {
        const newUser = new User(data);
        const savedUser = await newUser.save();

        res.send({ data: savedUser, isSuccess: true });
    } catch (error) {
        next(error);
    }
})
// Read user
.get('/:id', async (req, res, next) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);

        res.send({ data: user, isSuccess: true });
    } catch (error) {
        next(error);
    }
})
// Update user
.patch('/:id', async (req, res, next) => {
    const userId = req.params.id;
    const updatedData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        res.send({ data: updatedUser, isSuccess: true });
    } catch (error) {
        next(error);
    }
})
// Delete user
.delete('/:id', async (req, res, next) => {
    const userId = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);

        res.send({ data: deletedUser, isSuccess: true });
    } catch (error) {
        next(error);
    }
});

module.exports = app;