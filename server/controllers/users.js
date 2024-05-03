const User = require('../models/User');

const userController = {};

// Create user
userController.createUser = async function(data) {
    try {
        const newUser = new User(data);
        return await newUser.save();
    } catch (error) {
        throw error;
    }
};

// Read user
userController.getUser = async function(username) {
    try {
        return await User.findOne({ username });
    } catch (error) {
        throw error;
    }
};

// Update user
userController.updateUser = async function(username, updatedData) {
    try {
        return await User.findOneAndUpdate({ username }, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

// Delete user
userController.deleteUser = async function(username) {
    try {
        return await User.findOneAndDelete({ username });
    } catch (error) {
        throw error;
    }
};

module.exports = userController;
