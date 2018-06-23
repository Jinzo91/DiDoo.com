"use strict";

import React from 'react';

import { Footer } from '../Footer';
import NavigationMenu from './AdminNavigationMenu';


export default class AdminPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    componentDidMount(){
        this.setState({
            title: document.title
        });
    }

    render() {
        return (
            <section>
                <NavigationMenu title={this.state.title}/>
                {/*<Header title={this.state.title} />*/}
                {this.props.children}

                <Footer />
            </section>
        );
    }
}