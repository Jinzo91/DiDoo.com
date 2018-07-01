"use strict";

import React, { PureComponent }from 'react';
import { Media,Avatar, TableRow, TableColumn, FontIcon, Button,Card, CardTitle, CardText, Slider,DialogContainer, TextField } from 'react-md';
import {Link, withRouter} from 'react-router-dom';
import { SimpleLink } from '../SimpleLink';
import UserService from '../../services/UserService';
import OrderList from "./OrderList";

export class OrderRow extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            process:'',
            visible: false
        }
    }
/*    state = { visible: false };*/
    show = () => {
        this.setState({ visible: true });
    };
    changeprocess = () => {
        this.setState({ process: 'in process' });
        this.setState({ visible:false });

    };
    hide = () => {
        this.setState({ visible: false });
    };
    render() {
        const { visible } = this.state;
        const actions = [];
        actions.push({ secondary: true, children: 'Cancel', onClick: this.hide });
        actions.push(<Button flat primary onClick={this.changeprocess}>Confirm</Button>);
        return (
            <Card style={{ maxWidth: '70%', height:'30%', marginBottom: '5px', marginTop: '30px'}}
                  className="md-block-centered">
                <CardTitle style={{marginLeft: '40px', marginTop: '20px', width: '80%'}}
                    avatar ={<img src={this.props.attraction.posters.original}/>}
                ><p style={{marginLeft: '50px', marginTop: '-100px'}}>{this.props.attraction.title}</p>
                </CardTitle>

                <CardText style={{marginLeft: '400px', marginTop: '-150px', width: '40%'}}>
                    <p>valid until:{this.props.ticket.date} </p>
                    <p>quantity:{this.props.quantity}</p>
                    <p    style={{fontSize: '18px', color:'red'}}
                        >{this.state.process}</p>



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

                <Button style={{marginLeft:'900px', marginTop:'-80px'}}
                        raised onClick={this.show} onClick={() => this.props.history.push(`/mycomments/addcomments/${this.props.ticket.attractionId}`)} flat icon>edit</Button>
                <Button style={{marginLeft:'1000px',marginTop:'-100px'}}
                        raised onClick={this.show} flat icon>undo</Button>
            </Card>
        );
    }
}

export default withRouter(OrderRow);