"use strict";

import React from 'react';
import { Toolbar, Button, Avatar } from 'react-md';
import { withRouter } from 'react-router-dom'
import KebabMenu from './KebabMenu';
import imgURL from '../images/didoo.png';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={"header__icons"}>
                <Toolbar
                    colored
                    nav={<Button onClick={() => this.props.history.push('/')} Avatar><Avatar src={imgURL} role="presentation" suffix="green-300" /></Button>}
                    //nav={<Button onClick={() => this.props.history.push('/')} icon>home</Button>}
                    title={this.props.title}
                    actions={<KebabMenu id="toolbar-colored-kebab-menu" />}
                />
            </div>
        );
    }
};

export default withRouter(Header);