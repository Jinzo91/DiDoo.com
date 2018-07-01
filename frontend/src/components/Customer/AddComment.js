"use strict";

import React from 'react';
import {Avatar, Card, CardTitle, Button, FontIcon, TextField} from 'react-md';
import {withRouter} from 'react-router-dom'
import UserService from '../../services/UserService';
import {AlertMessage} from '../../components/AlertMessage';
import Page from '../../components/Page';
import AttractionService from "../../services/AttractionService";
import CommentService from "../../services/CommentService";
import Background from '../../images/comment1.jpg';

const style = {maxWidth: '60%', marginBottom: '5px', marginTop: '100px'};


class AddComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            attractionId: this.props.match.params.attractionId,
            attraction: [],
            comment: ''
        }
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        AttractionService.getAttraction(this.state.attractionId).then((data) => {
            this.setState({
                attraction: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    handleChangeComment(value) {
        this.setState(Object.assign({}, this.state, {comment: value}));
    }

    handleSubmit() {
        const userId = UserService.getCurrentUser().id;
        console.log(userId, this.state.attractionId, this.state.comment)
        CommentService.createComment(userId, this.state.attractionId, this.state.comment).then((data) => {
            this.props.history.push('/mycomments');
        }).catch((e) => {
            console.error(e + ' Error while creating comment');
            this.setState(Object.assign({}, this.state, {error: 'Error while creating comment'}));
        });
    }

    render() {
        return (
            <Page>
                <img src={Background} className="bg"/>
                <Card style={{
                    maxWidth: '60%',
                    marginBottom: '5px',
                    marginTop: '100px',
                    backgroundColor: 'rgba(255,255,255,0.7)'
                }} className="md-block-centered">
                    <CardTitle
                        title={this.state.attraction.title}
                        //avatar ={<Avatar src={this.state.attraction.posters.original} role="presentation"/>}
                    >
                    </CardTitle>
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Comment"
                            id="ContextField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.comment}
                            onChange={this.handleChangeComment}
                            errorText="Comment is required"/>

                        <Button id="submit" type="submit"
                                disabled={this.state.context == ''}
                                primary swapTheming className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" primary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage
                            className="md-row md-full-width">{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
}

export default withRouter(AddComment);