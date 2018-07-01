"use strict";

import React from 'react';

import OrderList from '../../components/Customer/OrderList';
import ShoppingService from "../../services/ShoppingService";
import UserService from "../../services/UserService";


export class MyOrderView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            user: UserService.getCurrentUser()
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        let id = UserService.getCurrentUser().id;
        ShoppingService.getOrder(id).then(data => {
            this.setState({
                data: [...data],
                loading: false,
            });
        }).catch((e) => {
            console.error(e);
        });

    }


    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <OrderList data={this.state.data}/>
        );
    }
}
