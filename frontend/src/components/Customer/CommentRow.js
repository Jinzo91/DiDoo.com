"use strict";
import React from 'react';
import {Avatar, Button, Card, CardActions, CardText, CardTitle, Media, DialogContainer, TextField} from 'react-md';


export class CommentRow extends React.Component {


    constructor(props) {
        super(props);
    }

    state = {visible: false};

    show = () => {
        this.setState({visible: true});
    };

    hide = () => {
        this.setState({visible: false});
    };

    render() {
        const {visible} = this.state;
        const actions = [];
        actions.push({secondary: true, children: 'Cancel', onClick: this.hide});
        actions.push(<Button flat primary onClick={() => {
            this.props.onDelete(this.props.commentId) && this.hide
        }}>Confirm</Button>);
        return (

            <Card style={{
                border: '1px solid transparent',
                borderRadius: '15px',
                maxWidth: '70%',
                height: '260px',
                marginBottom: '10px',
                marginTop: '30px',
                backgroundColor: 'rgba(255,255,255,0.7)'
            }}
                  className="md-block-centered"
                  key={this.props.key}>
                <CardTitle style={{marginLeft: '40px', marginTop: '20px', width: '80%'}}
                           avatar={<img img style={{width: '240px', height: '200px'}}
                                        src={this.props.attraction.posters.original} role="presentation"/>}>
                    <p style={{
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginLeft: '50px',
                        marginTop: '-100px'
                    }}>{this.props.attraction.title}</p>
                </CardTitle>

                <CardText style={{marginLeft: '400px', marginTop: '-120px', width: '50%'}}>
                    <p style={{fontSize: '28px', fontWeight: 'bold'}}>
                        {this.props.context}
                    </p>
                    <Button style={{marginLeft: '100%', marginTop: '-20px'}} onClick={this.show} iconBefore={'true'}
                            iconChildren={'delete'}>Delete Comment</Button>
                    <DialogContainer width={'400px'}
                                     id="simple-action-dialog"
                                     visible={visible}
                                     onHide={this.hide}
                                     actions={actions}
                                     title="Delete the comment?"
                    >

                    </DialogContainer>
                </CardText>
            </Card>
        );
    }
}

export default CommentRow;