"use strict";

import HttpService from "./HttpService";
import AttractionService from "./AttractionService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://localhost:3000/auth"; }

    static register(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/register`, {
                username: user,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(user, pass) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/login`, {
                username: user,
                password: pass
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout(){
        window.localStorage.removeItem('jwtToken');
    }

    //gets data from jwtToken, which is prefilled with user data. Data from database has to be added to token beforehand.
    static getCurrentUser() {
        let token = window.localStorage['jwtToken'];
        if (!token) return {};

        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return {
            id : JSON.parse(window.atob(base64)).id,
            username: JSON.parse(window.atob(base64)).username,
            status: JSON.parse(window.atob(base64)).status,
        };
    }

    /*//gets user data from DATABASE
    static findUser(username){
        return new Promise((resolve, reject) => {
            HttpService.get(`${UserService.baseURL()}/findUser/${username}`, function(data) {
                if(data != undefined) {
                    resolve(data);
                }
                else {
                    reject('Error while retrieving comment');
                }
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }*/

    static isAuthenticated() {
        return !!window.localStorage['jwtToken'];
    }
}