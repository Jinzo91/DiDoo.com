"use strict";//看mongoose options,

const mongoose = require('mongoose');

// Define the order schema

const CartorderSchema = new mongoose.Schema({

    quantity: {
        type: Number,
        required: true
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: ['inCart', 'inOrder'],
        default: 'inCart',
    },

});
CartorderSchema.set('versionKey', false);
CartorderSchema.set('timestamps', true);
// Export the order model
module.exports = mongoose.model('CartOrder', CartorderSchema);