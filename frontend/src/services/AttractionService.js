"use strict";

import HttpService from './HttpService';

export default class AttractionService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/attraction"
    }

    static getAttractions() {
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getPreAttractions() {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/pre`, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttraction(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/readdetail/${id}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attraction');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteAttractions(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${AttractionService.baseURL()}/${id}`, function (data) {
                if (data != undefined) {
                    resolve(data);
                }
                else {
                    reject('Error while deleting');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static approveAttractions(id) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${AttractionService.baseURL()}/approve/${id}`, {}, function (data) {
                /*console.log(data);*/
                if (data != undefined) {
                    resolve(data);
                }
                else {
                    reject('Error while approving');
                }
            }, function (textStatus) {
                console.log(textStatus)
                reject(textStatus);
            });
        });
    }

    static updateAttractions(attraction) {
        return new Promise((resolve, reject) => {
            HttpService.put(`${this.baseURL()}/${attraction._id}`, attraction, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static createAttractions(attraction) {
        attraction.posters = {
            detailed: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1530467488&di=045b47d23a2cdff2582a159c7864053a&src=http://image.naic.org.cn/uploadfile/2017/0731/1501481954471681.jpg",
            original: "https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1530467488&di=045b47d23a2cdff2582a159c7864053a&src=http://image.naic.org.cn/uploadfile/2017/0731/1501481954471681.jpg"
        };
        return new Promise((resolve, reject) => {
            HttpService.post(AttractionService.baseURL(), attraction, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttractionsUser(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/visitor/${id}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attraction');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttractionidbytitle(title) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/title/${title}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attractionId');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttractionbysearch(title) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/search?title=${title}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving attraction');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static getAttractionDetail(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${AttractionService.baseURL()}/readdetail/${id}`, function (data) {
                if (data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving movie');
                }
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }

    static filterattraction(attractionIds, district, type, price) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${AttractionService.baseURL()}/filter`, {
                attractionIds,
                district,
                type,
                price
            }, function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }
}