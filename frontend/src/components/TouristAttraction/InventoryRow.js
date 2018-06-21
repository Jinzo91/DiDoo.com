"use strict";

import React from 'react';
import { TableRow, TableColumn, FontIcon, Button,Card, CardTitle, CardText, Slider, TextField } from 'react-md';
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
            startDate: moment(),
            numOfTickets: 100 //Service passes parameter to here
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <TableRow key={this.props.key}>
                <TableColumn><Link to={`/show/${this.props.movie._id}`}><FontIcon>image</FontIcon></Link></TableColumn>
                <TableColumn><SimpleLink to={`/show/${this.props.movie._id}`}>{this.props.movie.title}</SimpleLink></TableColumn>
                <TableColumn><DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange} //only when value has changed
                ></DatePicker></TableColumn>
                <TableColumn>
                    <TextField
                        value={this.state.numOfTickets}
                        onChange={(value)=>{this.setState({numOfTickets: value})}}
                        type='number'
                    ></TextField>
                </TableColumn>
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.movie._id)} icon>check_circle</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>check_circle</FontIcon></Link></TableColumn>
                }
                {UserService.isAuthenticated() ?
                    <TableColumn><Button onClick={() => this.props.onDelete(this.props.movie._id)} icon>cancel</Button></TableColumn>
                    : <TableColumn><Link to={'/login'}><FontIcon>cancel</FontIcon></Link></TableColumn>
                }

            </TableRow>
        );
    }
}