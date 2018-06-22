"use strict";

const AttractionModel = require('../models/attraction');//这是啥，调用吗

const search = async (req, res) => {
    const title = req.query.title;//url?后面的
    const titleRegex = new RegExp(title, 'g');
    const attractions = await AttractionModel.find({
        $or : [
            {title: titleRegex},
            {type : titleRegex}
        ]
    },{title: 1,type: 1,address: 1,introduction: 1,rating: 1 ,price:1,posters:1});
    res.status(200).json(attractions);
};
const filterattraction = async (req, res) => {
    const {
        district,
        type,
        price,
    } = req.body;
    let pricerange;
    if(price ==='0'){
        pricerange= { "$lte": 25, "$gte": 0 };
    } else if (price ==='25'){
         pricerange= { "$lte": 50, "$gte": 26 };
    } else if (price ==='50'){
         pricerange= { "$lte":75 , "$gte": 51 };
    }  else if (price ==='75'){
         pricerange= { "$lte": 100, "$gte": 76 };
    }
    const query = {};
    if (!!price ) query.price = pricerange;
    if (!!district) query.district  = district;
    if (!!type) query.type  = type;
    const attraction = await AttractionModel.find(query,{title: 1,type: 1,district:1,address: 1,introduction: 1,rating: 1 ,price:1,posters:1});

    res.status(200).json(attraction);
};


const createpreattraction = async (req, res) => {
    const {
        attractionInfo,
    } = req.body;

    const attraction = await AttractionModel.find(attractionInfo);

    res.status(200).json(attraction);
};

const updateattraction = async (req, res) => {
    const {
        attractionId,
        attractionInfo,
    } = req.body;
    const attraction = await AttractionModel.findByIdAndUpdate(attractionId, {
        $set: attractionInfo
    }, {
        new: true
    });
    res.status(200).json(attraction);
};

const removeattraction = async (req, res) => {
    const {
        attractionId,
    } = req.body;
    await AttractionModel.findByIdAndRemove(attractionId);
    res.status(200).json({message: `attraction with id${attractionId} was deleted`});
};

const approveattraction = async (req, res) => {
    const {
        attractionId,
    } = req.body;
    const attraction = await AttractionModel.findByIdAndUpdate(attractionId, {status: 'hasapproved',}, {
        new: true
    });
    res.status(200).json(attraction);
};

const readdetailinfo   = async(req, res) => {
    const {
        attractionId,
    } = req.params;
    const attraction = await AttractionModel.findById(attractionId);

    res.status(200).json(attraction);
};
const readgeneralinfo   = async(req, res) => {
    const {
        attractionId,
    } = req.params;
    const attraction = await AttractionModel.findById(attractionId,{ title: 1,type: 1,address: 1,introduction: 1,rating: 1 ,price:1,posters:1});

    res.status(200).json(attraction);
};
const listpreattraction  = async(req, res) => {

    const attractions = await AttractionModel.find({status:"waitapproved"},{title: 1,type: 1,address: 1,introduction: 1,rating: 1 ,price:1,posters:1});
    res.status(200).send(attractions);
};

const listattraction  = async(req, res) => {

    const attractions = await AttractionModel.find({status:"hasapproved"},{title: 1,type: 1,address: 1,introduction: 1,rating: 1 ,price:1,posters:1});
    res.status(200).send(attractions);
};





module.exports = {//这里为啥也有export
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
};