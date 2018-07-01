"use strict";

import React, {PureComponent} from 'react';
import {
    Media,
    Avatar,
    TableRow,
    TableColumn,
    FontIcon,
    Button,
    Card,
    CardTitle,
    CardText,
    Slider,
    DialogContainer,
    TextField
} from 'react-md';
import {Link, withRouter} from 'react-router-dom';

export class OrderRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            process: '',
            visible: false
        }
    }

    /*    state = { visible: false };*/
    show = () => {
        this.setState({visible: true});
    };
    changeprocess = () => {
        this.setState({process: 'In process'});
        this.setState({visible: false});

    };
    hide = () => {
        this.setState({visible: false});
    };

    render() {
        const {visible} = this.state;
        const actions = [];
        actions.push({secondary: true, children: 'Cancel', onClick: this.hide});
        actions.push(<Button flat primary swapTheming onClick={this.changeprocess}>Confirm</Button>);
        return (
            <Card style={{
                border: '1px solid transparent',
                borderRadius: '15px',
                maxWidth: '70%',
                height: '260px',
                marginBottom: '5px',
                marginTop: '30px',
                backgroundColor: 'rgba(255,255,255,0.7)'
            }}
                  className="md-block-centered">
                <CardTitle style={{marginLeft: '40px', marginTop: '20px', width: '80%',}}
                           avatar={<img style={{width: '240px', height: '200px'}}
                                        src={this.props.attraction.posters.original}/>}
                >
                    <p style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginLeft: '50px',
                        marginTop: '-100px'
                    }}>{this.props.attraction.title}</p>
                </CardTitle>

                <CardText style={{marginLeft: '400px', marginTop: '-150px', width: '40%'}}>
                    <p style={{fontWeight: 'bold'}}>Valid until: {this.props.ticket.date.slice(0, 10)}</p>
                    <p style={{fontWeight: 'bold'}}>Quantity: {this.props.quantity}</p>
                    <p style={{fontSize: '18px', color: 'red'}}
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
                <div>
                    <Button style={{marginLeft: '70%'}}
                            onClick={this.show}
                            onClick={() => this.props.history.push(`/mycomments/addcomments/${this.props.ticket.attractionId}`)}
                            flat iconChildren={'mode_comment'}>Comment</Button>
                    <Button style={{margin: 'auto'}}
                            onClick={this.show} flat iconChildren={'undo'}>Return Ticket</Button>
                </div>
            </Card>
        );
    }
}

export default withRouter(OrderRow);