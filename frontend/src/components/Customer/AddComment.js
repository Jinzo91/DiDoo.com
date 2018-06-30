"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'
import UserService from  '../../services/UserService';
import { AlertMessage } from '../../components/AlertMessage';
import Page from '../../components/Page';


const style = { maxWidth: 500 };


class AddComment extends React.Component {

    constructor(props) {
        super(props);

        if(this.props.data != undefined) {
            this.state = {
                comment:[],
                user: this.props.userId,
                attractionId: this.props.match.params.attractionId,
            };
        } else {
            this.state ={
                comment:[],
                user: this.props.userId,
                attractionId: this.props.match.params.attractionId,
            };
        }
        this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeComment(value) {
        this.setState(Object.assign({}, this.state, {comment: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let data = this.props.data;
        if(data == undefined) {
            data = {};
        }

        data.comment = this.state.comment;


        this.props.onSubmit(data);
    }

    render() {
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Comment"
                            id="ContextField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.context}
                            onChange={this.handleChangeComment}
                            errorText="Comment is required"/>

                        <Button id="submit" type="submit"
                                disabled={ this.state.context == undefined || this.state.context == ''
                                    /*|| this.state.type == undefined || this.state.type == ''
                                    || this.state.address == undefined || this.state.address == ''*/}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
}

export default withRouter(AddComment);