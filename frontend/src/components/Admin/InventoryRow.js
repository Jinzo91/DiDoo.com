"use strict";

import React from 'react';
import { Avatar, TableRow, TableColumn, FontIcon, Button,Card, CardTitle, CardText, Slider, TextField } from 'react-md';
import { Link } from 'react-router-dom';
import { SimpleLink } from '../SimpleLink';
import UserService from '../../services/UserService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';


export class InventoryRow extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate: moment(),//当前时间
            numOfTickets: this.props.data.stock,//Service passes parameter to here 100
            title : this.props.data.title,
            image : this.props.attraction.posters.detailed
        };
        this.handleChange = this.handleChange.bind(this);


    /*constructor(props) {
        super(props)
        this.state = {
            startDate: moment(),
            numOfTickets: 100 //Service passes parameter to here
        };
        this.handleChange = this.handleChange.bind(this);*/

        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeNumber(value) {
        this.setState(Object.assign({}, this.state, {numOfTickets: value}));
    }

    handleChangeDate(value) {
        this.setState(Object.assign({}, this.state, {startDate: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let data = this.props.data;
        if(data == undefined) {
            data = {};
        }

        data.title = this.state.title;
        data.image = this.state.image;
        data.startDate = this.state.startDate;
        data.numOfTickets = this.state.numOfTickets;

       this.props.onSubmit(data);
    }

    handleChange(date,number) {
        this.setState({
            startDate: date,
            numOfTickets: number,
        });
    }

    render() {
        return (
            <TableRow key={this.props.key} onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                <TableColumn><Avatar src={this.props.attraction.posters.detailed} role="presentation"/></TableColumn>
                <TableColumn>{this.props.attraction.title}</TableColumn>
                <TableColumn><DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChangeDate} //only when value has changed
                ></DatePicker></TableColumn>
                <TableColumn>
                    <TextField
                        value={this.state.numOfTickets}
                        onChange={(value)=>{this.setState({numOfTickets: value})}}
                        type='number'
                    ></TextField>
                </TableColumn>
                    <TableColumn><Button onClick={() => this.props.onSubmit(this.props._id)} icon>check_circle</Button></TableColumn>
            </TableRow>
        );
    }
}