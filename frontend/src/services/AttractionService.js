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
    static getAttractionbysearch(title) {
        return new Promise((resolve, reject) => {//往哪里请求， 用到httpservice
            HttpService.get(`${AttractionService.baseURL()}/search?title=${title}`, function(data) {
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
}