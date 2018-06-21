"use strict";

import React from 'react';

import { TAList } from '../../components/TouristAttraction/TAList';
import { TACard } from '../../components/TouristAttraction/TACard1';

import MovieService from '../../services/MovieService'

export class ManageTAView extends React.Component {

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

        MovieService.getMovies().then(data => {
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
            <TAList/>
        );
    }
}