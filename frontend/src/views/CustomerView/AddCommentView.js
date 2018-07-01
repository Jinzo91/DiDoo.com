"use strict";

import React from 'react';

import AddComment from '../../components/Customer/AddComment';


export class AddCommentView extends React.Component {

    constructor(props) {
        super(props);
        this.setState({
            loading: true,
            data: [],
            attraction: []
        })
    }

    componentWillMount() {

        this.setState({
            loading: false,
            data: undefined,
            error: undefined
        });
    }


    render() {

        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (<AddComment data={this.state.data} error={this.state.error}/>);
    }
}