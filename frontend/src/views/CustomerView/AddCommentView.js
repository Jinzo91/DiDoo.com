"use strict";

import React from 'react';

import AddComment from '../../components/Customer/AddComment';
import AttractionService from '../../services/AttractionService';
import CommentService from '../../services/CommentService';
import UserService from "../../services/UserService";


export class AddCommentView extends React.Component {

    constructor(props) {
        super(props);
        this.setState({
            loading: true,
            data:[],
            userId: UserService.getCurrentUser().id,
            attractionId:this.props.match.params.attractionId,
        })
    }

    componentWillMount(){

        this.setState({
            loading: false,
            data: undefined,
            error: undefined
        });
    }

    createComment(comment) {
        CommentService.createComment(comment).then((data) => {
            console.log(comment)
            this.props.history.push('/mycomments');
        }).catch((e) => {
            console.error(e + ' Error while creating comment');
            this.setState(Object.assign({}, this.state, {error: 'Error while creating comment'}));
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (<AddComment data={this.state.data} userId = {this.state.userId} attractionId = {this.state.attractionId} onSubmit={(comment) => this.createComment(comment)} error={this.state.error} />);
    }
}