"use strict";

import React from 'react';

import CommentList from '../../components/Customer/CommentList';
import CommentService from '../../services/CommentService';
import UserService from "../../services/UserService";
import Background from '../../images/comment1.jpg';
import '../../css/bg.css';

export class MyCommentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            user: UserService.getCurrentUser()
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        let id = this.state.user.id;

        CommentService.getCommentsUser(id).then(data => {
            this.setState({
                data: [...data],
                loading: false,
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteComment(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        CommentService.deleteComment(id).then((message) => {

            let commentIndex = this.state.data.map(comment => comment['_id']).indexOf(id);
            let comments = this.state.data;
            comments.splice(commentIndex, 1);
            this.setState({
                data: [...comments],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {

        return (
            <div>
                <img src={Background} className="bg"/>
                <CommentList data={this.state.data} onDelete={(id) => this.deleteComment(id)}/>
            </div>
        );
    }
}
