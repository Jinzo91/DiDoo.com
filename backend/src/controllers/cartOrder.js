"use strict";

const CartOrderModel = require('../models/cartOrder');//这是啥，调用吗
const TicketModel = require('../models/ticket');
const AttractionModel = require('../models/attraction');//这是啥，调用吗
const addtocart = async (req, res) => {
    const {
        quantity,userId,date,attractionId
    } = req.body;
    const ticket =  await TicketModel.findOne({attractionId:attractionId, date:date});
    const cart = await CartOrderModel.create({
        quantity: quantity || 1,
        ticketId:ticket._id,
        userId:userId,
    });

    res.status(200).json(cart);
};

const removefromcart = async (req, res) => {
    const {
        cartOrderId
    } = req.params;

    await CartOrderModel.findByIdAndRemove(cartOrderId);
    res.status(200).json({message: `cart with id${cartOrderId} was deleted`});
};

const listcart = async (req, res) => {
    const{
        userId
    } = req.params;
    let carts = await CartOrderModel.find({userId, status:"inCart"},{quantity:1,ticketId:1,createdAt:1});
    const tickets = await TicketModel.find({
        _id: {
            $in: carts.map(cart => cart.ticketId)
        }
    },{date:1,attractionId:1});
    const attractions = await AttractionModel.find({
        _id: {
            $in: tickets.map(ticket => ticket.attractionId)
        }
    },{title:1,posters:1,price:1});
    carts = carts.map(cart => {
        cart = cart.toObject();
        cart.ticket = tickets.filter(ticket => ticket._id.toString() === cart.ticketId.toString())[0].toObject();
        cart.attraction = attractions.filter(attraction => attraction._id.toString() === cart.ticket.attractionId.toString())[0].toObject();
        return cart
    });
    res.status(200).json(carts);

};

const listorder = async (req, res) => {
    const{
        userId
    } = req.params;
    let orders = await CartOrderModel.find({userId, status:"inOrder"},{quantity:1,ticketId:1,createdAt:1});
    const tickets = await TicketModel.find({
        _id: {
            $in: orders.map(order => order.ticketId)
        }
    },{date:1,attractionId:1});
    const attractions = await AttractionModel.find({
        _id: {
            $in: tickets.map(ticket => ticket.attractionId)
        }
    },{title:1,posters:1});
    orders = orders.map(order => {
        order = order.toObject();
        order.ticket = tickets.filter(ticket => ticket._id.toString() === order.ticketId.toString())[0].toObject();
        order.attraction = attractions.filter(attraction => attraction._id.toString() === order.ticket.attractionId.toString())[0].toObject()
        return order
    });
    res.status(200).json(orders);

};

const addtoorder = async (req, res) => {
    const {cartOrderIds} = req.body;
    const order = await CartOrderModel.findByIdAndUpdate(cartOrderId, {
        status: 'inOrder',
    },{
        new: true
    });
    res.status(200).json(order);


};
/*const create = async (req, res) => {
    const {
        ticketInfo
    } = req.body;

    updateOne: {
        filter: { name: 'Eddard Stark' },
        // If you were using the MongoDB driver directly, you'd need to do
        // `update: { $set: { title: ... } }` but mongoose adds $set for
        // you.
        update: { title: 'Hand of the King' }
    }
    const tickets = await TicketModel.bulkWrite(
        ticketInfo.map(info => ({
            updateOne: {
                update:{status: 'inOrder'}
    }}
            }
        }))
    );
    res.status(200).json(tickets);
};*/
const removefromorder = async (req, res) => {
    const {
        cartOrderId
    } = req.body;

    await CartOrderModel.findByIdAndRemove(cartOrderId);
    res.status(200).json({message: `order with id${cartOrderId} was deleted`});
};

const increaseCartQuantity = async (req, res) => {
    const {cartOrderId} = req.body;
    const cart = await CartOrderModel.findOneAndUpdate({
        _id: cartOrderId,
    }, {
        $inc: {
            quantity: 1,
        },
    }, {
            new: true
        });

    res.status(200).json(cart);
};

const decreaseCartQuantity = async (req, res) => {
    const {cartOrderId} = req.body;
    const cart = await CartOrderModel.findOneAndUpdate({
        _id: cartOrderId,
    }, {
        $inc: {
            quantity: -1,
        },
    },{
        new: true
    });

    if (cart.quantity < 1) {
        await CartOrderModel.findByIdAndRemove(cartOrderId);
        res.status(200).json({message: `order with id${cartOrderId} was deleted`});
    } else {
        res.status(200).json(cart);
    }
};
module.exports = {//这里为啥也有export
    addtocart,
    removefromcart,
    listcart,
    listorder,
    addtoorder,
    removefromorder,
    increaseCartQuantity,
    decreaseCartQuantity,
};