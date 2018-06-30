"use strict";

import React from 'react';
import ShoppingCartList from '../../components/ShoppingCart/ShoppingCartList';
import ShoppingService from '../../services/ShoppingService';
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

        let id = this.state.user.id;
        //let id = '5b2b79e775c5ad24707e4581';
        ShoppingService.listCart(id).then(data => {
            this.setState({
                data: [...data],
                loading: false,
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
            <ShoppingCartList data={this.state.data}/>
        );
    }
}
