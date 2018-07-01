import React, {Component} from 'react';
import {
    Card, Media, CardText,
    CardTitle, Avatar, CardActions
} from 'react-md';
import avatar from '../../images/avatar3.png';

class CommentCard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Card className="md-block-centered">
                <CardTitle
                    title={this.props.author}
                    subtitle={(new Date(this.props.time)).toLocaleString("en-US")}
                    avatar={<Avatar src={avatar} role="presentation"/>}
                />
                <CardText>
                    <p>
                        {this.props.content}
                    </p>
                </CardText>
            </Card>
        );
    }
}

export default CommentCard;
