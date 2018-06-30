"use strict";

import React, { PureComponent }from 'react';
import { Avatar, TableRow, TableColumn, FontIcon, Button,Card, CardTitle, CardText, Slider,DialogContainer, TextField } from 'react-md';
import {Link, withRouter} from 'react-router-dom';
import { SimpleLink } from '../SimpleLink';
import UserService from '../../services/UserService';
import OrderList from "./OrderList";

const style = { maxWidth: '80%', marginBottom: '5px', marginTop: '5px'};

export class OrderRow extends React.Component {

    constructor(props) {
        super(props);
    }

    state = { visible: false };

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };
    render() {
        const { visible } = this.state;
        const actions = [];
        actions.push({ secondary: true, children: 'Cancel', onClick: this.hide });
        actions.push(<Button flat primary onClick={this.hide}>Confirm</Button>);
        return (

            <Card style={style}
                  className="md-block-centered">
                <CardTitle
                    title =  {this.props.attraction.title}
                    avatar ={<Avatar src={this.props.attraction.posters.original} role="presentation"/>}>
                </CardTitle>

                <CardText>
                    <p>valid until:{this.props.ticket.date} </p>
                    <p>quantity:{this.props.quantity}</p>
                    <Button  raised onClick={this.show} onClick={() => this.props.history.push(`/mycomments/addcomments/${this.props.ticket.attractionId}`)} flat icon>edit</Button>
                    <Button  raised onClick={this.show} flat icon>undo</Button>
                    <DialogContainer height={'300px'} width={'700px'}
                        id="simple-action-dialog"
                        visible={visible}
                        onHide={this.hide}
                        actions={actions}
                        title="Apply for return?"
                    >
                        <TextField
                            id="simple-action-dialog-field"
                            label="email address"
                            placeholder="Content..."
                            defaultValue="123@gmail.com"
                        />
                        <TextField
                            id="simple-action-dialog-field"
                            label="reason for return"
                            placeholder="Content..."
                            defaultValue="invalid/not interested……"
                            rows={3}
                        />
                    </DialogContainer>
                </CardText>
            </Card>
        );
    }
}

export default withRouter(OrderRow);