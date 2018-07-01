import React, {Component} from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardText,
    CardTitle,
    FontIcon,
} from 'react-md';
import { Link } from 'react-router-dom';

const style = { maxWidth: '45%', marginBottom: '5px', marginTop: '5px'};

export class ManageCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Card style={style}
              className="md-block-centered"
              key={this.props.key}>
            <CardTitle
                title={this.props.title}
                subtitle={this.props.type}
                avatar={<Avatar src={this.props.posters.detailed} role="presentation"/>}
            >
                {/*<SimpleLink to={`/attractiondetail/${this.props.movie._id}`}>{this.props.movie.title}</SimpleLink>*/}
            </CardTitle>
            <CardActions expander>
                {<Button style={{marginRight:'30px'}} raised primary><Link to={`/edit/${this.props._id}`}></Link>Edit</Button>}
                {/*<Button flat>edit</Button>*/}
                <Button  raised primary onClick={() => this.props.onDelete(this.props._id)}>delete</Button>
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
