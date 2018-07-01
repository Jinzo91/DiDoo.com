"use strict";

import HttpService from './HttpService';
import AttractionService from "./AttractionService";

export default class TicketService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/ticket"
    }// API routes

    static updatestock(attractionId, stock, date) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${TicketService.baseURL()}/stock`, {attractionId, stock, date}, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static readstock(attractionId, date) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${TicketService.baseURL()}/readstock`, {attractionId, date}, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static remainingtickets(attractionId, date) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${TicketService.baseURL()}/remainingticket`, {attractionId, date}, function (data) {
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

    static getTicket(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${TicketService.baseURL()}/readdetail/${id}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving ticket');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateTicket(ticket) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${ticket._id}`, ticket, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static checksale(fromdate, todate, attractionId) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${TicketService.baseURL()}/checksale`, {fromdate, todate, attractionId}, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

}