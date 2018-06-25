import React, { Component } from 'react';
import { Card, Media , CardText,
    CardTitle,} from 'react-md';
class CommentCard extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Card  className="md-block-centered">
                <CardTitle
                    title={this.props.author}
                    subtitle = {this.props.content}
                />
                <CardText expandable>
                    <p>
                        {this.props.content}
                    </p>

                </CardText>
            </Card>
        );
    }
}

export default  CommentCard;
