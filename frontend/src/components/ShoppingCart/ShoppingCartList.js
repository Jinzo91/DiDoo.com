"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {MenuButton, ListItem, Avatar, FontIcon, Button, IconSeparator} from 'react-md';
import { withRouter } from 'react-router-dom'
import UserService from  '../../services/UserService';
import ShoppingService from "../../services/ShoppingService";
import {CartListRow} from "./CartListRow";
import Page from '../Page'
import {ShoppingCartRow} from "./ShoppingCartRow";

const Item = ({ label, children }) => (
    <IconSeparator labelStyle={{color: 'white', marginLeft: "-20px"}} label={label} iconBefore component="li" className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);


const ShopCartList = ({data, onDelete}) => (
    <div>{data.map((cart, i) => <ShoppingCartRow key={i} cart={cart} onDelete={(id) => onDelete(id)} />)}</div>
);


class ShoppingCartList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        let userId = UserService.getCurrentUser().id;

        ShoppingService.listCart(userId).then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteCartItem(cartId) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        ShoppingService.deleteCartItem(cartId).then((message) => {

            let cartIndex = this.state.data.map(cart => cart['_id']).indexOf(cartId);
            let carts = this.state.data;
            carts.splice(cartIndex, 1);
            this.setState({
                data: [...carts],
                loading: false
            });
            console.log(message)
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (
            <Page>
                img
                <ShopCartList data={this.state.data} onDelete={(cartId) => this.deleteCartItem(cartId)}/>
                <Button flat secondary swapTheming style={{margin: 'auto'}}>BUY</Button>
            </Page>
        );
    }
}


export default withRouter(ShoppingCartList);
