"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {MenuButton, ListItem, Avatar, FontIcon, Button, DialogContainer, IconSeparator} from 'react-md';
import {withRouter} from 'react-router-dom'
import UserService from '../../services/UserService';
import ShoppingService from "../../services/ShoppingService";
import {CartListRow} from "./CartListRow";
import Page from '../Page'
import {ShoppingCartRow} from "./ShoppingCartRow";
import Background from '../../images/AdminBG.png';
import AttractionService from "../../services/AttractionService";

const Item = ({label, children}) => (
    <IconSeparator labelStyle={{color: 'white', marginLeft: "-20px"}} label={label} iconBefore component="li"
                   className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);


const ShopCartList = ({data, onDelete}) => (
    <div>{data.map((cart, i) => <ShoppingCartRow key={i} cart={cart} onDelete={(id) => onDelete(id)}/>)}</div>
);


class ShoppingCartList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    state = {visible: false};

    show = () => {
        this.setState({visible: true});
    };

    hide = () => {
        this.setState({visible: false});
    };

    componentWillMount() {
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
        console.log(this.state.data)
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

    buyall() {
        let userId = UserService.getCurrentUser().id;
        ShoppingService.buyall(userId).then((data) => {
            window.location.reload()
        }).catch((e) => {
            console.error(e + ' Error while buying all');
            this.setState(Object.assign({}, this.state, {error: 'Error while buying all'}));
        });
    }

    render() {
        if (this.state.data.length === 0) {
            return (<Page>
                <img src={Background} className="bg"/>
                <h2 style={{
                    marginTop: '350px',
                    position: 'relative',
                    color: 'grey',
                    textAlign: 'center',
                    fontSize: '70px'
                }}>Your cart is empty</h2>
            </Page>);
        }

        const {visible} = this.state;
        const actions = [];
        actions.push({secondary: true, children: 'Cancel', onClick: this.hide});
        actions.push(<Button flat primary onClick={() => this.buyall()}>Purchase</Button>);
        return (
            <Page>
                <img src={Background} className="bg"/>
                <ShopCartList data={this.state.data} onDelete={(cartId) => this.deleteCartItem(cartId)}/>

                <Button flat primary swapTheming style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    height: '50px',
                    width: '50px',
                    position: 'center',
                    marginLeft: '48%',
                    marginTop: '30px'
                }}
                        onClick={this.show}>BUY</Button>
                <DialogContainer
                    id="simple-action-dialog"
                    visible={visible}
                    onHide={this.hide}
                    actions={actions}
                    title="Sure to buy?"
                >
                    <p>
                        Your tickets will delivered to your address. We accept cash and EC-card for payment.
                    </p>
                </DialogContainer>
            </Page>
        );
    }
}


export default withRouter(ShoppingCartList);
