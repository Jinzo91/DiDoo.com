"use strict";

const AttractionModel = require('../models/attraction');//这是啥，调用吗

const search = async (req, res) => {
    const title = req.query.title;//url?后面的
    const titleRegex = new RegExp(title, 'g');
    const attractions = await AttractionModel.find({
        $or: [
            {title: titleRegex},
            {type: titleRegex}
        ], status: "hasapproved"
    }, {title: 1, type: 1, address: 1, introduction: 1, rating: 1, price: 1, posters: 1});
    res.status(200).json(attractions);
};
const filterattraction = async (req, res) => {
    const {
        attractionIds,
        district,
        type,
        price,
    } = req.body;

    const mapPriceRange = (price) => {
        if (price === '0') {
            return {price: {"$lte": 24, "$gte": 0}};
        } else if (price === '25') {
            return {price: {"$lte": 49, "$gte": 25}};
        } else if (price === '50') {
            return {price: {"$lte": 74, "$gte": 50}};
        } else if (price === '75') {
            return {price: {"$lte": 100, "$gte": 75}};
        }
    }

    const query = {};
    if (attractionIds.length !== 0) query._id = {$in: attractionIds};
    if (price.length !== 0) query.$or = price.map(mapPriceRange);
    if (district.length !== 0) query.district = {$in: district};
    if (type.length !== 0) query.type = {$in: type};
    query.status = 'hasapproved';
    const attraction = await AttractionModel.find(query, {
        title: 1,
        type: 1,
        district: 1,
        address: 1,
        introduction: 1,
        rating: 1,
        price: 1,
        posters: 1
    });

    res.status(200).json(attraction);
};


const createpreattraction = async (req, res) => {

    const attraction = await AttractionModel.create(req.body);

    res.status(200).json(attraction);
};

const updateattraction = async (req, res) => {

    const {attractionId} = req.params;

    const attraction = await AttractionModel.findByIdAndUpdate(attractionId, {
        $set: req.body
    }, {
        new: true
    });
    res.status(200).json(attraction);
};

const removeattraction = async (req, res) => {
    const {
        attractionId,
    } = req.params;
    await AttractionModel.findByIdAndRemove(attractionId);
    res.status(200).json({message: `attraction with id${attractionId} was deleted`});
};

const approveattraction = async (req, res) => {
    const {
        attractionId,
    } = req.params;
    const attraction = await AttractionModel.findByIdAndUpdate(attractionId, {status: 'hasapproved',}, {
        new: true
    });
    res.status(200).json(attraction);
};

const readdetailinfo = async (req, res) => {
    const {
        attractionId,
    } = req.params;
    const attraction = await AttractionModel.findById(attractionId);

    res.status(200).json(attraction);
};

const readgeneralinfo = async (req, res) => {
    const {
        attractionId,
    } = req.params;
    const attraction = await AttractionModel.findById(attractionId, {
        title: 1,
        type: 1,
        address: 1,
        introduction: 1,
        rating: 1,
        price: 1,
        posters: 1
    });

    res.status(200).json(attraction);
};
const listpreattraction = async (req, res) => {

    const attractions = await AttractionModel.find({status: "waitapproved"}, {
        title: 1,
        type: 1,
        address: 1,
        introduction: 1,
        rating: 1,
        price: 1,
        posters: 1
    });
    res.status(200).send(attractions);
};

const listattraction = async (req, res) => {

    const attractions = await AttractionModel.find({status: "hasapproved"}, {
        title: 1,
        type: 1,
        address: 1,
        introduction: 1,
        rating: 1,
        price: 1,
        posters: 1
    });
    res.status(200).send(attractions);
};

const getAttractionidbytitle = async (req, res) => {
    const {
        attractionTitle,
    } = req.params;
    const attraction = await AttractionModel.findOne({title: attractionTitle});

    res.status(200).json(attraction);
};


module.exports = {
    search,
    filterattraction,
    createpreattraction,
    updateattraction,
    removeattraction,
    approveattraction,
    readdetailinfo,
    readgeneralinfo,
    listpreattraction,
    listattraction,
    getAttractionidbytitle,
};