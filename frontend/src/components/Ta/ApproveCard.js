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

const style = { maxWidth: '45%', marginBottom: '5px', marginTop: '5px'};

export class ApproveCard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
                    {/*<SimpleLink to={`/attractiondetail/${this.props.movie._id}`}>{this.props.movie.title}</SimpleLink>*/}
                </CardTitle>
                <CardActions expander>
                    <Button style={{marginLeft:'25px',marginBottom:'10px',color:'white'}} raised primary onClick={() => this.props.onApprove(this.props._id)}>Approve</Button>
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