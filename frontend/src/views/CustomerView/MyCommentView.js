"use strict";

import React from 'react';

import CommentList from '../../components/Customer/CommentList';
import CommentService from '../../services/CommentService';
import MovieService from '../../services/MovieService'

export class MyCommentView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        //
        // CommentService.getComments().then((data) => {
        //     this.setState({
        //         data: [...data],
        //         loading: false
        //     });
        // }).catch((e) => {
        //     console.error(e);
        // });

        CommentService.getComments().then(data => {  // 從SERVICE裏抓數據放入data
            this.setState({
                data,
                loading: false,
            })
        });
    }

    deleteComment(id) {
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
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <CommentList data={this.state.data}/>
        );
    }
}
