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
            <CardTitle style={{marginLeft:'10px'}}
                title={this.props.title}
                subtitle={this.props.type}
                avatar={<Avatar src={this.props.posters.detailed} role="presentation"/>}
            >
            </CardTitle>
            <CardActions expander>
                <Button style={{marginLeft:'15px',marginRight:'20px', marginBottom:'5px', color:'white'}} raised primary><Link style={{textDecoration:'none',color:'white'}} to={`/edit/${this.props._id}`}>Edit</Link></Button>
                <Button style={{marginRight:'50px',marginBottom:'5px',color:'white'}} raised primary onClick={() => this.props.onDelete(this.props._id)}>delete</Button>
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
