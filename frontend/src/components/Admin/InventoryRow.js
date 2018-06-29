"use strict";

import React from 'react';
import { Avatar, TableRow, TableColumn, FontIcon, Button,Card, CardTitle, CardText, Slider, TextField } from 'react-md';
import { Link } from 'react-router-dom';
import { SimpleLink } from '../SimpleLink';
import UserService from '../../services/UserService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import ShoppingService from "../../services/ShoppingService";
import TicketService from "../../services/TicketService";


export class InventoryRow extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            date: moment(),//当前时间
            stock: 0,//Service passes parameter to here 100
            title: this.props.attraction.title,
            image: this.props.attraction.posters.detailed
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleUpdateStock = this.handleUpdateStock.bind(this);

    }

    handleChangeDate(value) {

        this.setState({
            date: value.hours(0).minutes(0).seconds(0).milliseconds(0),

        });
    }
    handleUpdateStock() {
        TicketService.updatestock(this.props.attraction._id, this.state.stock,this.state.date);
    }


    render() {
        return (
            <TableRow key={this.props.key} onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                <TableColumn><Avatar src={this.props.attraction.posters.detailed} role="presentation"/></TableColumn>
                <TableColumn>{this.props.attraction.title}</TableColumn>
                <TableColumn><DatePicker
                    selected={this.state.date}
                    onChange={this.handleChangeDate} //only when value has changed
                ></DatePicker></TableColumn>
                <TableColumn>
                    <TextField
                        value={this.state.stock}
                        onChange={(value)=>{this.setState({stock: value})}}
                        type='number'
                    ></TextField>
                </TableColumn>
                    <TableColumn><Button onClick={() => this.handleUpdateStock()} icon>check_circle</Button></TableColumn>
            </TableRow>
        );
    }
}