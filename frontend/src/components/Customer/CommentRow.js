"use strict";
import React from 'react';
import { Avatar, Button, Card, CardActions, CardText, CardTitle, Media } from 'react-md';
import OrderList from "./OrderList";
const style = { maxWidth: '80%', marginBottom: '5px', marginTop: '5px'};
export class CommentRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <Card style={style}
              className="md-block-centered">
            <CardTitle
                      title =  {this.props.attraction.title}
                      avatar ={<Avatar src={this.props.attraction.posters.original} role="presentation"/>}>
            </CardTitle>
           
            <CardText>
                <p>
                    {this.props.context}
                </p>
                <Button flat icon>delete</Button>
            </CardText>
        </Card>
    );
    }
}

export default CommentRow;