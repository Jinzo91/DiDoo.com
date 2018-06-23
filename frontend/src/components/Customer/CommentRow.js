"use strict";
import React from 'react';
import { Avatar, Button, Card, CardActions, CardText, CardTitle, Media } from 'react-md';

export class CommentRow extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Card
              className="md-block-centered">
            <CardTitle>{this.props.attraction.title}</CardTitle>
           
            <CardText>
                <p>
                    {this.props.context}
                </p>
                <Button flat>edit</Button>
                <Button flat icon>delete</Button>
            </CardText>
        </Card>
    );
    }
}
