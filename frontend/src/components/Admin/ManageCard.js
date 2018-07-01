import React, {Component} from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardText,
    CardTitle,
    DialogContainer,
} from 'react-md';
import { Link } from 'react-router-dom';

const style = { maxWidth: '45%', marginBottom: '5px', marginTop: '5px',backgroundColor:'rgba(255, 255, 255, 0.7)',};

export class ManageCard extends Component {
    constructor(props) {
        super(props);
    }
    state = { visible: false };

    show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };

    render() {

        const { visible } = this.state;
        const actions = [];
        actions.push({ secondary: true, children: 'Cancel', onClick: this.hide });
        actions.push(<Button flat primary onClick={this.hide}>Confirm</Button>);

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

                <Button style={{marginRight:'50px',marginBottom:'5px',color:'white'}} raised primary onClick={this.show}>delete</Button>

                <DialogContainer
                    id="simple-action-dialog"
                    visible={visible}
                    onHide={this.hide}
                    actions={ <Button style={{marginLeft:'25px',marginBottom:'10px',color:'white'}} raised primary onClick={() => this.props.onDelete(this.props._id) && this.hide}>delete</Button>}
                    title="Are you sure to delete this attraction?"
                >

                </DialogContainer>


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
