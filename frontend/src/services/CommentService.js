"use strict";

import HttpService from './HttpService';

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

    static deleteComment(id) {
        return new Promise((resolve, reject) => {
            HttpService.remove(`${CommentService.baseURL()}/${id}`, function(data) {
                if(data.message != undefined) {
                    resolve(data.message);
                }
                else {
                    reject('Error while deleting');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static createComment(comment) {
        return new Promise((resolve, reject) => {
             HttpService.post(`${this.baseURL()}`, comment, function(data) {
                 resolve(data);
             }, function(textStatus) {
                 reject(textStatus);
             });
         });
    }

    static editComments(comment) {
        comment.id = Math.floor((Math.random() * 100000000) + 1).toString();
        /*movie.posters = {
            thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
            original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
        };*/
        return new Promise((resolve, reject) => {
            HttpService.post(CommentService.baseURL(), comment, function(data) {
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