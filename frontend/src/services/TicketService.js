"use strict";

import HttpService from './HttpService';
import AttractionService from "./AttractionService";

export default class TicketService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/ticket" }// API routes

    static updatestock(attractionId, stock, date) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${TicketService.baseURL()}/stock`,{attractionId, stock, date},function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
    static getTickets(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getTicket(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${TicketService.baseURL()}/readdetail/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving ticket');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static updateTicket(ticket) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${ticket._id}`, ticket, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static checksale(fromdate, todate, attractionId) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${TicketService.baseURL()}/checksale`,{fromdate, todate, attractionId}, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
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
            HttpService.post(TicketService.baseURL(), movie, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}