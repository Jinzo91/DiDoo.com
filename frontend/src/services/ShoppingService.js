"use strict";

import HttpService from './HttpService';

export default class ShoppingService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/cartOrder"
    }

    static addToCart(userId, attractionId, quantity, date) {
        return new Promise((resolve, reject) => {
            HttpService.post(this.baseURL(),{userId, attractionId, quantity, date},function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getTickets() {
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getCart(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingService.baseURL()}/cart/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving shopping cart');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getOrder(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving order list');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


    static deleteCartItem(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${TicketService.baseURL()}/${id}`, function (data) {
                if (data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting item');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static returnTicket(ticket) {
        /*return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${movie._id}`, movie, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });*/
    }

    static createComments(ticket) {
        ticket.id = Math.floor((Math.random() * 100000000) + 1).toString();
        /*movie.posters = {
            thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        };*/
        return new Promise((resolve, reject) => {
            HttpService.post(TicketService.baseURL(), movie, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}