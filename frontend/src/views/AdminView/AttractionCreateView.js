"use strict";

import React from 'react';

import AttractionForm from '../../components/Admin/AttractionForm';
import Background from '../../images/diego-jimenez-263102-unsplash.jpg';
import AttractionService from '../../services/AttractionService';


export class AttractionCreateView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.history.location.pathname === '/add') {
            this.setState({
                loading: false,
                data: undefined,
                error: undefined
            });
        }
        else if (this.props.location.state !== undefined && this.props.location.state.data !== undefined) {
            this.setState({
                loading: false,
                data: this.props.location.state.data,
                error: undefined
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });

            let id = this.props.match.params.attractionId;

            AttractionService.getAttraction(id).then((data) => {
                this.setState({
                    data,
                    loading: false
                });
            }).catch((e) => {
                console.error(e);
            });
        }
    }

    updateAttractions(attraction) {
        if (this.state.data === undefined) {
            AttractionService.createAttractions(attraction).then((data) => {
                console.log(attraction)
                this.props.history.push('/admin/unapproved');
            }).catch((e) => {
                console.error(e + ' Error while creating attraction');
                this.setState(Object.assign({}, this.state, {error: 'Error while creating attraction'}));
            });
        } else {
            console.log(attraction);
            AttractionService.updateAttractions(attraction).then((data) => {
                this.props.history.push('/admin');
            }).catch((e) => {
                console.error(e + ' Error while updating attraction');
                this.setState(Object.assign({}, this.state, {error: 'Error while updating attraction'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>
                <img src={Background} className="bg"/>
                <AttractionForm data={this.state.data} onSubmit={(attraction) => this.updateAttractions(attraction)}
                                error={this.state.error}/>
            </div>
        );
    }
}