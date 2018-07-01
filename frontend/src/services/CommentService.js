"use strict";

import HttpService from './HttpService';
import AttractionService from "./AttractionService";

export default class CommentService {

    constructor(){
    }

    static baseURL() {return "http://localhost:3000/comment" }//後端

    /*static getComments(){
        return new Promise((resolve, reject) => {
            HttpService.get(`${CommentService.baseURL()}/visitor/:userId`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }*/





    static getCommentsUser(id) {//用user找評論
        return new Promise((resolve, reject) => {
            HttpService.get(`${CommentService.baseURL()}/visitor/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving comment');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getCommentsAttraction(id) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${CommentService.baseURL()}/:${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving comment');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static deleteComment(commentId) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${CommentService.baseURL()}/${commentId}`, function(data) {
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

    static createComment(userId,attractionId,context) {
        return new Promise((resolve, reject) => {
             HttpService.post(`${this.baseURL()}`, {userId,attractionId,context}, function(data) {
                 resolve(data);
             }, function(textStatus) {
                 reject(textStatus);
             });
         });
    }


    static getCommentsbyAttration(id) {//用attraction找評論
        return new Promise((resolve, reject) => {
            HttpService.get(`${CommentService.baseURL()}/${id}`, function(data) {
                if(data != undefined || Object.keys(data).length !== 0) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving comment');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}