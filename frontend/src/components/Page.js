"use strict";

import React from 'react';
import { Footer } from './Footer';
import NavigationMenu from './NavigationMenu';
import UserService from  '../services/UserService';

export default class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            user: UserService.getCurrentUser(),
            userRole: '',
        }
    }

    componentDidMount(){
       this.setState({
           title: document.title,
       });

    }

    render() {
        return (
            <section>
                {/*set user role below*/}

                <NavigationMenu title={this.state.title} userRole={this.state.userRole = this.state.user.status}/>

                {this.props.children}
                <Footer />
            </section>
        );
    }
}