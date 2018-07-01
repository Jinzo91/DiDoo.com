"use strict";
import React from 'react';
import { Avatar, Button, Card, CardActions, CardText, CardTitle, Media,DialogContainer, TextField } from 'react-md';
import OrderList from "./OrderList";
import ShoppingService from "../../services/ShoppingService";
const style = { maxWidth: '80%', marginBottom: '5px', marginTop: '5px'};


export class CommentRow extends React.Component {




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
    /*deleteComment(commentId) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        CommentService.deleteComment(commentId).then((message) => {
            let commentIndex = this.state.data.map(comment => comment['_id']).indexOf(commentId);
            let comment = this.state.data;
            comment.splice(commentIndex, 1);
            this.setState({
                data: [...comment],
                loading: false
            });
            console.log(message)
        }).catch((e) => {
            console.error(e);
        });
    }*/

    render() {
        const { visible } = this.state;
        const actions = [];
        actions.push({ secondary: true, children: 'Cancel', onClick: this.hide });
        actions.push(<Button flat primary onClick={this.hide}>Confirm</Button>);
        return (

            <Card style={style}
                  className="md-block-centered"
                  key={this.props.key}>
            <CardTitle
                      title =  {this.props.attraction.title}
                      avatar ={<Avatar src={this.props.attraction.posters.original} role="presentation"/>}>
            </CardTitle>
           
            <CardText>
                <p >
                    {this.props.context}
                </p>
                <Button raised onClick={this.show} icon>delete</Button>
                <DialogContainer
                    id="simple-action-dialog"
                    visible={visible}
                    onHide={this.hide}
                    actions={  <Button onClick={() => this.props.onDelete(this.props.commentId) && this.hide} icon>delete</Button>}
                    title="sure to delete?"
                >

                </DialogContainer>
            </CardText>
        </Card>
    );
    }
}

export default CommentRow;