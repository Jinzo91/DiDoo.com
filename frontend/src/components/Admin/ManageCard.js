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
import { SimpleLink } from '../SimpleLink';
import { Link } from 'react-router-dom';

const style = { maxWidth: '80%', marginBottom: '5px', marginTop: '5px'};

export class ManageCard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
                {<Button flat><Link to={`/edit/${this.props._id}`}><FontIcon>mode_edit</FontIcon></Link></Button>}
                {/*<Button flat>edit</Button>*/}
                <Button flat onClick={() => this.props.onDelete(this.props._id)} icon>delete</Button>
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
