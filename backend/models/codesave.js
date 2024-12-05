// models/codesave.js
const mongoose = require('mongoose');

// Define the schema for code saving
const codesaveSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        default: "", // Optional: Set a default value if code is not always provided
    },
    codeid: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the creation date
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
});

// Create the Mongoose model for code saving
const CodeModel = mongoose.model('Code', codesaveSchema);

// Export the model
module.exports = CodeModel;
