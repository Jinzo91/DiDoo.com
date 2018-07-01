"use strict";

import React from 'react';

import UserLogin from '../components/UserLogin';
import Background from '../images/bamboo.jpg';
import UserService from '../services/UserService';


export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
            <div>
                <img src={Background} className="bg"/>
                <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}/>
            </div>
        );
    }
}