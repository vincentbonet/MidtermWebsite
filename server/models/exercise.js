const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    // Add other exercise type fields as needed
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const ExerciseType = mongoose.model('ExerciseType', schema);

module.exports = ExerciseType;
