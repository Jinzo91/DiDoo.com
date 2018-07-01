"use strict";

import React from 'react';
import {TableRow, TableColumn, FontIcon, Button, Avatar, Media} from 'react-md';
import {Link} from 'react-router-dom';
import {SimpleLink} from '../SimpleLink';

import UserService from '../../services/UserService';


export class CartListRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><SimpleLink
                    to={`/attraction/${this.props.cart.attraction._id}`}>{this.props.cart.attraction.title}</SimpleLink></TableColumn>
                <TableColumn>{this.props.cart.quantity}</TableColumn>
                <TableColumn>{(new Date(this.props.cart.ticket.date)).toLocaleString("en-US")}</TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Link
                        to={`/mycart`}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>mode_edit</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.cart._id)}
                                         icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}