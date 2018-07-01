"use strict";

import React from 'react';

import UserSignup from '../components/UserSignup';
import Background from '../images/bamboo.jpg';
import UserService from '../services/UserService';


export class UserSignupView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    signup(user) {
        UserService.register(user.username, user.password).then((data) => {
            this.props.history.push('/');
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        })
    }

    render() {
        return (
            <div>
                <img src={Background} className="bg" />
                <UserSignup onSubmit={(user) => this.signup(user)} error={this.state.error}></UserSignup>
            </div>
        );
    }
}