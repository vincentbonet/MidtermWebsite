const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    // Add other activity fields as needed
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const Activity = mongoose.model('Activity', schema);

module.exports = Activity;
