"use strict";

const CommentModel = require('../models/comment');
const AttractionModel = require('../models/attraction');
const UserModel = require('../models/user');

const addcomment = async (req, res) => {
    const {
        userId,
        attractionId,
        context,
    } = req.body;

    const comment = await CommentModel.create({userId, attractionId, context});

    res.status(200).json(comment);

};
const removecomment = async (req, res) => {
    const {
        commentId,
    } = req.params;
    await CommentModel.findByIdAndRemove(commentId);

    res.status(200).json({message: `comment with id${commentId} was deleted`});

};
const listcommentbyattraction = async (req, res) => {
    const {
        attractionId,
    } = req.params;
    let comments = await CommentModel.find({attractionId}, {userId: 1, context: 1, createdAt: 1});//暫時不要createdAt: 1
    const users = await UserModel.find({
        _id: {
            $in: comments.map(comment => comment.userId)
        }
    }, {username: 1});
    comments = comments.map(comment => {
        comment = comment.toObject();
        comment.user = users.filter(attraction => attraction._id.toString() === comment.userId.toString())[0].toObject();
        return comment
    });
    res.status(200).json(comments);
};
const listcommentbyvisitor = async (req, res) => {
    const {
        userId,
    } = req.params;
    let comments = await CommentModel.find({userId}, {attractionId: 1, context: 1});
    const attractions = await AttractionModel.find({
        _id: {
            $in: comments.map(comment => comment.attractionId)
        }
    }, {title: 1, posters: 1});
    comments = comments.map(comment => {
        comment = comment.toObject();
        comment.attraction = attractions.filter(user => user._id.toString() === comment.attractionId.toString())[0].toObject();
        return comment
    });
    res.status(200).json(comments);
};

module.exports = {
    addcomment,
    removecomment,
    listcommentbyattraction,
    listcommentbyvisitor,
};