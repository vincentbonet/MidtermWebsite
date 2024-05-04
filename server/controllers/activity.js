const Activity = require('../models/activity');
const express = require('express');

const app = express.Router();

app
// Create activity
.post('/', async (req, res, next) => {
    const data = req.body;

    try {
        const newActivity = new Activity(data);
        const savedActivity = await newActivity.save();

        res.send({ data: savedActivity, isSuccess: true });
    } catch (error) {
        next(error);
    }
})
// Read activity
.get('/:id', async (req, res, next) => {
    const activityId = req.params.id;

    try {
        const activity = await Activity.findById(activityId);

        res.send({ data: activity, isSuccess: true });
    } catch (error) {
        next(error);
    }
})
// Update activity
.patch('/:id', async (req, res, next) => {
    const activityId = req.params.id;
    const updatedData = req.body;

    try {
        const updatedActivity = await Activity.findByIdAndUpdate(activityId, updatedData, { new: true });

        res.send({ data: updatedActivity, isSuccess: true });
    } catch (error) {
        next(error);
    }
})
// Delete activity
.delete('/:id', async (req, res, next) => {
    const activityId = req.params.id;

    try {
        const deletedActivity = await Activity.findByIdAndDelete(activityId);

        res.send({ data: deletedActivity, isSuccess: true });
    } catch (error) {
        next(error);
    }
});

module.exports = app;