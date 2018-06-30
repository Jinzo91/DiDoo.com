"use strict";

import React from 'react';
import { Avatar, TableRow, TableColumn, FontIcon, Button,Card, CardTitle, CardText, Slider } from 'react-md';
import {Link, withRouter} from 'react-router-dom';
import { SimpleLink } from '../SimpleLink';
import UserService from '../../services/UserService';
import OrderList from "./OrderList";
const style = { maxWidth: '80%', marginBottom: '5px', marginTop: '5px'};

export class OrderRow extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <Card style={style}
                  className="md-block-centered">
                <CardTitle
                    title =  {this.props.ticket.attractionId}
                    avatar ={<Avatar src={this.props.attraction.posters.original} role="presentation"/>}>
                </CardTitle>

                <CardText>
                    <p>valid until:{this.props.ticket.date} </p>
                    <p>quantity:{this.props.quantity}</p>
                    <Button  onClick={() => this.props.history.push(`/mycomments/addcomments/${this.props.ticket.attractionId}`)} flat icon>edit</Button>
                    <Button flat icon>undo</Button>
                </CardText>
            </Card>
        );
    }
}

export default withRouter(OrderRow);