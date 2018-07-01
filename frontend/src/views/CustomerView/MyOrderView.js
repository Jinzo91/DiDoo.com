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
            user: UserService.getCurrentUser() //獲得當前用戶id
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        //let id = this.state.user.id//'5b22622b0fa7313444b36628';
        let id = UserService.getCurrentUser().id;//'5b22622b0fa7313444b36628';
        ShoppingService.getOrder(id).then(data => {  // 從SERVICE裏抓數據放入data
            this.setState({
                data: [...data],
                loading: false,
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    /*deleteTicket(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        ShoppingService.deleteTicket(id).then((message) => {

            let ticketIndex = this.state.data.map(movie => movie['_id']).indexOf(id);
            let ticket = this.state.data;
            ticket.splice(ticketIndex, 1);
            this.setState({
                data: [...tick()],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }*/


    returnTicket(id){

    }

    commentTicket(id){

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
