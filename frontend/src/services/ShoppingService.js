"use strict";

import HttpService from './HttpService';

export default class ShoppingService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/cartOrder" }


    static addTicketToCart(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    //userID to load cart
    static getCart(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingService.baseURL()}/cart/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving shopping cart');
                }
            }, function(textStatus) {
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


    static deleteCartTicket(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${TicketService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting item');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

}