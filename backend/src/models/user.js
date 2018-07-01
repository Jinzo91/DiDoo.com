"use strict";

const mongoose = require('mongoose');

// Define the user schema

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['visitor', 'admin', 'ta'],
        default: 'visitor',
    },
});

UserSchema.set('versionKey', false);

// Export the User model
module.exports = mongoose.model('User', UserSchema);