import React, {Component} from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardText,
    CardTitle,
} from 'react-md';

const style = { maxWidth: '80%', marginBottom: '5px', marginTop: '5px'};

export class VisitorCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Card style={style} className="md-block-centered">
            <CardTitle
                title={this.props.title}
                subtitle={this.props.type}
                avatar={<Avatar src={this.props.image} role="presentation"/>}
            />
            <CardActions expander>
                <Button flat>Edit</Button>
                <Button flat>Remove</Button>
            </CardActions>
            <CardText expandable>
                <p>
                    {this.props.introduction}
                </p>
            </CardText>
        </Card>
    );
    }
}
