"use strict";

import React from 'react';

import UserLogin from '../components/UserLogin';

import UserService from '../services/UserService';


export class UserLoginView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    login(user) {
        UserService.login(user.username, user.password).then((data) => {
            this.props.history.push('/');
            /*this.props.userRole === 'visitor' && this.props.history.push('/');
            this.props.userRole === 'admin' && this.props.history.push('/admin');
            this.props.userRole === 'ta' && this.props.history.push('/ta');*/
        }).catch((e) => {
            console.error(e);
            this.setState({
                error: e
            });
        });
    }

    render() {
        return (
          <UserLogin onSubmit={(user) => this.login(user)} error={this.state.error}/>
        );
    }
}