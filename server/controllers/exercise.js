const ExerciseType = require('../models/exerciseType');

const exerciseController = {};

// Create exercise type
exerciseController.createExerciseType = async function(data) {
    try {
        const newExerciseType = new ExerciseType(data);
        return await newExerciseType.save();
    } catch (error) {
        throw error;
    }
};

// Read exercise type
exerciseController.getExerciseType = async function(exerciseTypeId) {
    try {
        return await ExerciseType.findById(exerciseTypeId);
    } catch (error) {
        throw error;
    }
};

// Update exercise type
exerciseController.updateExerciseType = async function(exerciseTypeId, updatedData) {
    try {
        return await ExerciseType.findByIdAndUpdate(exerciseTypeId, updatedData, { new: true });
    } catch (error) {
        throw error;
    }
};

// Delete exercise type
exerciseController.deleteExerciseType = async function(exerciseTypeId) {
    try {
        return await ExerciseType.findByIdAndDelete(exerciseTypeId);
    } catch (error) {
        throw error;
    }
};

module.exports = exerciseController;
