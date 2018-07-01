"use strict";

import React from 'react';
import {TableRow, TableColumn, FontIcon, Button, Avatar, Media, MediaOverlay} from 'react-md';
import {Link} from 'react-router-dom';
import {SimpleLink} from '../SimpleLink';
import ShoppingService from "../../services/ShoppingService";
import UserService from '../../services/UserService';


export class ShoppingCartRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: props.cart.quantity,
            //price:(props.cart.quantity)*(props.cart.attraction.price)
        }

    }
    incrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1,
            //price:(this.state.quantity + 1)*(this.props.cart.attracion.price)
        })
        ShoppingService.increaseCartQuantity(this.props.cart._id);
    }

    decrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1,
            //price:(this.state.quantity - 1)*(this.props.cart.attracion.price)
        })
        ShoppingService.decreaseCartQuantity(this.props.cart._id);
    }
    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <TableRow style={{ background: 'white', backgroundColor:'rgba(255, 255, 255, 0.7)',display: 'flex', height: '220px', minWidth: '900px', width: '70%', marginTop: '20px'}} key={this.props.key}>
                <TableColumn style={{marginTop: '30px'}}>
                    <Media style={{ width: 160, height: 160 }} aspectRatio="4-3">
                        <img src={this.props.cart.attraction.posters.original}/>
                    </Media>
                </TableColumn>
                <TableColumn style={{marginLeft: '50px', marginTop: '100px', width: '10%'}}><SimpleLink style={{fontWeight:'bold',fontSize:'20px',fontFamily:'San Francisco',}}
                    to={`/attraction/${this.props.cart.attraction._id}`}>{this.props.cart.attraction.title}</SimpleLink></TableColumn>
                <TableColumn style={{marginLeft: 'auto', fontSize:'20px',marginTop: '100px',fontFamily:'San Francisco', textAlign: 'center', width: '10%'}}>{(new Date(this.props.cart.ticket.date)).toLocaleString("en-GB").slice(0, 10)}</TableColumn>
                <TableColumn style={{marginLeft: '50px', fontSize:'20px',marginTop: '100px',fontFamily:'San Francisco', textAlign: 'center', width: '10%'}}>Quantity: {this.state.quantity}</TableColumn>
                <TableColumn style={{marginLeft: 'auto', marginTop: '100px', textAlign: 'center', width: '10%'}}>
                    <Button style={{marginLeft: '-10px', marginTop: '-13px'}} icon onClick={this.incrementQuantity}>add_circle</Button>
                    <Button style={{marginLeft: '-10px', marginTop: '-13px'}} icon  disabled={this.state.quantity < 2} onClick={this.decrementQuantity}>remove_circle</Button>
                </TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn style={{marginLeft: '50px', marginTop: '97px', width: '50px'}}><Button style={{marginTop: '-10px'}} onClick={() => this.props.onDelete(this.props.cart._id)} icon>delete</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>delete</FontIcon></Link></TableColumn>
                }
                <TableColumn style={{marginLeft: 'auto', fontFamily:'San Francisco',fontSize:'20px',marginTop: '100px', fontWeight:'bold',textAlign: 'center', width: '10%'}}>Price: {(this.state.quantity) * (this.props.cart.attraction.price)} ¥</TableColumn>

            </TableRow>
            </div>
        );
    }
}