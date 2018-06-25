
/*
export class ManageInventoryView extends React.Component {

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
            <InventoryList data={this.state.data} onDelete={(id) => this.deleteMovie(id)}/>
        );
    }
}*/

"use strict";

import React from 'react';

import {InventoryList} from '../../components/Admin/InventoryList';

import AttractionService from '../../services/AttractionService';
import TicketService from '../../services/TicketService';

import Background from '../../images/AdminBG.png';
import '../../css/bg.css';

export class ManageInventoryView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            dataAttraction: [],
            dataTicket:[]
        };
    }

    componentWillMount()
    {
        this.setState({
            loading: true
        });

        AttractionService.getAttractions().then((data) => {
            this.setState({
                dataAttraction: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });/*获得数据，从后端*/

        TicketService.getTicket(id).then((data) => {
            this.setState({
                dataTicket: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });/*获得数据，从后端*/
    }

    updateTicket(ticket) {
            console.log(ticket);
            TicketService.updateTicket(ticket).then((ticket) => {
                this.setState({
                    dataTicket: ticket,
                    loading: false
                });
            }).catch((e) => {
                console.error(e + ' Error while updating attraction');
                this.setState(Object.assign({}, this.state, {error: 'Error while updating ticket'}));
            });
    }

    render() {

        return (
            <div>
                <img src={Background} className="bg" />
                <InventoryList dataAttraction={this.state.dataAttraction} dataTicket={this.state.dataTicket} onSubmit={(id) => this.updateTicket(id)}/>
            </div>
        );
    }
}
