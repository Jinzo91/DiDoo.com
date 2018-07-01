"use strict";

import React from 'react';

import CommentList from '../../components/Customer/CommentList';
import CommentService from '../../services/CommentService';
import UserService from "../../services/UserService";
import Background from '../../images/AdminBG.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";

export class MyCommentView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            user: UserService.getCurrentUser() //獲得當前用戶id
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        let id = this.state.user.id;//'5b2e8301edbee41df00f6433';

        CommentService.getCommentsUser(id).then(data => {  // 從SERVICE裏抓數據放入data
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
                <img src={Background} className="bg" />
                <CommentList data={this.state.data} onDelete={(id) => this.deleteComment(id)}/>
            </div>
        );
    }
}
