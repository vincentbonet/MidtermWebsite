const Activity = require('../models/activity');

const activityController = {};

// Create activity
activityController.createActivity = async function(data) {
    try {
        const newActivity = new Activity(data);
        return await newActivity.save();
    } catch (error) {
        throw error;
    }
};

// Read activity
activityController.getActivity = async function(activityId) {
    try {
        return await Activity.findById(activityId);
    } catch (error) {
        throw error;
    }
};

// Update activity
activityController.updateActivity = async function(activityId, updatedData) {
    try {
        return await Activity.findByIdAndUpdate(activityId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

// Delete activity
activityController.deleteActivity = async function(activityId) {
    try {
        return await Activity.findByIdAndDelete(activityId);
    } catch (error) {
        throw error;
    }
};

module.exports = activityController;
