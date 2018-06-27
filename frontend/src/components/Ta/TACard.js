import React, {Component} from 'react';
import {
    Button,
    Card,
    CardTitle,
    CardText,
    Media,
    MediaOverlay,
} from 'react-md';

const style = { maxWidth: 600 };

export class TACard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="md-grid">
                <Card className="cards__example md-cell md-cell--6 md-cell--8-tablet">
                    <Media>
                        <img src={this.props.image} alt="Nature from lorempixel" />
                        <MediaOverlay>
                            <CardTitle title={this.props.title} subtitle={this.props.type}>
                                {<Button flat><Link to={`/edit/${this.props._id}`}><FontIcon>edit_outline</FontIcon></Link></Button>}
                                {/*<Button flat>edit</Button>*/}
                                <Button flat onClick={() => this.props.onDelete(this.props._id)} icon>delete_outline</Button>
                            </CardTitle>
                        </MediaOverlay>
                    </Media>
                    <CardText>
                        <p>
                            {this.props.introduction}
                        </p>
                    </CardText>
                </Card>
            </div>
        );
    }
}