"use strict";//看mongoose options,

const mongoose = require('mongoose');
// Define the Comment schema

const CommentSchema  = new mongoose.Schema({

    userId:  {
        type: mongoose.Schema.Types.ObjectId,
        required :true
    },
    attractionId: {
        type: mongoose.Schema.Types.ObjectId,
        required :true
    },
    context: {
        type:String,
        required:true,
    }

});
CommentSchema.set('versionKey', false);
CommentSchema.set('timestamps', true);
// Export the Comment model
module.exports = mongoose.model('Comment', CommentSchema);