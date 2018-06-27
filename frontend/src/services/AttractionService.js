"use strict";

import HttpService from './HttpService';

export default class AttractionService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/attraction" }//后端

    static getAttractions(){
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getPreAttractions(){
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/pre`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttraction(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/readdetail/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attraction');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteAttractions(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${AttractionService.baseURL()}/${id}`, function(data) {
                if(data != undefined) {
                    resolve(data);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static approveAttractions(id) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${AttractionService.baseURL()}/approve/${id}`,{}, function(data) {
                console.log(data);
                if(data != undefined) {
                    resolve(data);
                }
                else {
                    reject('Error while approving');
                }
            }, function(textStatus) {
                console.log(textStatus)
                reject(textStatus);
            });
        });
    }

    static updateAttractions(attraction) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${attraction._id}`, attraction, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createAttractions(attraction) {
        /*attraction.posters = {
            thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        };*/
        return new Promise((resolve, reject) => {
            HttpService.post(AttractionService.baseURL(),attraction, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttractionsUser(id) {//用user找評論
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/visitor/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attraction');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttractionbysearch(title) {
        return new Promise((resolve, reject) => {//往哪里请求， 用到httpservice
            HttpService.get(`${AttractionService.baseURL()}/search?title=${title}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attraction');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    static getAttractionDetail(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/readdetail/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving movie');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    static filterattraction(district,type,price) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${AttractionService.baseURL()}/filter`,{district,type,price}, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}