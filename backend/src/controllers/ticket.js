"use strict";

const TicketModel = require('../models/ticket');
const CartOrderModel = require('../models/cartOrder');

const create = async (req, res) => {
    const {
        ticketInfo
    } = req.body;


    const tickets = await TicketModel.bulkWrite(
        ticketInfo.map(info => ({
            insertOne: {
                document: info
            }
        }))
    );
    res.status(200).json(tickets);
};

const readdetailinfo = async (req, res) => {
    const {
        ticketId,
    } = req.params;
    const ticket = await TicketModel.findById(ticketId);

    res.status(200).json(ticket);
};

const update = async (req, res) => {
    const {
        ticketId,
        date,
        stock
    } = req.body;
    const ticket = await TicketModel.findByIdAndUpdate(ticketId,
        {
            $set: {
                date,
                stock,
            },
        }, {
            new: true
        });
    res.status(200).json(ticket);
};

const updatestock = async (req, res) => {
    const {
        attractionId,
        date,
        stock,
    } = req.body;
    const ticket = await TicketModel.findOneAndUpdate({attractionId: attractionId, date: date},
        {
            $set: {
                stock,
            },
        }, {
            new: true
        });
    res.status(200).json(ticket);
};

const readstock = async (req, res) => {
    const {
        attractionId,
        date,
    } = req.body;
    const ticket = await TicketModel.findOne({attractionId: attractionId, date: date});
    res.status(200).json(ticket);
};

const remove = async (req, res) => {
    const {
        ticketId,
    } = req.body;
    await TicketModel.findByIdAndRemove(ticketId);
    res.status(200).json({message: `ticket with id${ticketId} was deleted`});
};


const list = async (req, res) => {
    const {
        attractionId,
    } = req.params;
    const tickets = await TicketModel.find({attractionId});
    res.status(200).json(tickets);
};

const remainingticket = async (req, res) => {
    const {
        attractionId,
        date,
    } = req.body;
    const ticket = await TicketModel.findOne({attractionId: attractionId, date: date});
    const orders = await CartOrderModel.find({
        ticketId: ticket._id,
        status: 'inOrder',
    });
    let totalsale = 0;
    let remainingticket;

    orders.forEach((order) => {
        totalsale = totalsale + order.quantity

    });

    remainingticket = ticket.stock - totalsale;
    res.status(200).json(remainingticket);
};
const checksale = async (req, res) => {
    const {
        fromdate,
        todate,
        attractionId,
    } = req.body;


    let totalsale = 0;

    const tickets = await TicketModel.find({
        attractionId,
        date: {
            $lte: new Date(todate),
            $gte: new Date(fromdate)
        }
    });

    const orders = await CartOrderModel.find({
        ticketId: {
            $in: tickets.map((ticket) => ticket._id)//
        }
    });
    orders.forEach((order) => {
        totalsale += order.quantity;
    });
    res.status(200).json(totalsale);
};

module.exports = {
    create,
    update,
    updatestock,
    readstock,
    remove,
    readdetailinfo,
    list,
    remainingticket,
    checksale,
};