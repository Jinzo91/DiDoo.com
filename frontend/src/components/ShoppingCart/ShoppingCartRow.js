"use strict";

import React from 'react';
import {TableRow, TableColumn, FontIcon, Button, Avatar, Media, MediaOverlay} from 'react-md';
import {Link} from 'react-router-dom';
import {SimpleLink} from '../SimpleLink';

import UserService from '../../services/UserService';


export class ShoppingCartRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <TableRow style={{display: 'flex', height: '220px', minWidth: '900px', width: '70%', marginTop: '20px', borderStyle: 'solid', borderColor: 'green'}} key={this.props.key}>
                <TableColumn style={{marginTop: '30px'}}>
                    <Media style={{ width: 160, height: 160 }} aspectRatio="4-3">
                        <img src={this.props.cart.attraction.posters.original}/>
                    </Media>
                </TableColumn>
                <TableColumn style={{marginLeft: '50px', marginTop: '100px', width: '10%'}}><SimpleLink
                    to={`/attraction/${this.props.cart.attraction._id}`}>{this.props.cart.attraction.title}</SimpleLink></TableColumn>
                <TableColumn style={{marginLeft: 'auto', marginTop: '100px', textAlign: 'center', width: '10%'}}>{(new Date(this.props.cart.ticket.date)).toLocaleString("en-GB").slice(0, 10)}</TableColumn>
                <TableColumn style={{marginLeft: '50px', marginTop: '100px', textAlign: 'center', width: '10%'}}>Quantity: {this.props.cart.quantity}</TableColumn>
                <TableColumn style={{marginLeft: 'auto', marginTop: '100px', textAlign: 'center', width: '10%'}}>
                    <Button style={{marginLeft: '-10px', marginTop: '-13px'}} icon>add_circle</Button>
                    <Button style={{marginLeft: '-10px', marginTop: '-13px'}} icon>remove_circle</Button>
                </TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn style={{marginLeft: '50px', marginTop: '97px', width: '50px'}}><Button style={{marginTop: '-10px'}} onClick={() => this.props.onDelete(this.props.cart._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }
                <TableColumn style={{marginLeft: 'auto', marginTop: '100px', textAlign: 'center', width: '10%'}}>Price: {(this.props.cart.quantity) * (this.props.cart.attraction.price)} ¥</TableColumn>

            </TableRow>
            </div>
        );
    }
}