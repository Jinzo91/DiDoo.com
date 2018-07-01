"use strict";

import HttpService from './HttpService';

export default class ShoppingService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/cartOrder/"
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


    static listCart(userId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingService.baseURL()}/cart/${userId}`, function(data) {
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

    static buyall(userId) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingService.baseURL()}/buyall/${userId}`, function(data) {
                resolve(data);
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



    static deleteCartItem(cartId) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${ShoppingService.baseURL()}/cart/${cartId}`, function (data) {
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
    static increaseCartQuantity(cartOrderId) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${ShoppingService.baseURL()}/increase`, {cartOrderId},function (data) {
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

    static decreaseCartQuantity(cartOrderId) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${ShoppingService.baseURL()}/decrease`, {cartOrderId},function (data) {
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

    static returnTicket(ticket) {
        /*return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${movie._id}`, movie, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });*/
    }
}