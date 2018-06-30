"use strict";

import React from 'react';
import ShoppingCartList from '../../components/ShoppingCart/ShoppingCartList';
import ShoppingService from '../../services/ShoppingService';
import MovieService from '../../services/MovieService';
import UserService from "../../services/UserService";


export class MyCartView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            user: UserService.getCurrentUser(),
        };
    }

    componentWillMount(){

        //let id = this.state.user.id;//'5b2261b20fa7313444b36627';
        let id = '5b2261b20fa7313444b36627';
        ShoppingService.getCart(id).then(data => {
            this.setState({
                data: [...data],
                loading: false,
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteMovie(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        MovieService.deleteMovie(id).then((message) => {

            let movieIndex = this.state.data.map(movie => movie['_id']).indexOf(id);
            let movies = this.state.data;
            movies.splice(movieIndex, 1);
            this.setState({
                data: [...movies],
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
            <ShoppingCartList data={this.state.data} onDelete={(id) => this.deleteMovie(id)}/>
        );
    }
}
