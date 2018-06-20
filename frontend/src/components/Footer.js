"use strict";

import React from 'react';
import Styled from 'styled-components';
import {Button, FontIcon} from 'react-md';

//need new react-md Footer
class PlainFooter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <p>© {new Date().getFullYear()} DiDoo.com All rights reserved.</p>
            </div>
        );
    }
}

export const Footer = Styled(PlainFooter)`
    max-height: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    background: #4caf50;
    > p {
        color: white;
        text-weight: bold;
        text-align: center;
        margin-top: 8px;
`;