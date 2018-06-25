"use strict";

import React from 'react';

import CommentList from '../../components/Customer/CommentList';
import CommentService from '../../services/CommentService';
import UserService from "../../services/UserService";
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

    /*deleteComment(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        TicketService.deleteTicket(id).then((message) => {

            let ticketIndex = this.state.data.map(movie => movie['_id']).indexOf(id);
            let ticket = this.state.data;
            ticket.splice(ticketIndex, 1);
            this.setState({
                data: [...tick()],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }*/

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <CommentList data={this.state.data}/>
        );
    }
}
