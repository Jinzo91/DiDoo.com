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

export class ApproveCard extends Component {
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
                    <Button flat>Approve</Button>
                    <Button flat>Reject</Button>
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
