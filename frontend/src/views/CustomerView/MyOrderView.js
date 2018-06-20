"use strict";

import React from 'react';

import { OrderList } from '../../components/Customer/OrderList';

import TicketService from '../../services/TicketService';


export class MyOrderView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        TicketService.getTickets().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    deleteTicket(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        TicketService.deleteTicket(id).then((message) => {

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
    }


    returnTicket(id){

    }

    commentTicket(id){

    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

       return (
            <OrderList data={this.state.data} onDelete={(id) => this.deleteMovie(id)}/>
        );
    }
}
