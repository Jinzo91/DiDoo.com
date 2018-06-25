"use strict";

import React from 'react';
import { Footer } from './Footer';
import NavigationMenu from './NavigationMenu';


export default class Page extends React.Component {

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
                {/*set user role below*/}
                <NavigationMenu title={this.state.title} userRole='visitor'/>
                {this.props.children}
                <Footer />
            </section>
        );
    }
}